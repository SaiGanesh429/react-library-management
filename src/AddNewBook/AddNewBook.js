import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import InputField from "../shared/InputFields/InputField";
import "./AddNewBook.css";
import firebaseInstance from "../axios";

class AddNewBook extends Component {
  state = {
    newBookFormFields: [
      {
        id: "book",
        elementType: "text",
        elementName: "Book Name",
        value: "",
        isRequired: true,
        valid: true,
      },
      {
        id: "author",
        elementType: "text",
        elementName: "Author Name",
        value: "",
        isRequired: true,
        valid: true,
      },
    ],
  };

  addNewBook() {
    let book = {
      id: Math.random().toString(16).slice(2),
      bookName: this.state.newBookFormFields[0].value,
      authorName: this.state.newBookFormFields[1].value,
    };
    firebaseInstance.post(`/books.json`, book).then((response) => {
        this.props.history.push("/book");
      });
  }

  changeEventHandler(event, id) {
    let updatedState = [...this.state.newBookFormFields];
    updatedState.map((element, index) => {
      if (element.id === id) {
        updatedState[index]["value"] = event.target.value;
        updatedState[index]["valid"] = this.checkValidty(
          event.target.value,
          updatedState[index]["isRequired"]
        );
      }
      return updatedState;
    });

    this.setState({ newBookFormFields: updatedState });
  }

  checkValidty(value, isRequired) {
    if (isRequired) {
      return value.trim("") !== "";
    }
  }

  render() {
    let form;
    if (this.state.newBookFormFields.length) {
      form = (
        <div>
          {this.state.newBookFormFields.map((formData, index) => {
            return (
              <InputField
                inputType={formData.elementType}
                key={index}
                labelName={formData.elementName}
                isValid={formData.valid}
                changeEvent={(event) => {
                  this.changeEventHandler(event, formData.id);
                }}
                value={formData.value}
              ></InputField>
            );
          })}
        </div>
      );
    }

    return (
      <div className="wrapper">
        <div className="add-new-book-form">
          <div className="add-new-book-header">Fill all the Details</div>
          {form}
          <div>
            <button className="upload-book" onClick={() => this.addNewBook()}>
              Upload Book
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddNewBook);
