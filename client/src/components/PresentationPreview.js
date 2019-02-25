import React from "react";
import { Link } from "react-router-dom";
import { dateFormatter } from "../assets/HelperFunctions";
import Buttons from "./Buttons";
import "./PresentationPreview.scss";

const ViewPresentation = ({
  presentations,
  editNewPresentation,
  handleDelete,
  match,
  history
}) => {
  const presentation = presentations
    ? presentations.find(presentation => presentation._id === match.params._id)
    : null;

  return (
    <div className="view-presentation">
      <Link
        to="/presentations"
        className="btn btn-outline-primary view-presentation__back-btn"
        tabIndex="-1"
        role="button"
      >
        Back
      </Link>

      {!presentation ? (
        <div className="container" id="spinner-parent">
          <div className="spinner-border mt-4" role="status" />
        </div>
      ) : (
        <>
          <h2 className="view-presentation__topic">{presentation.topic}</h2>

          <div className="row view-presentation__presenter">
            <div className="col-2">Presenter:</div>
            <div className="col-10">{presentation.presenter}</div>
          </div>

          <div className="row">
            <div className="col-2">Evaluator:</div>
            <div className="col-10">{presentation.evaluator}</div>
          </div>

          <div className="row">
            <div className="col-2">Date:</div>
            <div className="col-10">{dateFormatter(presentation.date)}</div>
          </div>

          <div className="row">
            <div className="col-2">Summary:</div>
            <div className="col-10">{presentation.summary}</div>
          </div>

          <div className="row">
            <div className="col-2">Articles:</div>
            <div className="col-10 row__articles">
              {presentation.articles.map((article, i) => (
                <a
                  className="article-link"
                  key={i + "linkview"}
                  href={article}
                  target="blank"
                >
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
            className="view-presentation__buttons"
            presentation={presentation}
            editNewPresentation={editNewPresentation}
            handleDelete={handleDelete}
            history={history}
          />
        </>
      )}
    </div>
  );
};

export default ViewPresentation;
