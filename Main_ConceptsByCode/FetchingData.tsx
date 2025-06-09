// get dummy data from jsonplaceholder.typicode.com
// sending HTTP Request has two methods of either using:
// the fetch function
// through axios library

import axios from "axios";
import { useEffect, useState } from "react";

// we made an interface after identifing the data form we are receiving from the server to make the access easier
// as without it we cannot access the properties directly

interface user {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<user[]>([]);

  // after the DOM and UI creation the code inside useEffect shall execute
  useEffect(() => {
    axios
      .get<user[]>("jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
    // the above described method returns a promise which is an object of result
    // or failure of any async (long running) operation
  }, []);
  //empty array as a dependancy to this effect to prevent infinite loop
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default App;
