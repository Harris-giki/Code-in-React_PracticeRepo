// showing the loading when the data is being fetched from the server

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

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border">Loading...</div>}
      {/* dynamic rendering of loading message */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
