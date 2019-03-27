import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      userInput: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({todoList: [...this.state.todoList, this.state.userInput]})
  }

  render() {
    return (
      <div className="App">
        <input onChange={(event) => this.setState({userInput: event.target.value})} />
        <button onClick={() => this.handleClick()}>Add to List</button>
        <List todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
