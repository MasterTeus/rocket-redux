import React from 'react'
import { Switch, Route } from "react-router-dom";

/**
 * Pages
 */
import Home from "./pages/Home";
import Cart from "./pages/Cart";


export default function router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  )
}
