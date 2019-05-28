import React, { Component } from "react";
import "./WritePresentation.scss";

class WritePresentation extends Component {
  state = {
    newPresentation: {
      presenter: "",
      evaluator: "",
      topic: "",
      articles: [""],
      date: "",
      keywords: [""],
      summary: ""
    },
    messages: {
      presenter: "",
      evaluator: "",
      topic: "",
      articles: "",
      keywords: "",
      summary: ""
    },
    touched: {
      presenter: false,
      evaluator: false,
      date: false,
      topic: false,
      articles: false,
      keywords: false,
      summary: false
    }
  };

  componentDidMount = () => {
    if (this.props.presentations) {
      const presentation = this.props.presentations.find(
        presentation => presentation._id === this.props.match.params._id
      );
      this.setState({
        newPresentation: { ...presentation },
        messages: {
          presenter: "",
          evaluator: "",
          topic: "",
          articles: "",
          keywords: "",
          summary: ""
        },
        touched: {
          presenter: true,
          evaluator: true,
          date: true,
          topic: true,
          articles: true,
          keywords: true,
          summary: true
        }
      });
    } else {
      this.setState({
        newPresentation: {
          presenter: "",
          evaluator: "",
          topic: "",
          articles: [""],
          date: "",
          keywords: [""],
          summary: ""
        },
        messages: {
          presenter: "",
          evaluator: "",
          date: "",
          topic: "",
          articles: "",
          keywords: "",
          summary: ""
        },
        touched: {
          presenter: false,
          evaluator: false,
          date: false,
          topic: false,
          articles: false,
          keywords: false,
          summary: false
        }
      });
    }
  };

  // show validation message
  setMessage = (bool, name, message) => {
    bool
      ? this.setState({
          messages: {
            ...this.state.messages,
            [name]: ""
          }
        })
      : this.setState({
          newPresentation: { ...this.state.newPresentation, [name]: "" },
          messages: {
            ...this.state.messages,
            [name]: message
          }
        });
  };

  validateField = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "presenter" || "evaluator":
        this.setMessage(
          value.length >= 2 && value.length <= 20,
          name,
          "Must contain 2-20 characters"
        );
        break;

      case "evaluator":
        this.setMessage(
          value.length >= 2 && value.length <= 20,
          name,
          "Must contain 2-20 characters"
        );
        break;

      case "date":
        this.setMessage(
          this.state.newPresentation.date !== "" && this.state.touched.date,
          name,
          "Required"
        );
        break;

      case "topic":
        this.setMessage(
          value.length >= 5,
          name,
          "Must be at least 5 characters long"
        );
        break;

      case "summary":
        this.setMessage(value.length >= 20, name, "Summary is too short");
        break;

