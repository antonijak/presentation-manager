import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import WritePresentation from "./components/WritePresentation";
import Presentations from "./components/Presentations";
import ViewPresentation from "./components/ViewPresentation";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    presentations: []
  };
  componentDidMount = () => {
    axios.get("/allpresentations").then(res => {
      this.setState({ presentations: res.data });
    });
  };
  render() {
    return (
      <div className="App container">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            exact
            path="/presentations/edit/:id"
            component={WritePresentation}
          />

          <Route
            exact
            path="/presentations/add-new"
            component={WritePresentation}
          />

          <Route exact path="/presentations/:id" component={ViewPresentation} />

          <Route
            exact
            path="/presentations"
            render={props => (
              <Presentations
                {...props}
                presentations={this.state.presentations}
              />
            )}
          />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
