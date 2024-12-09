const btn = document.createElement('button');

btn.onclick = function()
{

    alert("Hello")

}

btn.innerHTML = "Natív"

document.getElementById("nativ-button-container").appendChild(btn);

const gomb = React.createElement("button", 
    {
        onclick: function()
        {
            alert("Hello");
        },
    },
    "React gomb"
)

ReactDOM.render(gomb, document.getElementById("react-button-containe"))