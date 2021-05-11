import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import InputField from '../shared/InputFields/InputField'
import './AddNewBook.css'
import firebaseInstance from '../axios'

const AddNewBookFunctionalComponent = props => {

    const state = {
        newBookFormFields: [
            { id: 'book', elementType: 'text', elementName: 'Book Name', value: '', isRequired: true, valid: true },
            { id: 'author', elementType: 'text', elementName: 'Author Name', value: '', isRequired: true, valid: true }
        ]
    };


    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');


    const addNewBook = () => {
        let book = {
            id: Math.random().toString(16).slice(2),
            bookName: state.newBookFormFields[0].value,
            authorName: state.newBookFormFields[1].value
        }
        firebaseInstance.post('/books.json', book).then(response => {
            props.history.push('/book');
        });
    }


    const changeEventHandler = (event, id, fieldName) => {

        // let updatedState = [...state.newBookFormFields];
        // updatedState.map((element, index) => {
        //     if (element.elementName === fieldName) {
        //         updatedState[index]['value'] = event.target.value;
        //         updatedState[index]['valid'] = checkValidty(event.target.value, updatedState[index]['isRequired']);
        //     }
        //     return updatedState;
        // });
        // state.newBookFormFields = updatedState

        console.log(event.target.value, event, fieldName,22)

        fieldName === 'Book Name' ? setBookName(event.target.value) : setAuthorName(event.target.value)

    }




    const checkValidty = (value, isRequired) => {
        if (isRequired) {
            return value.trim('') !== '';
        }
    }


    let form;
    if (state.newBookFormFields.length) {
        form = (
            <div>
                {
                    state.newBookFormFields.map((formData, index) => {
                        return <InputField inputType={formData.elementType} key={index} labelName={formData.elementName} isValid={formData.valid} value={bookName[0]} changeEvent={(event) => {
                            changeEventHandler(event, formData.id, formData.elementName)
                        }} value={formData.value}></InputField>
                    })
                }
            </div>
        )
    }
    return (
        <div className="wrapper">
            <div className='add-new-book-form'>
                <div className="add-new-book-header">Fill all the Details</div>
                {form}
                <div>
                    <button className='upload-book' onClick={() => addNewBook()}>Upload Book</button>
                </div>
            </div>

        </div>
    )
}





export default withRouter(AddNewBookFunctionalComponent);