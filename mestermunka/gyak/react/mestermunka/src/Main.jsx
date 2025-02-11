import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Proba from "./Proba"
import teszt from "./test"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById("proba")).render(
    <React.StrictMode>
        <Proba/>
    </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("test")).render(
    <React.StrictMode>
        <teszt/>
    </React.StrictMode>
)