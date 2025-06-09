// await is only used with async

import axios from "axios";
import { useEffect, useState } from "react";

interface user {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<user[]>([]);
  const [error, serError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      // get ->promise -> res/err; but now we wont use get then and catch rather await and async
      try {
        const res = await axios.get<user[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err: any) {
        serError(err.message); // error handled here
      }
    };

    fetchUsers(); // call the async function inside useEffect
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {/* the dynamic rendering or error only if it exists */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
