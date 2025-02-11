
import { text } from "body-parser";
import React, {useEffect,useState} from "react"

function teszt() {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('https//localhost:3000/Keszities')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }, [])
    
    return(
        <div style={{padding: "50px"}}>
            {data.map(d, i => (
            <tr key={i}>
                <h1>{d.Keszites}</h1>
            </tr>
        ))} 
        </div>
    )
}

export default teszt

