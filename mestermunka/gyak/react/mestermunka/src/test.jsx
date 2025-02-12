import React, {useEffect,useState} from "react"

export default function Leker() {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/osszes')
        .then(res => res.json())
        .then(data => setData(data))
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
                          <td>{d.Receptek_neve}</td>
                        </tr>
                    ))} 
                </tbody>
            </table>

        </div>
    )
}


