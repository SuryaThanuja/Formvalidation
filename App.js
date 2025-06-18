

// // App.js
// import React from "react";

// function App() {
//   return (
//     <header>
//       <ul>
//         <li>HOME</li>
//         <li>ABOUT US</li>
//         <li>CONTACT</li>
//       </ul>
//     </header>
//   );
// }

// export default App;


//WEB PAGE
// import React from "react";
// import Header from "./header";

// function App() {
//   return (
//     <div>
//       <Header />
//       <main style={{ padding: "20px", textAlign: "center" }}>
//         <h1>Welcome to Jatayuv Ai</h1>

//       </main>
//     </div>
//   );
// }

// export default App;


//how to define mulitiple components

// import React from "react"

// const App =()=>{
//     return(
//         <div> Welcome to Jatayuv
//               <Sony/>
//         </div>     
//     )
// }
// const Sony=()=>{
//     return(<div> Travel & Explore
      
//     </div>)
// }

// export default App

// props
// import React from "react";
// function App(props){
//     return(
//         <h2>Hello,my name is {props.name} <br/>
//             I am {props.age} years old.
//         </h2>
        
//     )
// }
// export default App;

// Using Props with Destructuring

// import React from "react";
 
// function App({name,age}){
//     return(
//         <div>
//             my name is {name},age={age}
//         </div>
//     )

// }
// export default App




//props with class components

// import React,{Component} from "react";

// class App extends Component{
//     render(){
//         return(<div>name: {this.props.name}<br/>
//         age: {this.props.age}</div>)

//     }
// }
// export default App;


// //Destucting props with class components
// import React,{Component} from "react";
//  class App extends Component{
//     render(){
//     const {name,age}=this.props
//     return(<div>my name is{name},age{age}</div>)
//  }
//  }
//  export default App








// src/App.js
import React from 'react';
import SimpleForm from './SimpleForm';

function App() {
  return <SimpleForm />;
}

export default App;


