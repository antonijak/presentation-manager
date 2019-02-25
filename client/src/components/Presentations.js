import React, { Component } from "react";
import PresentationsItem from "./PresentationsItem";
import { givePageBreaks } from "../assets/HelperFunctions";
import "./Presentations.scss";

class Presentations extends Component {
  state = {
    render: false,
    a: 0,
    b: 7
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
            this.props
              .getPages(this.state.a, this.state.b)
              .sort((a, b) => a.date.localeCompare(b.date))
              .map((presentation, i) => (
                <PresentationsItem
                  presentation={presentation}
                  variant="item"
                  key={i + "-item"}
                  editNewPresentation={this.props.editNewPresentation}
                  handleDelete={this.props.handleDelete}
                  history={this.props.history}
                  rerender={this.rerender}
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
              givePageBreaks(this.props.presentations, 7).map((item, i) => (
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => {
                      this.setState({
                        a: item,
                        b: item + 7
                      });
                    }}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
          </ul>
        </nav>
        {this.props.added && (
          <div class="alert alert-success" role="alert">
            Presentation added!
          </div>
        )}
        {this.props.deleted && (
          <div class="alert alert-success" role="alert">
            Presentation deleted!
          </div>
        )}
        {this.props.edited && (
          <div class="alert alert-success" role="alert">
            Presentation updated
          </div>
        )}
      </div>
    );
  }
}

export default Presentations;
