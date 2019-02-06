import React from "react";
import "./ArticleDropdown.scss";

const ArticleDropdown = ({ articles }) => {
  return (
    <div className="dropdown presentation__item article">
      <button
        className=" btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-display="static"
      >
        <span className="badge badge-secondary badge-pill">
          {articles.length}
        </span>
        Articles
      </button>

      <div
        className="dropdown-menu dropdown-menu-lg-right"
        aria-labelledby="dropdownMenuButton"
      >
        {articles.map((article, i) => (
          <a
            className="dropdown-item"
            href={article}
            target="blank"
            key={i + "item"}
          >
            {/* {window.size > 600 ? article : `${article.slice(0, 34)}...`} */}
            {article}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArticleDropdown;
