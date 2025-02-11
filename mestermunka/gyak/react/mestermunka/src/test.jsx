
import React, {useEffect,useState} from "react"

function Appp() {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/*')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }, [])
    
    return(
        <div style={{padding: "50px"}}>
                      <table>
                <thead>
                  <tr>
                  <th>Keszites</th>
                    <th>Receptek neve</th>
                    <th>Receptek id</th>
                  </tr> 
                </thead>
                <tbody>
                {data.map((d, i) => (
                        <tr key={i}>
                            <th>{d.Receptek_id}</th>
                        </tr>
                    ))} 
                </tbody>
            </table>

        </div>
    )
}

export default Appp

