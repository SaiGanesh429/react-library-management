import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import InputField from "../shared/InputFields/InputField";
import "./AddNewBook.css";
import firebaseInstance from "../axios";

const AddNewBookFunctionalComponent = (props) => {
  const state = {
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

  //   const inputStates = useState({ bookName: "", authorName: "" });

  //array destructuring
  //   const [inputStates, setInputStatesFunction] = useState({
  //     bookName: "",
  //     authorName: "",
  //   });

  // spliting the single single state into multiple states

  const [enteredBookName, setEnteredBookNameFn] = useState("");
  const [enteredAuthorName, setEnteredAuthorNameFn] = useState("");

  const addNewBook = () => {
    let book = {
      id: Math.random().toString(16).slice(2),
      bookName: enteredBookName,
      authorName: enteredAuthorName,
    };

    firebaseInstance.post("/books.json", book).then((response) => {
      props.history.push("/book");
    });
  };

  let form;
  if (state.newBookFormFields.length) {
    form = (
      <div>
        <InputField
          inputType="text"
          labelName="Book Name"
          isValid="true"
          value={enteredBookName}
          changeEvent={(event) => {
            setEnteredBookNameFn(event.target.value);
          }}
        ></InputField>

        <InputField
          inputType="text"
          labelName="Author Name"
          isValid="true"
          value={enteredAuthorName}
          changeEvent={(event) => {
            setEnteredAuthorNameFn(event.target.value);
          }}
        ></InputField>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="add-new-book-form">
        <div className="add-new-book-header">Fill all the Details</div>
        {form}
        <div>
          <button className="upload-book" onClick={() => addNewBook()}>
            Upload Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AddNewBookFunctionalComponent);
