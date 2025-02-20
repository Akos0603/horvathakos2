import React from "react";
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';




const Felhasznalok = (props) => {
    const [felhasznalok, setFelhasznalok] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
            .then(res => res.json())
            .then(data => setFelhasznalok(data))
    }, []);
    return (
        <div className="container-fluid bg-light-gray"> 
            <article className="row justify-content-center ">
                <h1 className="text-center display-4 mt-5 mb-5 bg-light-red">Felhasználók</h1>
                <div className="row">
                        {felhasznalok.map(felhasznalo => (

                            <div className="col-md-4">
                                <div className=" bg-light-red br3 pa3 ma2 grow bw2 shadow-5" key={felhasznalo.id}>
                                    <h2 className="text-center">{felhasznalo.name}</h2>
                                    <p>Felhasználó neve: {felhasznalo.name}</p>
                                    <p>Email: {felhasznalo.email}</p>
                                    <p>Address: {felhasznalo.address.street}, {felhasznalo.address.city}</p>
                                    <p>Phone: {felhasznalo.phone}</p>
                                    <p>Website: {felhasznalo.website}</p>
                                    <p>Company: {felhasznalo.company.name}</p>
                                </div>
                            </div>
                            
                        ))}
                </div>
            </article>
        </div>
    );
}

export default Felhasznalok;