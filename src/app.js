import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Header, Home} from "./pages";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route>
       <Header/>
       <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

