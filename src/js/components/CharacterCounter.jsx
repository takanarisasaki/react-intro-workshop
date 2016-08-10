var React = require('react');

var CharacterCounter = React.createClass({
    getInitialState: function() {
        return {
            currentInput: '',
            characterCount: 0
        }
    },
    _handleInput: function(event) {
        var value = event.target.value;
        //console.log("VALUE", value);
        this.setState({
            currentInput: value,
            characterCount: value.length
        })
    },
    render: function() {
        return (
            <div>
                <input type="text" onInput={this._handleInput} />
                <p> Character Count: {this.state.characterCount} </p>
            </div>
        );
    }
});

module.exports = CharacterCounter;