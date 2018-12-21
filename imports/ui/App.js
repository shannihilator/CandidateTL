import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import People  from './People.js';

// App component - represents the whole app
class App extends Component {

    constructor(props){
    super(props);
    this.state = {
      people: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ people: data }));
      console.log(this.state.people);
  }


  render() {
    return (
      <div className="container">
        <header>
          <h1>People</h1>
        </header>
        <People />
      </div>
    );
  }
}

export default App;