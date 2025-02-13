import { range } from "balanced-match";
import React, {useEffect,useState} from "react"

export default function Proba()
{
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/egy')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
        
    }, [])

    return <form className="item">
        <div className="container row">
        <div className="col-sm-4">
        {data.map((d, i) => (
            <div key={i}>
                <img src={d.kep} className="res-image"/>
            </div>
        ))} 
        </div>   
        <div className="text-content col-sm-8 row" id="right">
            <div className="col-sm-3" id="nev">
                {data.map((d, i) => (
                <div key={i}>
                <h1>{d.Receptek_neve}</h1>
                </div>
                ))} 
            </div>
            <div className="col-sm-7" id="recept">
            {data.map((d, i) => (
                <div key={i}>
                <p>{d.Keszites}</p>
                </div>
                 ))}     
            </div>

            <div className="col-sm-1">
                <button className="action-button">Click Me</button>
            </div>
        </div>
    </div>
    </form>
}

