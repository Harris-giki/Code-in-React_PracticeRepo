// senario: imagine if the user goes away from the page while the req is being sent to server
// at this point we would have to abort the task of sending the req

import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

interface user {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<user[]>([]);
  const [error, serError] = useState("");
  useEffect(() => {
    const contoller = new AbortController(); // a clean up function to cancel the request by async op
    axios
      .get<user[]>("jsonplaceholder.typicode.com/users", {
        signal: contoller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        serError(err.message);
      }); //error handled here
    return () => contoller.abort();
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
