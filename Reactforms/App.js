

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








// // functional component IN STATES
// import React,{useState} from "react"
// function App(){
//     let [counter,updateCounter]=useState(0)
//     return(
//         <>
//         <h1>Counter Value:{counter}</h1>
//         <button onClick={()=> {
//             updateCounter(++counter)

//         }}>Change</button>
//         </>
//     )
// }

// export default App




// //Class Component

// import React from "react"
// class App extends React.Component{
//   state={
//     counter:0
//   }
  
//   render(){
//       return(
//         <>
//             <h1>Counter Value:{this.state.counter}</h1>
//             <button onClick={()=>{
//               this.setState({
//                 counter:++this.state.counter
//               })
//             }
              
//             }>Change</button>
//         </>
//       )
//   }
  
// }
// export default App


// //task 3
// import React from "react";
// import GitHubProfileViewer from "./GitHubProfileViewer";

// function App() {
//   return <GitHubProfileViewer />;
// }

// export default App;




// // mounting

// import React ,{Component} from "react";
// import Child from "./child"
// class App extends Component{
//  constructor(){
//   super()
//   this.state={x:10}
//  }
//   render(){
  
//     return(
//       <>
//       <h1>Parent Component
//         </h1>
//         <Child  data={this.state.x}/>
      
//       <button onClick={()=>{this.setState({x:this.state.x+10})}}>click</button>
//       </>
//     )
//   } 

// }
// export default App;







//taskmanager
// import React from 'react';
// import TaskManager from './TaskManager';

// function App() {
//   return (
//     <div className="App">
//       <TaskManager />
//     </div>
//   );
// }

// export default App;



// //Assignment
// import React from 'react';
// import TodoApp from './TodoApp';

// function App() {
//   return (
//     <div>
//       <TodoApp />
//     </div>
//   );
// }

// export default App;




// // routing
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Navbar from './navbar';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<h2>404 Page Not Found</h2>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;






// src/App.js
import React from 'react';
import Forms from './Forms';

function App() {
  return (
    <div className="App">
      <Forms />
    </div>
  );
}

export default App;
