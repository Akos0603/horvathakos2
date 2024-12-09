const btn = document.createElement('button');

btn.onclick = function()
{

    alert("Hello")

}

btn.innerHTML = "Natív"

document.getElementById("nativ-button-container").appendChild(btn);