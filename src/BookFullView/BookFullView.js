import React, { Component } from "react";
import firebaseInstance from "../axios";
import "./BookFullView.css";
import svg from "../assets/book-svg.svg";
class BookFullView extends Component {
  componentDidMount() {
    this.setState({ selectedBookId: this.props.match.params.id });
    this.getData();
  }
  state = {
    selectedBookId: null,
    selectedBookObj: {},
  };

  getData() {
    firebaseInstance.get(`books.json`).then((response) => {
      Object.values(response.data).forEach((item) => {
        if (item.id === this.props.match.params.id) {
          this.setState({ selectedBookObj: item });
        }
      });
    });
  }


  
  render() {
    if (this.state.selectedBookObj !== {}) {
    }
    return Object.keys(this.state.selectedBookObj).length !== 0 ? (
      <div className="full-View-header">
        <div className="book-container">
          <div className="content">
            <div className="left-content">
              <div className="book-detail">
                <label>Name:</label>
                <span>{this.state.selectedBookObj.bookName}</span>
              </div>
              <div className="book-detail">
                <label>Author:</label>
                <span>{this.state.selectedBookObj.authorName}</span>
              </div>
            </div>
            <div className="right-content">
              <img className="book-icon" src={svg} alt="book"></img>
            </div>
          </div>
          <div className="book-detail description">
            <label>Description</label>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition
            </p>
          </div>
          <div className="back-to-library">
            <button onClick={() => this.props.history.push("/book")}>
              Back to library
            </button>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default BookFullView;
