// complete code commented to remove compilation errors
// //futher cleaning the code and making it more modular
// // for resuablilty of HTTP request code placed in user-services.ts
// import { useEffect, useState } from "react";
// import apiClient, { CancelledError } from "./services/api-client";
// import userService, { user } from "./services/user-service";

// function App() {
//   const [users, setUsers] = useState<user[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     const { request, cancel } = userService.getAllUsers(); //services used here
//     request
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         //if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => cancel();
//   }, []);

//   const deleteUser = (user: user) => {
//     const originalUsers = [...users];
//     setUsers(users.filter((u) => u.id !== user.id));

//     apiClient //changed from axios here
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