      case "articles":
        this.state.newPresentation.articles.every(
          article =>
            article.length > 5 &&
            /^(?:http(s)?:\/\/)[\w.-]+(?:.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/.test(
              article
            )
        )
          ? this.setState({
              messages: {
                ...this.state.messages,
                articles: ""
              }
            })
          : this.setState({
              messages: {
                ...this.state.messages,
                articles: "One or more url is invalid"
              }
            });
        break;

      case "keywords":
        //check if keyword is shorter than two letters
        this.state.newPresentation.keywords.some(article => article.length < 2)
          ? this.setState({
              messages: {
                ...this.state.messages,
                keywords: "All keywords must be at least 2 characters long"
              }
            })
          : this.setState({
              messages: {
                ...this.state.messages,
                keywords: ""
              }
            });
        break;

      default:
        this.setState({
          messages: {
            ...this.state.messages,
            [name]: ""
          }
        });
    }
  };

  validateForm = () => {
    // check if all fields have been touched and there are no validation messages (which mean they are all valid)
    if (
      Object.values(this.state.touched).every(item => item === true) &&
      Object.values(this.state.messages).every(item => item === "") &&
      this.state.newPresentation.date !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  handleChange = event => {
    const value = event.target.value.toString();
    const name = event.target.name;
    // if the field name is articles or keywords split the inputed string
    // into array of articles or keywords and set the state
    if (name === "articles") {
      this.setState({
        newPresentation: {
          ...this.state.newPresentation,
          articles: value.split(", ")
        },
        touched: {
          ...this.state.touched,
          articles: true
        }
      });
    } else if (name === "keywords") {
      this.setState({
        newPresentation: {
          ...this.state.newPresentation,
          keywords: value.split(", ")
        },
        touched: {
          ...this.state.touched,
          keywords: true
        }
      });
    } else {
      this.setState({
        newPresentation: { ...this.state.newPresentation, [name]: value },
        touched: {
          ...this.state.touched,
          [name]: true
        }
      });
    }
  };

  addOrEdit = e => {
    // give form appropriate submit function weather is is adding or editing
    if (this.props.presentations) {
      return this.props.handleEdit(
        e,
        this.props.match.params._id,
        this.props.history,
        this.state.newPresentation
      );
    } else {
      return this.props.handleSubmit(
        this.props.history,
        this.state.newPresentation
      );
    }
  };

  render() {
    return (
      <div className="write-presentations">
        <div className="write-presentations__button-container">
          <button
            className="btn btn-outline-primary button-container__back-btn"
            onClick={() => this.props.history.goBack()}
          >
            Back
          </button>
        </div>

        <h2 className="write-presentations__title">
          {this.state.newPresentation.topic
            ? this.state.newPresentation.topic
            : "New Presentation"}
        </h2>

        <form onSubmit={this.addOrEdit} className="write-presentations__form">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="form-presenter">Presenter</label>
              <small>{this.state.messages.presenter}</small>
              <input
                name="presenter"
                type="text"
                className="form-control form__presenter"
                id="form-presenter"
                placeholder="Full Name"
                value={this.state.newPresentation.presenter}
                onChange={this.handleChange}
                onBlur={this.validateField}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="form-evaluator">Evaluator</label>
              <small>{this.state.messages.evaluator}</small>
              <input
                type="text"
                name="evaluator"
                className="form-control form__evaluator"
                id="form-evaluator"
                placeholder="Full Name"
                value={this.state.newPresentation.evaluator}
                onChange={this.handleChange}
                onBlur={this.validateField}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="form-topic">Topic</label>
            <small>{this.state.messages.topic}</small>
            <input
              type="text"
              name="topic"
              className="form-control form__topic"
              id="form-topic"
              placeholder="Presentation Topic"
              value={this.state.newPresentation.topic}
              onChange={this.handleChange}
              onBlur={this.validateField}
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-summary">Summary</label>
            <small>{this.state.messages.summary}</small>
            <textarea
              className="form-control form__summary"
              id="form-summary"
              rows="3"
              value={this.state.newPresentation.summary}
              onChange={this.handleChange}
              name="summary"
              placeholder="Short description of the topic."
              onBlur={this.validateField}
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-articles">
              Articles (one or more, separated by comma)
            </label>
            <small>{this.state.messages.articles}</small>
            <textarea
              className="form-control form__articles"
              id="form-articles"
              rows="3"
              value={this.state.newPresentation.articles.join(", ")}
              onChange={this.handleChange}
              name="articles"
              placeholder="https://www.link.com, https://www.link.com"
              onBlur={this.validateField}
            />

            <div className="pills-container">
              {this.state.newPresentation.articles.map((article, i) => {
                return (
                  <span
                    key={i + "span"}
                    className="badge badge-pill badge-secondary article-pill"
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
            <small>{this.state.messages.keywords}</small>
            <input
              type="text"
              className="form-control form__keywords"
              id="form-keywords"
              placeholder="learning, coding"
              value={this.state.newPresentation.keywords.join(", ")}
              onChange={this.handleChange}
              name="keywords"
              onBlur={this.validateField}
            />

            <div className="pills-container">
              {this.state.newPresentation.keywords.map((keyword, i) => {
                return (
                  <span
                    key={i + "keyword"}
                    className="badge badge-pill badge-secondary keyword-pill"
                  >
                    {keyword}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="form-group form-group__date">
            <label htmlFor="form-date">Date</label>
            <small>{this.state.messages.date}</small>
            <input
              type="date"
              name="date"
              className="form-control form__date"
              id="form-date"
              value={this.state.newPresentation.date.substring(0, 10)}
              onChange={this.handleChange}
              onBlur={this.validateField}
            />
          </div>

          <div className="submit-container">
            <small
              className={this.validateForm() ? "message-none" : "message-block"}
            >
              All the fields are required
            </small>
            <button
              type="submit"
              className="btn btn-primary form__submit"
              value="Submit"
              disabled={this.validateForm() ? false : true}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default WritePresentation;
