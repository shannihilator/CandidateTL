import React, { Component } from 'react';

class LetterTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
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
   // console.log(emailAddresses);
   // console.log(letterCounts);

    return (
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
        );
  }
}

export default LetterTable;