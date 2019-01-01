import React from "react";
import { Link } from "react-router-dom";
import "./PresentationItem.scss";
import classNames from "class-names";
import ArticleDropdown from "./components/ArticleDropdown";
import Buttons from "../Buttons";
import PresentationContent from "./components/PresentationContent";

const PresentationItem = ({
  presenter,
  evaluator,
  _id,
  topic,
  date,
  articles,
  variant
}) => {
  const listClass = classNames({
    "list-group-item": true,
    "bold-text": variant !== "item"
  });

  const topicContent =
    variant === "item" ? (
      <Link to={"/presentations/" + _id}>{topic}</Link>
    ) : (
      topic
    );

  const articleCell =
    variant === "item" ? (
      <ArticleDropdown articles={articles} />
    ) : (
      <PresentationContent content="Article" name="article" />
    );

  const buttonsCell =
    variant === "item" ? (
      <Buttons
        _id={_id}
        className="presentation__item presentation__item--buttons"
      />
    ) : (
      <PresentationContent content="Modify" name="modify" />
    );

  return (
    <li className={listClass}>
      <div className="presentation">
        <PresentationContent content={presenter} name="presenter" />
        <PresentationContent content={evaluator} name="evaluator" />
        <PresentationContent content={topicContent} name="topic" />
        <PresentationContent content={date.substring(0, 10)} name="date" />
        {articleCell}
        {buttonsCell}
      </div>
    </li>
  );
};

export default PresentationItem;
