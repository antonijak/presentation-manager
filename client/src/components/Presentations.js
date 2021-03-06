import React, { Component } from "react";
import PresentationsItem from "./PresentationsItem";
import { givePageBreaks } from "../assets/HelperFunctions";
import "./Presentations.scss";

class Presentations extends Component {
  state = { sliceFirst: 0, sliceSecond: 7 };
  render() {
    return (
      <div className="container presentations-container" id="main-con">
        {this.props.added && (
          <div className="alert alert-success" role="alert" id="alert">
            Presentation added!
          </div>
        )}
        {this.props.deleted && (
          <div className="alert alert-success" role="alert" id="alert">
            Presentation deleted!
          </div>
        )}
        {this.props.edited && (
          <div className="alert alert-success" role="alert" id="alert">
            Presentation updated
          </div>
        )}
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
              .getPages(this.state.sliceFirst, this.state.sliceSecond)
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
                <li className="page-item" id="pag" key={i + 1}>
                  <button
                    className="page-link"
                    id="pag"
                    onClick={() => {
                      this.setState({
                        sliceFirst: item,
                        sliceSecond: item + 7
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
