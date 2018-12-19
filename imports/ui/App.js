import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import People  from './People.js';

// App component - represents the whole app
class App extends Component {

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