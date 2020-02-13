import React from 'react';
import logo from './logo.svg';
import logoEmp from './img/logo.png';
import './App.css';
import  { MainNavbar } from  "./MainNavbar.js";
import  { SideBar }  from "./SideBar.js";
import  { Cabecalho } from  "./Cabecalho.js";
import  { Artigo } from "./Artigo.js";

function App() {
  return (
    <div className="App">
      <Cabecalho/>

      <MainNavbar/>


      <Artigo/> 
      <SideBar/>

      

      <header className="App-header">
{/*         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 */}      
 
    </header>




    </div>
  );
}

export default App;
