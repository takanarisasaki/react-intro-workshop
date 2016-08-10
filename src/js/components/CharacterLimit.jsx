var React = require('react');

var CharacterLimit = React.createClass({
    propTypes: {
        limit: React.PropTypes.number.isRequired
    },
    getInitialState: function() {
        return {
            value: '',
            numCharacterRemaining: this.props.limit
        }
    },
    _handleInput: function(e) {
        // console.log("e", e);
        // console.log("e.target.value.length", e.target.value.length);
        // console.log("props.limit", this.props);
        if (e.target.value.length <= this.props.limit) {
            // Every time setState is called, render function is called
            this.setState({
                value: e.target.value,
                numCharacterRemaining: this.props.limit - e.target.value.length
            });
        }
    },
    render: function() {
        return (
            <div>
                <input type="text" ref="theInput" value={this.state.value} onInput={this._handleInput} />
                <p> {this.state.numCharacterRemaining} Remaining </p>
            </div>
        );
    }
});

module.exports = CharacterLimit;