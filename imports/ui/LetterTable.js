import React, { Component } from 'react';

const API = 'https://jsonplaceholder.typicode.com/users';

class LetterTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { people } = this.props.people;
    var emailAddresses = [];
    { this.props.people.map(person => emailAddresses.push(person.email)) }
    emailAddresses = emailAddresses.join('');
    emailAddresses = [...emailAddresses];
    emailAddresses = emailAddresses.sort();

    var letterCounts = [];
    while (emailAddresses.length > 0) {
      let x = emailAddresses[0];
      let y = emailAddresses.lastIndexOf(x) + 1;
      letterCounts.push({ "char": x, "count": y });
      emailAddresses.splice(0, y);
    }

    letterCounts.sort(function (a, b) { return b.count - a.count });

    //console.log(emailAddresses);
    //console.log(letterCounts);

    return (
      <div>
        <header>
          <h1>Letter Count</h1>
        </header>
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
        <br/>
      </div>
    );
  }
}

export default LetterTable;