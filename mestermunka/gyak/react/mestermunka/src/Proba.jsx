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
        <div className="container">
        {data.map((d, i) => (
            <div key={i}>
                <img src={d.kep} alt="Description of Image" className="responsive-image"/>
            </div>
        ))} 
        
        <div className="text-content">
        {data.map((d, i) => (
            <div key={i}>
                <h1>{d.Receptek_neve}</h1>
            </div>
        ))} 
        {data.map((d, i) => (
            <div key={i}>
                <p>{d.Keszites}</p>
            </div>
        ))} 
        <ul></ul>
        <button className="action-button">Click Me</button>
        </div>
    </div>
    </form>
}

