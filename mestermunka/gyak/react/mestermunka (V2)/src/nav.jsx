import React from "react";
import { Link,NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { Route,Routes } from "react-router-dom"

const Nav = (() =>{
    return(
        <>
            <div>
                <Navbar/>
                <h1>Receptek</h1>
            </div>
        </>
    )

})

export default Nav