import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Header} from "./pages";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route>
       <Header/>
        </Route>
      </Switch>
    </Router>
  )
}

