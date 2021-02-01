import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Description, Header, Home} from "./pages";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route  exact path = "/">
       <Header/>
       <Home/>
        </Route>
        <Route path ="/:descriptions">
         <Description/>
        </Route>
      </Switch>
    </Router>
  )
}

