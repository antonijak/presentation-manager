import React, { Component } from "react";
import "./WritePresentation.scss";

class WritePresentation extends Component {
  state = {
    currentPresentation: {
      presenter: "",
      evaluator: "",
      topic: "",
      articles: [""],
      date: "",
      keywords: [""],
      summary: ""
    }
  };
  componentDidMount = () => {
    if (this.props.history.location.pathname === "/presentations/add-new") {
      this.setState({
        currentPresentation: {
          presenter: "",
          evaluator: "",
          topic: "",
          articles: [""],
          date: "",
          keywords: [""],
          summary: ""
        }
      });
    } else {
      this.setState({
        currentPresentation: this.props.newPresentation
      });
    }
  };

  render() {
    return (
      <div className="container mt-4">
        <h2>New Presentation</h2>
        <form
          onSubmit={
            this.props.presentations
              ? e =>
                  this.props.handleEdit(
                    e,
                    this.props.match.params._id,
                    this.props.history
                  )
              : e => this.props.handleSubmit(e, this.props.history)
          }
        >
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="form-presenter">Presenter</label>
              <input
                type="text"
                className="form-control form__presenter"
                id="form-presenter"
                placeholder="Full Name"
                value={this.state.currentPresentation.presenter}
                onChange={this.props.handleChange}
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
                value={this.state.currentPresentation.evaluator}
                onChange={this.props.handleChange}
                name="evaluator"
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="form-date">Date</label>
              <input
                type="date"
                className="form-control form__date"
                id="form-date"
                value={this.state.currentPresentation.date}
                onChange={this.props.handleChange}
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
              value={this.state.currentPresentation.topic}
              onChange={this.props.handleChange}
              name="topic"
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-summary">Summary</label>
            <textarea
              className="form-control form__summary"
              id="form-summary"
              rows="3"
              value={this.state.currentPresentation.summary}
              onChange={this.props.handleChange}
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
              value={this.state.currentPresentation.articles.join(", ")}
              onChange={this.props.handleChange}
              name="articles"
              placeholder="https://www.link.com, https://www.link.com"
            />
            <div className="pills-container">
              {this.state.currentPresentation.articles.map((article, i) => {
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
              value={this.state.currentPresentation.keywords.join(", ")}
              onChange={this.props.handleChange}
              name="keywords"
            />
            <div className="pills-container">
              {this.state.currentPresentation.keywords.map((keyword, i) => {
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
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default WritePresentation;
