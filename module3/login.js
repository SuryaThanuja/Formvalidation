


// import React, { useState } from "react";

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault(); 
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div className="border w-25 mt-5 m-auto p-3">
//       <h2 className="text-primary text-center">Login Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mt-3">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mt-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mt-3">
//           <button type="submit" className="btn btn-primary w-100">
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React from 'react';

function Login() {
  return <h2>This is Login page</h2>;
}

export default Login;
