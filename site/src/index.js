import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import "./index.scss"

// Router moved to own file
import Router from "./routes/Router"

const root = ReactDOM.createRoot(document.getElementById("root"))

console.log(`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`)

root.render(
  <Router>
    <App />
  </Router>
)
