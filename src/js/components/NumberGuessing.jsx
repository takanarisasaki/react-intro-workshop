var React = require('react');

var NumberGuessing = React.createClass({
    propTypes: {
        limit: React.PropTypes.number.isRequired
    },
    getInitialState: function() {
        return {
            gameStatus: 'stopped',
            guesses: []
        }
    },
    _handleGuessButton: function() {
        
        var newArray = [].concat(this.state.guesses);
        
        var currentState = {
            gameStatus: '',
            numGuessRemaining: this.state.numGuessRemaining,
            message: '',
            guesses: newArray,
            numToGuess: this.state.numToGuess
        }
        // console.log(currentState.numGuessRemaining);
        
        var inputNumber = this.refs.userInput.value;
        var numberToGuess = this.state.numToGuess;
        
        if (this.state.numGuessRemaining - 1 > 0) {
            currentState.numGuessRemaining = this.state.numGuessRemaining - 1;
            currentState.guesses.push(inputNumber);
            if (parseInt(inputNumber) === numberToGuess) {
                currentState.message = 'YOU WIN!';
                currentState.gameStatus = 'win';
            }
            else if (inputNumber < numberToGuess) {
                currentState.message = 'TOO SMALL!';
                currentState.gameStatus = 'playing';
            }
            else if (inputNumber > numberToGuess) {
                currentState.message = 'TOO BIG!';
                currentState.gameStatus = 'playing';
            }
            else {
                currentState.message = 'ENTER A VALID NUMBER!';
            }
        }
        
        else {
            if (currentState.guesses.length === 4) {
                currentState.guesses.push(inputNumber);
            }   
            currentState.message = 'YOU LOSE! THE CORRECT NUMBER WAS ' + numberToGuess;
            currentState.gameStatus = 'lose';
        }
        
        this.setState(currentState);
        
    },
    _startGame: function() {
        //this.refs.userInput.value = "";
        this.setState({
           gameStatus: 'playing',
           numGuessRemaining: this.props.limit,
           numToGuess: Math.floor(Math.random()*100),
           guesses: [],
           message: ''
        });
    },
    displayGameScreen: function(status) {
        if(status === 'stopped') {
            return (
                <div>
                    <button onClick={this._startGame}>NEW GAME</button>
                </div>
            );
        }
        return (
            <div> 
                <p> Guess a number between 1 to 100 </p>
                <input type="text" ref="userInput" />
                <button onClick={this._handleGuessButton}>GUESS</button>
                <button onClick={this._startGame}>NEW</button>
                <p> {this.state.message} </p>
                <p> You have {this.props.limit - this.state.guesses.length} guess left </p>
                <p> Your guesses: {this.state.guesses.toString()} </p>            
            </div>
        );
    },
    render: function() {
        if (this.state.gameStatus === 'win' || this.state.gameStatus === 'lose') {
            return (
                <div>
                    <p> {this.state.message} </p>
                    <button onClick={this._startGame}>NEW</button>
                </div>
            );
        }
        else {
            return (this.displayGameScreen(this.state.gameStatus))
        }
    }
    
});

module.exports = NumberGuessing;