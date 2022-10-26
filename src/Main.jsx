import React, { Component } from 'react';
import './App.css';
import './Main.css';
import Button from './Button.jsx'

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
        this.setState({ counter: Math.max(0, this.state.counter - 1 )});
    };

    minusFiveHandler = () => {
        this.setState({ counter: Math.max(0, this.state.counter - 5 )});
    };

    resetHandler = () => {
        this.setState({ counter: this.state.counter = 0 });
    };

 render() {

    let circleClass = "";

    if (this.state.counter === 0) {
        circleClass = "circle";

    } else if (this.state.counter % 2 === 0) {
        circleClass = "circleeven";

    } else {
        circleClass = "circleodd";
    }

return ( 

<main>
    <div>
       <h2 className={circleClass}>{this.state.counter}</h2>

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

// no const allowed inside class component

