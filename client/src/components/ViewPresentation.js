import React from "react";
import Buttons from "./Buttons";
import "./ViewPresentation.scss";

const ViewPresentation = ({
  presentations,
  editNewPresentation,
  handleDelete,
  match,
  history
}) => {
  const presentation = presentations.find(
    presentation => presentation._id === match.params._id
  );

  return (
    <div className="container presentation-view">
      <h2 className="mt-4 mb-4 presentation-view__name">
        {presentation.topic}
      </h2>

      <div className="row">
        <div className="col-2">Presenter:</div>
        <div className="col-10">{presentation.presenter}</div>
      </div>

      <div className="row">
        <div className="col-2">Evaluator:</div>
        <div className="col-10">{presentation.evaluator}</div>
      </div>

      <div className="row">
        <div className="col-2">Date:</div>
        <div className="col-10">{presentation.date.substring(0, 10)}</div>
      </div>

      <div className="row">
        <div className="col-2">Summary:</div>
        <div className="col-10">{presentation.summary}</div>
      </div>

      <div className="row">
        <div className="col-2">Articles:</div>
        <div className="col-10 row__articles">
          {presentation.articles.map((article, i) => (
            <a key={i + "linkview"} href={article} target="blank">
              {article}
            </a>
          ))}
        </div>
      </div>

      <div className="row">
        <div className="col-2">Keywords:</div>
        <div className="col-10 row__keywords">
          {presentation.keywords.map((keyword, i) => (
            <span
              key={i + "keyview"}
              className="badge badge-pill badge-light view-keyword"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <Buttons
        className="presentation-view__buttons"
        presentation={presentation}
        editNewPresentation={editNewPresentation}
        handleDelete={handleDelete}
        history={history}
      />
    </div>
  );
};

export default ViewPresentation;
