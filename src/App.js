import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route path="/products" component={Product} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
