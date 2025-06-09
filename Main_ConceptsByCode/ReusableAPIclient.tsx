//note just learn the concept, however the whole code is commented to prevent errors
// refer to the api-client file in services for better understanding

// import { useEffect, useState } from "react";
// import apiClient, { CancelledError } from "./services/api-client";
// interface user {
//   id: number;
//   name: string;
// }

// function App() {
//   const [users, setUsers] = useState<user[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);

//     apiClient //changed from axios here
//       .get<user[]>("/users", { //changed URL here using services
//         signal: controller.signal,
//       })
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         //if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   const deleteUser = (user: user) => {
//     const originalUsers = [...users];
//     setUsers(users.filter((u) => u.id !== user.id));

//     apiClient//changed from axios here
//       .delete("/users/" + user.id) //changed URL here using services
//       .catch((err) => {
//         setError(err.message);
//         setUsers(originalUsers);
//       });
//   };

//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}
//       {loading && <div className="spinner-border">Loading...</div>}
//       <div>
//         {/* dynamic rendering of loading message */}
//         <ul className="list-group">
//           {users.map((user) => (
//             <li
//               key={user.id}
//               className="list-group-item d-flex justify-content-between"
//             >
//               {user.name}
//               <button
//                 className="btn btn-outline-danger"
//                 onClick={() => deleteUser(user)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default App;
