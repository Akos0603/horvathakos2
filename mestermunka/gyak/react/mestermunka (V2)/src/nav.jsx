import React from "react";
import { Link,NavLink } from "react-router-dom";
import NavBar from "./Navbar";
import { Route,Routes } from "react-router-dom"

const Nav = (() =>{
    return(
        <>
            <div>
                <NavBar/>
                <h1>Receptek</h1>
            </div>
        </>
    )

})

export default Nav