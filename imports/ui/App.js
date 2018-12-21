import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import People from './People.js';
import LetterTable from './LetterTable.js';

// App component - represents the whole app
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [],
            showLetterCount: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            showLetterCount: !state.showLetterCount
        }));
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users'//, {
            // method: 'GET',
            //  withCredentials: true,
            //  credentials: 'include',
            //   headers: {
            //       'Authorization': 'Bearer ',
            //      'Content-Type': 'application/json',
            // }
            //}
        )
            .then(response => response.json())
            .then(data => this.setState({ people: data }))
            .catch((error) => {
                console.error(error)
            });

    }

    render() {
        //console.log(process.env.SIMPLE_APP_KEY);
        return (

            <div className="container">
                <People people={this.state.people} />
                <button onClick={this.handleClick}>
                    {this.state.showLetterCount ? 'HIDE LETTER COUNT' : 'SHOW LETTER COUNT'}
                </button>
                {this.state.showLetterCount &&
                    <LetterTable people={this.state.people} />
                }
            </div>
        );
    }
}

export default App;