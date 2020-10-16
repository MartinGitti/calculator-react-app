/* 
Code below allows me to create and display a functional calculator with
the help from an online "create a simple calculator with react" tutorial.
 */

import React, { Component } from 'react'; // Import React Library.
import './App.css'; // Import Styling Sheet.
import Orb from './Images/Orb.gif';

// Import Created Components.
import ResultComponent from "./Components/ResultComponent";
import KeyPadComponent from "./Components/KeyPadComponent";


/*Use class funtion to include state in component. */
class App extends Component {
    constructor() {
        super();

        this.state = {
            result: ""
        }
    }

    // Add Event handler & If else statement to add functionality to buttons.
    onClick = button => {

        if (button === "=") {
            this.calculate()
        }

        else if (button === "C") {
            this.reset()
        }
        else if (button === "CE") {
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    // Create calculate function using arrow function with statements.
    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--', '+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "") + ""
            })
        } catch (error) { // Use catch statement to handle errors regardless of the result after try & catch.
            this.setState({
                result: "error"
            })

        }
    };

    // Arrow function to reset calculator.
    reset = () => {
        this.setState({
            result: ""
        })
    };
    // Arrow function to remove last digit entered.
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };
    // Display calculator content and functionality on html page.
    render() {
        return (
            <div>
                <div className="calculator-body">
                    <div className="image-div">
                        <h1>Let's get cracking!</h1>
                        <img src={Orb} alt="Transforming Ball" className="Orb"></img>
                    </div>
                    <div className="component-div">
                        <h2>Calculator</h2>
                        <ResultComponent result={this.state.result} />
                        <KeyPadComponent onClick={this.onClick} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
