import React, { Component } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/Home";
import WritePresentation from "./components/WritePresentation";
import Presentations from "./components/Presentations";
import ViewPresentation from "./components/ViewPresentation";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import * as actions from "./actions/actions";
// import axios from "axios";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  componentDidMount = () => {
    this.props.getAllPresentations();
  };

  handleSubmit = (event, history, newPresentation) => {
    this.props.addPresentation(newPresentation);
    history.push("/presentations/");
  };

  handleEdit = (event, _id, history, newPresentation) => {
    event.preventDefault();
    this.props.editPresentation(_id, newPresentation);
    history.push("/presentations/");
  };

  handleDelete = (_id, history) => {
    this.props.deletePresentation(_id);
    history.push("/presentations");
  };

  render() {
    console.log(this.props);

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
                presentations={this.props.presentations}
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
              />
            )}
          />

          <Route
            exact
            path="/presentations/:_id"
            render={props => (
              <ViewPresentation
                {...props}
                presentations={this.props.presentations}
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
                presentations={this.props.presentations}
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
const mapStateToProps = state => {
  return { presentations: state.presentations };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPresentations: () => dispatch(actions.getAllPresentations()),
    addPresentation: presentation =>
      dispatch(actions.addPresentation(presentation)),
    editPresentation: (_id, presentation) =>
      dispatch(actions.editPresentation(_id, presentation)),
    deletePresentation: _id => dispatch(actions.deletePresentation(_id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
