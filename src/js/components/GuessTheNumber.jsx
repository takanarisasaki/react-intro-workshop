var React = require('react');

// numberToGuess: React.PropTypes.number.isRequired
var GuessTheNumber = React.createClass({
    propTypes: {
        numberToGuess: React.PropTypes.number.isRequired
    },
    _handleButtonClick: function() {
        // console.log("NUMBER TO GUESS", this.props.numberToGuess);
        // console.log("INPUT VALUE", this.refs.userGuess.value);
        if (this.props.numberToGuess === parseInt(this.refs.userGuess.value)) {
            alert('You guessed the correct number!');
        } else if (this.props.numberToGuess > parseInt(this.refs.userGuess.value)) {
            alert('Your number is too low!');
        } else {
            alert('Your number is too high!')
        }
    },
    render: function() {
        return (
            <div>
                <p> Guess a number between 1 and 100 </p>
                <input type="text" ref="userGuess"/>
                <input type="button" value="GUESS" onClick={this._handleButtonClick} />
            </div>
        );
    }
    
});

module.exports = GuessTheNumber;