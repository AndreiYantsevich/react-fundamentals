import React, {Component} from 'react';

type StateType = {
    count: number
}

class ClassCounter extends Component<any, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Inc</button>
                <button onClick={this.decrement}>Dec</button>
            </div>
        );
    }
}

export default ClassCounter;