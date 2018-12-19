import React, { Component } from 'react';

const API = 'https://jsonplaceholder.typicode.com/users';

class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ people: data }));
  }

    render() {
    const { people } = this.state;

    return (

        <table>
        <tbody>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        </tr>
        {people.map(hit =>
          <tr key={hit.id}>
            <td>{hit.name}</td>
            <td>{hit.email}</td>
            <td>{hit.phone}</td>
          </tr>
        )}    
        </tbody>
        </table>
        );
  }
}

export default People;