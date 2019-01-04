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

  handleSubmit = (event, history, newPresentation) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "/allpresentations",
      data: newPresentation
    }).then(res => {
      this.setState({
        presentations: [...this.state.presentations, res.data]
      });
    });
    history.push("/presentations/");
  };

  handleEdit = (event, _id, history, newPresentation) => {
    event.preventDefault();
    axios({
      method: "put",
      url: "/allpresentations/" + _id,
      data: newPresentation
    }).then(res => {
      const newStateData = this.state.presentations.map(presentation =>
        presentation._id === res.data._id ? res.data : presentation
      );
      this.setState({ presentations: newStateData });
    });
    history.push("/presentations/");
  };

  handleDelete = (_id, history) => {
    axios({
      method: "delete",
      url: "/allpresentations/" + _id,
      data: this.state.newPresentation
    }).then(res => {
      const newStateData = this.state.presentations.filter(
        presentation => presentation._id !== res.data._id
      );
      this.setState({
        presentations: newStateData
      });
    });
    history.push("/presentations");
  };

  render() {
    return (
      <div className="App container">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            exact
            path="/presentations/edit/:_id"
            render={props => (
              <WritePresentation
                {...props}
                key="edit"
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                newPresentation={this.state.newPresentation}
                presentations={this.state.presentations}
                editNewPresentation={this.editNewPresentation}
                handleEdit={this.handleEdit}
              />
            )}
          />

          <Route
            exact
            path="/presentations/add-new"
            render={props => (
              <WritePresentation
                {...props}
                key="add-new"
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                newPresentation={this.state.newPresentation}
              />
            )}
          />

          <Route
            exact
            path="/presentations/:_id"
            render={props => (
              <ViewPresentation
                {...props}
                presentations={this.state.presentations}
                editNewPresentation={this.editNewPresentation}
                handleDelete={this.handleDelete}
              />
            )}
          />

          <Route
            exact
            path="/presentations"
            render={props => (
              <Presentations
                {...props}
                presentations={this.state.presentations}
                editNewPresentation={this.editNewPresentation}
                handleDelete={this.handleDelete}
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
