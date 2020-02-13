import React from "react"
import logoEmp from './img/logo.png';

export const MainNavbar = () => (
<section id="Menu">

   <img src={logoEmp} alt="logomarca da empresa" height="42" width="42" align="left" ></img>

    <ul className="App-menu" >
        <li className = "App-menu-item" > <a href="#">Menu 1</a> </li>
        <li className = "App-menu-item" > <a href="#">Menu 2</a> </li>
        <li className = "App-menu-item" > <a href="#">Menu 3</a> </li>
        <li className = "App-menu-item" > <a href="#">Menu 4</a> </li>
    </ul>
  </section>
);