import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface user {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<user[]>([]);
  const [error, serError] = useState("");
  const [loading, setLoading] = useState(false); // state to show loading

  useEffect(() => {
    const controller = new AbortController(); // a clean up function to cancel the request by async op

    setLoading(true); // start loading

    axios
      .get<user[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false); // stop loading on success
      }) //insert here if needed
      .catch((err) => {
        if (err instanceof CanceledError) return;
        serError(err.message); // error handled here
        setLoading(false); // stop loading on error
        //insert here if needed
      });

    return () => controller.abort(); // cleanup when component unmounts
  }, []);
  const deleteUser = (user: user) => {
    const originalUsers = [...users]; // backup current user list
    setUsers(users.filter((u) => u.id !== user.id)); // optimistically remove user from UI

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        serError(err.message); // show error
        setUsers(originalUsers); // rollback UI to previous state
      });
  };
  const addUser = () => {
    const newUser = { id: 0, name: "Mosh" };
    setUsers([...users, newUser]);

    axios
      .post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        serError(err.message);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border">Loading...</div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      {/* dynamic rendering of loading message */}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
