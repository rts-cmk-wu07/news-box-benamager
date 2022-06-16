import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import "./index.scss"

// Router moved to own file
import Router from "./routes/Router"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Router>
    <App />
  </Router>
)
