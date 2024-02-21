import React, {createContext, useContext} from "react";
import './style.css';
const themeDefault = {
  border: '10px solid green'
};
const themeContext = createContext(themeDefault);

export default function App() {
  const theme = useContext(themeContext);
  console.log('theme', theme);
  return ( 
    <themeContext.Provider value={{border: '10px solid #735aff'}}>
      <div className="root" style={ theme }>
        <h1>Hello World</h1>
        <Sub1/>
      </div>
    </themeContext.Provider>
  )
}

function Sub1() {
  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{border: '10px solid red'}}>
      <div style={ theme }>
        <h1>Sub1</h1>
        <Sub2 />
      </div>
    </themeContext.Provider>
  )
}

function Sub2() {
  const theme = useContext(themeContext);
  return ( 
    <div style={ theme }>
      <h2>Sub2</h2>
      <Sub3/>
    </div>
  )
}

function Sub3() {
  const theme = useContext(themeContext);
  return ( 
    <div style={ theme }>
      <h3>Sub3</h3>
    </div>
  )
}
