// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import { render } from "@testing-library/react"

// let root = ReactDOM.createRoot(document.getElementById('root'));
// let name = "hello sony";

// root.render(<h3>{name}</h3>);







// import React from 'react';
// import ReactDOM from 'react-dom/client';

// let root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<ul>
//     <li>HOME</li>
//     <li>ABOUT US</li>
// </ul>);





// import React from 'react';
// import ReactDOM from 'react-dom/client';

// let root = ReactDOM.createRoot(document.getElementById('root'));
// let menu=(<ul>
//     <li>HOME</li>
//     <li>ABOUT US</li>
// </ul>);

// root.render(menu)




//funtional component
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function MyComponent(){
//     return<div>hello world</div>;
// }
// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyComponent/>);







//COMPONENTS
// import React from "react";
// import ReactDom from 'react-dom/client';
// let root=ReactDom.createRoot(document.getElementById("root"));
// function Header(){
//     let menu=['home','about us','contact us']
        
//     return(
//         <header>
//         <ul>
//         <li>{menu[0]}</li>
//           <li>{menu[1]}</li>
//             <li>{menu[2]}</li>
//         </ul>
//       </header>
//     )
// }

// root.render(<Header/>)






// //COMPONENTS
// import React from "react";
// import ReactDOM from 'react-dom/client';
// let root=ReactDOM.createRoot(document.getElementById("root"));

// class Menu extends React.Component{
//     render(){
//          let menu=['home','about us','contact us']
//         return(<header>
//        <ul>
//         <li>{menu[0]}</li>
//         <li>{menu[1]}</li>
//         <li>{menu[2]}</li>
//         </ul>
//         </header>)
//     }
// }
// root.render(<Menu/>)






// // CLASS COMPONENTS
// import React from "react";
// import ReactDOM from 'react-dom/client';
// let root = ReactDOM.createRoot(document.getElementById("root"));

// class Menu extends React.Component {
//   render() {
//     let menu = ['home', 'about us', 'contact us'];
//     return (
//       <header>
//         <ul>
//           <li>{menu[0]}</li>
//           <li>{menu[1]}</li>
//           <li>{menu[2]}</li>
//         </ul>
//       </header>
//     );
//   }
// }

// root.render(<Menu />);




//   //EXPORTS AND IMPORTS
// //default 
// import React from "react";
// import ReactDOM from 'react-dom/client';
// import x, {person as p}from './App'
// const root = ReactDOM.createRoot(document.getElementById("root"));

// function Menu() {
//     console.log(p)
//     console.log(x)

//     return (
//         <header>
//             <ul>
//                 <li>HOME</li>
//                 <li>ABOUT US</li>
//                 <li>CONTACT</li>
//             </ul>
//         </header>
//     );
// }

// root.render(< Menu/>);







// import React from "react";
// import ReactDOM from 'react-dom/client';
// import A from './App'
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<A/>);



// //component styling in react
// import React from "react";
// import ReactDOM from "react-dom/client";


// import App from './App'
// <div id="root"></div>

// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <App/>
// );


// ARROW FUNCTION
// import React from "react";
// import ReactDOM from "react-dom/client";
// const Welcome = ()=>{
//     return  <div>"hello sony"</div>
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

//  root.render(<Welcome/>);



// CLASS COMPONENT

// import React from "react";
// import ReactDOM from "react-dom/client";

// class App extends React.Component {
//     render(){
//         return <h1>Hello Renu</h1>
//     }

// }
// const container=document.getElementById("root")
// const root=ReactDOM.createRoot(container)

// root.render(<App/>)






// index.js



// import React from "react";
// import ReactDOM from "react-dom/client"; 
// import App from "./App"; 

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement)
// root.render(<App />); 


// WEBPAGE
// import React from "react";
// import ReactDOM from "react-dom/client"; 
// import App from "./App";
// import  "./index.css"


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);


//1. Using React.Component
// import React from "react";
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"))
// class App extends React.Component{
//     render(){
//         return(<h1>hello surya</h1>)
//     }
// }
// root.render(<App/>)

//2.2. Using Component (after importing it directly)

// import React,{Component} from "react"
// import ReactDOM from "react-dom/client";
// class App extends Component{
//     render(){
//         return(<h1>hello renu</h1>)
//     }
// }
// export default App;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);


// functional component
// import React from "react"
// import ReactDOM from "react-dom/client"
// const App =()=>{
//     return(
//         <h1>hello jatayuv ai</h1>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App/>)

//how to define mulitiple components

// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App"


// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App/>)







//props
// import React from "react";
// import ReactDOM from "react-dom/client"
// import App from "./App"

// function Index(){
//     return(
//         <div><App name="Sony" age={22} /></div>
    
//     )
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Index />);
// export default Index


// // Using Props with Destructuring
// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App"
// function Index(){
//     return(
//         <div><App name="thanuja" age={22} /></div>
//     )
// }
// const root =ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Index/>)
// export default Index




// props with class component

// import React from "react";
// import ReactDOM from "react-dom/client"
// import App from "./App"

// function Index(){
//     return(
//         <App name="Surya Thanuja" age={22} />
//     )
// }
// const root =ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Index/>)
// export default Index

//Destucting props with class components

// import React from "react";
// import ReactDOM from "react-dom/client"
// import App from "./App"
// function Index(){
//     return(
//         <div><App name="Thanuja" age={22} /></div>
//     )
// }

// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Index/>)





// states
// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);



// // task 3
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);


// mounting
import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App"

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)