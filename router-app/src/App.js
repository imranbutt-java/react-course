import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          {/* Means if current url has the path in that case render the
          associated Component */}
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            {/* In case we have to provide multiple props so instead of using compoent
             attribute use render 
             Now adding props in () and spread operator would add other default functions */}
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            {/* For optional parameters use Regex ? */}
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Redirect from="/messages" to="posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            {/* <Route path="/" exact component={Home} /> */}
            <Redirect to="not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
