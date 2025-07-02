


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



import { Outlet } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
function Login(){
    return<>
    <div>
        <button><Link to="email">Email</Link></button>
         <button><Link to="password">Password</Link></button>

    </div>
  
    <h1>this is login page</h1>

    <Outlet/>
    <h1>this is nested routing demo</h1>
    </>
}

export function Email(){
return <>
<h1>This is Email</h1>
</>
}


export function Password(){
    return<>
    <h2>this is password</h2>
    </>
}
export default Login;