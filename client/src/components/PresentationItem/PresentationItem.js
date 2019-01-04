import React from "react";
import { Link } from "react-router-dom";
import "./PresentationItem.scss";
import classNames from "class-names";
import ArticleDropdown from "./components/ArticleDropdown";
import Buttons from "../Buttons";
import PresentationContent from "./components/PresentationContent";

const PresentationItem = ({
  presentation,
  variant,
  history,
  editNewPresentation
}) => {
  const listClass = classNames({
    "list-group-item": true,
    "bold-text": variant !== "item"
  });

  const topicContent =
    variant === "item" ? (
      <Link to={"/presentations/" + presentation._id}>
        {presentation.topic}
      </Link>
    ) : (
      presentation.topic
    );

  const articleCell =
    variant === "item" ? (
      <ArticleDropdown articles={presentation.articles} />
    ) : (
      <PresentationContent content="Article" name="article" />
    );

  const buttonsCell =
    variant === "item" ? (
      <Buttons
        _id={presentation._id}
        className="presentation__item presentation__item--buttons"
        presentation={presentation}
        history={history}
        editNewPresentation={editNewPresentation}
      />
    ) : (
      <PresentationContent content="Modify" name="modify" />
    );
  return (
    <li className={listClass}>
      <div className="presentation">
        <PresentationContent
          content={presentation.presenter}
          name="presenter"
        />
        <PresentationContent
          content={presentation.evaluator}
          name="evaluator"
        />
        <PresentationContent content={topicContent} name="topic" />
        <PresentationContent
          content={presentation.date.substring(0, 10)}
          name="date"
        />
        {articleCell}
        {buttonsCell}
      </div>
    </li>
  );
};

export default PresentationItem;
