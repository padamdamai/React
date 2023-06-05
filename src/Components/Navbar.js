import React from "react";
import logo from'../logo.svg'
// import logo from '/home/_$/Documents/my-app/src/Components/react.png'
export default function Navbar(){
    return <>
            <nav>
            <img src={logo} className="logo" width="100px" height="50px"/>
            <h3>React Course</h3>
            <h3>Practice</h3>
             </nav>    
            </>
}