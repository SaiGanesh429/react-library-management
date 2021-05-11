import React, { Component } from "react";
import "./BookList.css";
import firebaseInstance from "../axios";

class BookList extends Component {
  state = {
    BookList: [],
    showBookList: true,
  };

  componentDidMount() {
    firebaseInstance.get("books.json").then((response) => {
      let books = [];
      for (let book in response.data) {
        books.push({
          ...response.data[book],
          description: `est rerum tempore vitae sequi sint nihil reprehenderit dolor 
                        beatae ea dolores neque fugiat blanditiis 
                        voluptate porro vel nihil molestiae ut reiciendi
                         qui aperiam non debitis possimus qui neque nisi nulla`,
        });
      }
      this.setState({ BookList: books });
    });
  }

  routeChange(id) {
    this.props.history.push(`/book-full-view/${id}`);
  }

  render() {
    const books = this.state.BookList.map((book) => {
      return (
        <div
          className="book"
          key={book.id}
          onClick={() => this.routeChange(book.id)}
        >
          {book.bookName}
          <span className="author">Author:{book.authorName}</span>
          <p className="desc">{book.description}</p>
        </div>
      );
    });
    return <div className="book-list">{books}</div>;
  }
}

export default BookList;
