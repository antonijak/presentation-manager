import React from "react";
const ArticleDropdown = ({ article }) => {
  return (
    <div className="dropdown presentation__item presentation__item--article">
      <button
        className=" btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="badge badge-secondary badge-pill">
          {article.length}
        </span>
        Articles
      </button>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {article.map((article, i) => (
          <a
            className="dropdown-item"
            href={article}
            target="blank"
            key={i + "item"}
          >
            {article}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArticleDropdown;
