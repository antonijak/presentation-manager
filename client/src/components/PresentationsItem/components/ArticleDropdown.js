import React from "react";
const ArticleDropdown = ({ articles }) => {
  return (
    <div className="dropdown presentation__item presentation__item__article">
      <button
        className=" btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="badge badge-secondary badge-pill">
          {articles.length}
        </span>
        Articles
      </button>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {articles.map((article, i) => (
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
