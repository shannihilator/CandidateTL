import React, { Component } from 'react';

const API = 'https://jsonplaceholder.typicode.com/users';

class LetterTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letterCounts: []
        };
    }

    componentDidMount() {
        let emailAddresses = [];
        { this.props.people.map(person => emailAddresses.push(person.email)) }
        emailAddresses = emailAddresses.join('');
        emailAddresses = [...emailAddresses];
        emailAddresses = emailAddresses.sort();

        let lc = [];
        while (emailAddresses.length > 0) {
            let x = emailAddresses[0];
            let y = emailAddresses.lastIndexOf(x) + 1;
            lc.push({ "char": x, "count": y });
            emailAddresses.splice(0, y);
        }

        lc.sort(function(a, b) { return b.count - a.count });
        this.setState({ letterCounts: lc });
    }

    render() {

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
                        {this.state.letterCounts.map(item =>
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
                <br />
            </div>
        );
    }
}

export default LetterTable;