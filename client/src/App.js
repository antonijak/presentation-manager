import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import * as actions from "./store/actions/actions";
import { connect } from "react-redux";

import Home from "./components/Home";
import WritePresentation from "./components/WritePresentation";
import Presentations from "./components/Presentations";
import PresentationPreview from "./components/PresentationPreview";
import NavBar from "./components/NavBar";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = { added: false, deleted: false, edited: false };
  getPages = (a, b) =>
    this.props.presentations
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(a, b);

  componentDidMount = () => {
    this.props.getAllPresentations();
  };

  handleSubmit = (history, newPresentation) => {
    this.props.addPresentation(newPresentation);
    history.push("/presentations/");
    this.setState({ added: true });
    setTimeout(() => {
      this.setState({ added: false });
    }, 3000);
  };

  handleEdit = (event, _id, history, newPresentation) => {
    event.preventDefault();
    this.props.editPresentation(_id, newPresentation);
    history.push("/presentations/");
    this.setState({ edited: true });
    setTimeout(() => {
      this.setState({ edited: false });
    }, 3000);
  };

  handleDelete = (_id, history) => {
    if (window.confirm("Are you sure you want to delete this presentation?")) {
      this.props.deletePresentation(_id);
      history.push("/presentations");
      this.setState({ deleted: true });
      setTimeout(() => {
        this.setState({ deleted: false });
      }, 3000);
    }
  };

  render() {
    return (
      <div className="App container" id="main-container">
        <NavBar />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                key="home"
                heading="Welcome, student!"
                paragraph="This is the place you can find, write and edit information for your
          presentation."
              />
            )}
          />

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
              <PresentationPreview
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
                added={this.state.added}
                edited={this.state.edited}
                deleted={this.state.deleted}
                getPages={this.getPages}
              />
            )}
          />

          <Route
            render={props => (
              <Home
                {...props}
                key="404-not-found"
                heading="404 Page not found"
                paragraph="Go back to:"
              />
            )}
          />
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
