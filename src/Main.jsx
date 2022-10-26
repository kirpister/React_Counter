import React, { Component } from 'react';
import './App.css';
import './Main.css';

class Main extends Component {

    state = {
        counter: 0,
    };

    addOneHandler = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    addFiveHandler = () => {
        this.setState({ counter: this.state.counter + 5 });
    };

    minusOneHandler = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    minusFiveHandler = () => {
        this.setState({ counter: this.state.counter - 5 });
    };

    resetHandler = () => {
        this.setState({ counter: this.state.counter = 0 });
    };

// no const allowed inside class component

render() {
return ( 

<main>
    <div>
       <h2 className="counter">{this.state.counter}</h2>

        <button onClick={this.addFiveHandler}className="btn">Add Five</button>
        <button onClick={this.addOneHandler} className="btn">Add One</button>
        <button onClick={this.resetHandler} className="btn">Reset</button>
        <button onClick={this.minusOneHandler} className="btn">Remove One</button>
        <button onClick={this.minusFiveHandler} className="btn">Remove Five</button>
    </div>
</main>

);
};
}

export default Main;

// <h1 className="counter">
