import React, { Component } from "react";
import "./WritePresentation.scss";

class WritePresentation extends Component {
  state = {
    presenter: "",
    evaluator: "",
    topic: "",
    articles: [""],
    date: "",
    keywords: [""],
    summary: ""
  };

  componentDidMount = () => {
    if (this.props.presentations) {
      const presentation = this.props.presentations.find(
        presentation => presentation._id === this.props.match.params._id
      );
      this.setState(presentation);
    } else {
      this.setState({
        presenter: "",
        evaluator: "",
        topic: "",
        articles: [""],
        date: "",
        keywords: [""],
        summary: ""
      });
    }
  };

  validate = () =>
    this.state.presenter !== "" &&
    this.state.evaluator !== "" &&
    this.state.topic !== "" &&
    this.state.articles.join("") !== "" &&
    this.state.date !== "" &&
    this.state.keywords.join("") !== "" &&
    this.state.summary !== ""
      ? true
      : false;

  handleChange = event => {
    const value = event.target.value.toString();
    const name = event.target.name;

    if (name === "articles") {
      this.setState({ articles: value.split(", ") });
    } else if (name === "keywords") {
      this.setState({ keywords: value.split(", ") });
    } else {
      this.setState({ [name]: value });
    }
  };

  addOrEdit = e => {
    if (this.props.presentations) {
      return this.props.handleEdit(
        e,
        this.props.match.params._id,
        this.props.history,
        this.state
      );
    } else {
      return this.props.handleSubmit(e, this.props.history, this.state);
    }
  };

  render() {
    return (
      <div className="container mt-4">
        <form onSubmit={this.addOrEdit}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="form-presenter">Presenter</label>
              <input
                type="text"
                className="form-control form__presenter"
                id="form-presenter"
                placeholder="Full Name"
                value={this.state.presenter}
                onChange={this.handleChange}
                name="presenter"
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="form-evaluator">Evaluator</label>
              <input
                type="text"
                className="form-control form__evaluator"
                id="form-evaluator"
                placeholder="Full Name"
                value={this.state.evaluator}
                onChange={this.handleChange}
                name="evaluator"
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="form-date">Date</label>
              <input
                type="date"
                className="form-control form__date"
                id="form-date"
                value={this.state.date.substring(0, 10)}
                onChange={this.handleChange}
                name="date"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="form-topic">Topic</label>
            <input
              type="text"
              className="form-control form__topic"
              id="form-topic"
              placeholder="Presentation Topic"
              value={this.state.topic}
              onChange={this.handleChange}
              name="topic"
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-summary">Summary</label>
            <textarea
              className="form-control form__summary"
              id="form-summary"
              rows="3"
              value={this.state.summary}
              onChange={this.handleChange}
              name="summary"
              placeholder="Short description of the topic."
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-articles">
              Articles (one or more, separated by comma)
            </label>
            <textarea
              className="form-control form__articles"
              id="form-articles"
              rows="3"
              value={this.state.articles.join(", ")}
              onChange={this.handleChange}
              name="articles"
              placeholder="https://www.link.com, https://www.link.com"
            />
            <div className="pills-container">
              {this.state.articles.map((article, i) => {
                return (
                  <span
                    key={i + "span"}
                    className="badge badge-pill badge-secondary"
                  >
                    {article}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="form-keywords">
              Keywords (one or more, separated by comma)
            </label>

            <input
              type="text"
              className="form-control form__keywords"
              id="form-keywords"
              placeholder="learning, coding"
              value={this.state.keywords.join(", ")}
              onChange={this.handleChange}
              name="keywords"
            />
            <div className="pills-container">
              {this.state.keywords.map((keyword, i) => {
                return (
                  <span
                    key={i + "keyword"}
                    className="badge badge-pill badge-secondary"
                  >
                    {keyword}
                  </span>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary form__submit"
            value="Submit"
            disabled={this.validate() ? false : true}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default WritePresentation;
