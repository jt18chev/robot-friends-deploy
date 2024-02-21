import React from 'react';
import CardList from '../components/CardList';
import { robots } from '../components/robots';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends React.Component {
    constructor() {
        super();
        this.state = { robots: [], searchfield: "" };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((robot) => {
                console.log({ robot });
                this.setState({ robots: robot });
            });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robots) => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return (!robots.length ? (
            <h1>Loading</h1>
        ) : (
            <div className="tc">
                <h1 className="f1">RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        ));

    }
}

export default App;