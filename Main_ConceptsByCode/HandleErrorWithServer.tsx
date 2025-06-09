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
    axios
      .get<user[]>("jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => serError(err.message)); //error handled here
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
