import React, { useContext, useEffect } from "react"
import ReactDOM from 'react-dom'
import App from "./app"
import { UseContentProvider } from "./context/dataContext"

ReactDOM.render(
  <>
    <UseContentProvider>
      <App />
    </UseContentProvider>
  </>, document.getElementById("root"))