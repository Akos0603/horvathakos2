const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    port: 3306,
    password: "",
    database:"kozutak",
});

app.get("/", (req,res) => {
    res.send("Fut a backend");
})

app.get("/user", (req,res) =>{
    const sql = "Select * from `regiok`";
    db.query(sql, (err, result) =>{
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.get("/8_id", (req,res) =>{
    const sql = "Select * from `regiok` where Rid = 8";
    db.query(sql, (err,result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.get("/?_id", (req,res) =>{
    const sql = "Select * from `regiok` where Rid = 8";
    db.query(sql, (err,result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.post("/ujregio", (req,res) =>{
    const sql ="Insert into `regiok` (`Rid`, `regionev`, `regio_tipusa`) Values (?,?,?)";
    const Values = ['12','Szeged','Város'];

    db.query(sql, Values, (err,result) => {
        if(err){
            console.error("Hiba történt", err);
            return res.status(200).json({message: "Sikeres beszúrás!", result});
        }
    })
})




app.listen(3001, () =>{
    console.log("Server is running ob port 3001");
})