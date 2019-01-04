import React from "react";
import "./WritePresentation.scss";

const WritePresentation = ({
  presentations,
  newPresentation,
  tempKeywords,
  tempArticles,
  handleSubmit,
  handleChange,
  match,
  handleEdit,
  history
}) => {
  return (
    <div className="container mt-4">
      <h2>New Presentation</h2>
      <form
        onSubmit={
          presentations
            ? e => handleEdit(e, match.params._id, history)
            : handleSubmit
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
              value={newPresentation.presenter}
              onChange={handleChange}
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
              value={newPresentation.evaluator}
              onChange={handleChange}
              name="evaluator"
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="form-date">Date</label>
            <input
              type="date"
              className="form-control form__date"
              id="form-date"
              value={newPresentation.date}
              onChange={handleChange}
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
            value={newPresentation.topic}
            onChange={handleChange}
            name="topic"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-summary">Summary</label>
          <textarea
            className="form-control form__summary"
            id="form-summary"
            rows="3"
            value={newPresentation.summary}
            onChange={handleChange}
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
            value={newPresentation.articles.join(", ")}
            onChange={handleChange}
            name="articles"
            placeholder="www.link.com, www.link.com"
          />
          <div className="pills-container">
            {newPresentation.articles.map((article, i) => {
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
            value={newPresentation.keywords.join(", ")}
            onChange={handleChange}
            name="keywords"
          />
          <div className="pills-container">
            {newPresentation.keywords.map((keyword, i) => {
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
};

export default WritePresentation;
