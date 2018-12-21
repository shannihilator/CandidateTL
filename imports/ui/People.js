import React, { Component } from 'react';

const API = 'https://jsonplaceholder.typicode.com/users';

class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    }; 
  }

  //someFn = this.props.callbackFromParent('2');

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ people: data }));
     
  }

    render() {
    const { people } = this.state;
    var emailAddresses = [];
    {people.map(person => emailAddresses.push(person.email))}
    emailAddresses = emailAddresses.join('');
    emailAddresses = [...emailAddresses];
    emailAddresses = emailAddresses.sort();
    
    var letterCounts = [];
    while (emailAddresses.length > 0){
        let x = emailAddresses[0];
        let y = emailAddresses.lastIndexOf(x)+1;
        letterCounts.push({ "char": x, "count": y});
        emailAddresses.splice(0,y);
    }
    
    letterCounts.sort(function (a, b) { return b.count - a.count});
    //this.props.callbackFromParent(letterCounts);
    console.log(emailAddresses);
    console.log(letterCounts);
    //this.props.callbackFromParent('2');
    return (
      <div>
        <table>
        <tbody>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        </tr>
        {people.map(person =>
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>{person.phone}</td>
          </tr>
        )} 
        <tr>
        <td></td>
        </tr>
        </tbody>
        </table>

        <table>
        <tbody>
        <tr>
        <th>Character</th>
        <th>Count</th>
        </tr>
        {letterCounts.map(item =>
          <tr key={item.char}>
            <td>{item.char}</td>
            <td>{item.count}</td>
          </tr>
        )} 
        <tr>
        <td></td>
        </tr>
        </tbody>
        </table>
        </div>

        );
  }
}

export default People;