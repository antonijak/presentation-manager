import React from "react";
import { Link } from "react-router-dom";

import ArticleDropdown from "./ArticleDropdown";
import Buttons from "./Buttons";

import "./PresentationsItem.scss";

const PresentationsItem = ({
  presentation,
  history,
  editNewPresentation,
  handleDelete
}) => (
  <li className="list-group-item">
    <div className="presentation">
      <span className="presentation__item presenter">
        {presentation.presenter}
      </span>

      <span className="presentation__item evaluator">
        {presentation.evaluator}
      </span>

      <span className="presentation__item topic">
        <Link to={"/presentations/" + presentation._id}>
          {presentation.topic}
        </Link>
      </span>

      <span className="presentation__item date">
        {presentation.date.substring(0, 10)}
      </span>

      <ArticleDropdown articles={presentation.articles} />

      <Buttons
        _id={presentation._id}
        className="presentation__item buttons"
        presentation={presentation}
        history={history}
        editNewPresentation={editNewPresentation}
        handleDelete={handleDelete}
      />
    </div>
  </li>
);

export default PresentationsItem;
