import React from "react"
import ReactDOM from "react-dom/client"
import {StrictMode } from "react"
import App from "./App"
import Proba from "./Proba"
import Appp from "./test"

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App/>
    </StrictMode>
)
ReactDOM.createRoot(document.getElementById("proba")).render(
    <StrictMode>
        <Proba/>
    </StrictMode>
)

ReactDOM.createRoot(document.getElementById("test")).render(
    <StrictMode>
        <Appp/>
    </StrictMode>
)