//natív -> hogyan?
const btn = document.createElement('button');

btn.onclick = function()
{

    alert("Hello")

}

btn.innerHTML = "Natív"

document.getElementById("nativ-button-container").appendChild(btn);

//react -> mit akarok látmi?
const gomb = React.createElement("button", 
    {
        onClick: function()
        {
            alert("Hello");
        },
    },
    "React gomb"
)

//első paraméter az element amit használmi szeretnék,
//második paraméter egy refrencia egy natív DOM elemre, hivatkozásipont megadása
ReactDOM.render(gomb, document.getElementById("react-button-containe"))