import React from "react";
import "./WritePresentation.scss";

const WritePresentation = ({ newPresentation, handleSubmit, handleChange }) => {
  return (
    <div className="container mt-4">
      <h2>New Presentation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="form-presenter">Presenter*</label>
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
            <label htmlFor="form-evaluator">Evaluator*</label>
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
            <label htmlFor="form-date">Date*</label>
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
          <label htmlFor="form-topic">Topic*</label>
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
          <label htmlFor="form-article1">Article 1*</label>
          <input
            type="url"
            className="form-control form__article"
            id="form-article1"
            placeholder="www.some-link.com"
            value={newPresentation.article}
            onBlur={handleChange}
            name="article1"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-article2">Article 2</label>
          <input
            type="url"
            className="form-control form__article"
            id="form-article2"
            placeholder="www.some-link.com"
            value={newPresentation.article2}
            onBlur={handleChange}
            name="article2"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-article3">Article 3</label>
          <input
            type="url"
            className="form-control form__article"
            id="form-article3"
            placeholder="www.some-link.com"
            value={newPresentation.article3}
            onBlur={handleChange}
            name="article3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-summary">Summary*</label>
          <textarea
            className="form-control form__summary"
            id="form-summary"
            rows="3"
            value={newPresentation.summary}
            onChange={handleChange}
            name="summary"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-keywords">Keywords</label>
          <input
            type="url"
            className="form-control form__keywords"
            id="form-keywords"
            placeholder="eg. learning, coding"
            value={newPresentation.keywords}
            onChange={handleChange}
            name="keywords"
          />
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
