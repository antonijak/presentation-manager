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
    presentations: [],
    newPresentation: {
      presenter: "",
      evaluator: "",
      topic: "",
      articles: [
        // this.state.tempArticles.article1,
        // this.state.tempArticles.article2,
        // this.state.tempArticles.article3
      ],
      date: "",
      keywords: [],
      summary: ""
    },
    tempArticles: {
      article1: "",
      article2: "",
      article3: ""
    }
  };
  componentDidMount = () => {
    axios.get("/allpresentations").then(res => {
      this.setState({ presentations: res.data });
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios({
      method: "post",
      url: "/allpresentations",
      data: this.state.newPresentation
    });
  };

  handleChange = event => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;

    if (
      fieldName === "article1" ||
      fieldName === "article2" ||
      fieldName === "article3"
    ) {
      this.setState({
        newPresentation: {
          ...this.state.newPresentation,
          articles: [...this.state.newPresentation.articles, fieldValue]
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

  render() {
    return (
      <div className="App container">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            exact
            path="/presentations/edit/:_id"
            render={props => <WritePresentation {...props} />}
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
