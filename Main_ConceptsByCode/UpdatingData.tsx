import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface user {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] = useState(""); // fixed: serError -> setError
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
        setError(err.message); // error handled here
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
        setError(err.message); // show error
        setUsers(originalUsers); // rollback UI to previous state
      });
  };

  const updateUser = (targetUser: user) => {
    const originalUsers = [...users]; // backup current user list

    const updatedUser = { ...targetUser, name: targetUser.name + "!" }; // update name
    setUsers(
      users.map((u) => (u.id === targetUser.id ? updatedUser : u)) // update matching user
    );

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + targetUser.id,
        updatedUser
      )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers); // rollback on error
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border">Loading...</div>}
      <div>
        {/* The update button here currently updates the first user only for demo */}
        <button
          className="btn btn-primary mx-1"
          onClick={() => updateUser(users[0])}
          disabled={users.length === 0}
        >
          Update
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
      </div>
    </>
  );
}

export default App;
