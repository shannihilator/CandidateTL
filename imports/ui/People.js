import React, { Component } from 'react';

const API = 'https://jsonplaceholder.typicode.com/users';

class People extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.people);

    return (
      <div>
        <header>
          <h1>People</h1>
        </header>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {this.props.people.map(person =>
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
              </tr>
            )}
          </tbody>
        </table>
        <br/>
      </div>

    );
  }
}

export default People;