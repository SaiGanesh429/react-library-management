
import React, { Component } from 'react';
import './App.css';
import Radium from 'radium'
import Header from './shared/Header/Header'
import BookList from './BookList/BookList';
// import StyleComponent from './Styled-components/Styled-components'
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import AddNewBook from './AddNewBook/AddNewBook';
import BookFullView from './BookFullView/BookFullView';
// import AddNewBookFunctionalComponent from './AddNewBook/AddNewBookFunctionalComponent';


class App extends Component {
  setStateHandler = (event, author) => {
    const getBookObj = this.state.BookList.findIndex(b => {
      return b.author === author;
    });

    const book = { ...this.state.BookList[getBookObj] };
    book['name'] = event.target.value;

    const Books = [...this.state.BookList];
    Books[getBookObj] = book;
    this.setState({ BookList: Books })
  }

  toggleBookListHandler = () => {
    const toggleBook = this.state.showBookList
    this.setState({ showBookList: !toggleBook });
  }

  render() {
    const customStyles = {
      display: 'flex',
      // ':hover': {
      //   backgroundColor: "pink"
      // }
    }

    // let Books = null;
    // if (this.state.showBookList) {
    //   Books = (
    //     <div style={customStyles}>
    //       {this.state.BookList.map(book => {
    //         return <BookList name={book.name} change={(event) => { this.setStateHandler(event, book.author) }}
    //           author={book.author} key={book.author} />
    //       })}

    //     </div>
    //   )
    // }

    return (
      <BrowserRouter>
        <div className="App">
          <div><Header name="Library Management System"></Header></div>
          <div className="body">
            <div className='nav-bar'>
              <ul>
                <NavLink to={{
                  pathname: '/book',
                  // state: {
                  //   data: this.state.BookList
                  // }
                }}>Books</NavLink>
                <NavLink to='/add-book'>Add Book</NavLink>
              </ul>
            </div>

            <div className='content' style={customStyles}>
              <Switch>
                <Route path='/book' component={BookList} />
                <Route path='/book-full-view/:id' component={BookFullView} />
                <Route path='/add-book' component={AddNewBook} />
                <Redirect from='/' to='/book' />
              </Switch>

              {/* <Route path='/add-book'
                render={() => {
                  <Suspense><AddBook /></Suspense>
                }} /> */}

              {/* passing data to the child Component */}

              {/* <Route path='/book' render={(props) => (
                <BookList data={this.state.BookList} />
              )} /> */}




              {/* data={this.state.BookList} */}
              {/* <BookList data={this.state.BookList} /> */}
            </div>
            {/* <button className="update-book-btn" onClick={this.setStateHandler.bind(this, "backboneJs")}>Update Books</button>
          <button className="update-book-btn" onClick={this.toggleBookListHandler}>Toggle Books</button> */}
            {/* {Books} */}
          </div>
          {/* <div><StyleComponent buttonColor={true} /></div> */}
        </div>
      </BrowserRouter >
    );
  }
}

export default Radium(App);
