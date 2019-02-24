import React, { Component } from "react";
import PresentationsItem from "./PresentationsItem";
import "./Presentations.scss";

function giveNum(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 8) {
    newArr.push(i);
  }
  return newArr;
}

class Presentations extends Component {
  state = {
    pages: this.props.presentations.slice(0, 8)
  };

  render() {
    return (
      <div className="container presentations-container">
        <ul className="list-group list-group-flush presentation-list">
          <li className="list-group-item headings">
            <div className="presentation bold-text">
              <h6 className="presentation__item presenter">Presenter</h6>
              <h6 className="presentation__item evaluator">Evaluator</h6>
              <h6 className="presentation__item topic">Topic</h6>
              <h6 className="presentation__item date">Date</h6>
              <h6 className="presentation__item article">Article</h6>
              <h6 className="presentation__item modify">Modify</h6>
            </div>
          </li>
          {this.props.presentations ? (
            this.state.pages
              .sort((a, b) => a.date.localeCompare(b.date))

              .map((presentation, i) => (
                <PresentationsItem
                  presentation={presentation}
                  variant="item"
                  key={i + "-item"}
                  editNewPresentation={this.props.editNewPresentation}
                  handleDelete={this.props.handleDelete}
                  history={this.props.history}
                />
              ))
          ) : (
            <div className="container" id="spinner-parent">
              <span className="spinner-border mt-4" role="status" />
            </div>
          )}
        </ul>

        <nav aria-label="Page navigation" className="presentations__pagination">
          <ul className="pagination">
            {this.props.presentations &&
              giveNum(this.props.presentations).map((item, i) => (
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => {
                      this.setState({
                        pages: this.props.presentations.slice(item, item + 8)
                      });
                    }}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Presentations;
