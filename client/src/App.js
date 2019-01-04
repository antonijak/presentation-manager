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

  clearInputs = history => {
    if (history.params.location === "/presentations/add-new") {
      this.setState({
        newPresentation: {
          presenter: "",
          evaluator: "",
          topic: "",
          articles: [""],
          date: "",
          keywords: [""],
          summary: ""
        }
      });
    }
  };

  handleSubmit = (event, history) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "/allpresentations",
      data: this.state.newPresentation
    }).then(res => {
      this.setState({
        presentations: [...this.state.presentations, res.data]
      });
    });
    history.push("/presentations/");
  };

  handleEdit = (event, _id, history) => {
    event.preventDefault();
    axios({
      method: "put",
      url: "/allpresentations/" + _id,
      data: this.state.newPresentation
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

  handleChange = event => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;

    if (fieldName === "articles") {
      const articlesArray = fieldValue.split(", ");
      this.setState({
        newPresentation: {
          ...this.state.newPresentation,
          articles: articlesArray
        }
      });
    } else if (fieldName === "keywords") {
      const keywordsArray = fieldValue.split(", ");
      this.setState({
        newPresentation: {
          ...this.state.newPresentation,
          keywords: keywordsArray
        }
      });
    } else {
      this.setState({
        newPresentation: {
          ...this.state.newPresentation,
          [fieldName]: fieldValue
        }
      });
    }
  };

  editNewPresentation = (
    history,
    { presenter, evaluator, topic, articles, date, keywords, summary, _id }
  ) => {
    const editableDate = date.substring(0, 10);
    this.setState({
      newPresentation: {
        presenter,
        evaluator,
        topic,
        articles,
        date: editableDate,
        keywords,
        summary
      }
    });
    history.push("/presentations/edit/" + _id);
  };

  render() {
    console.log(this.state.presentations);

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
