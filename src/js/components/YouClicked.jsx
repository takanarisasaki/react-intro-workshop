var React = require('react');

var YouClicked = React.createClass({
    getInitialState: function() {
        return {
            timesClicked: 0,
            timesReset: 0
        }
    },
    _handleButtonClick: function() {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        });
    },
    _numberOfClick: function() {
        var numClicked = this.state.timesClicked;
        if (numClicked === 0) {
            return (<p> You have not clicked the button </p>);
        } else if (numClicked === 1) {
            return (<p> You have clicked the button once </p>);
        } else if (numClicked === 2) {
            return (<p> You have clicked the button twice </p>);
        } else {
            return (<p> You have clicked the button {numClicked} </p>);
        }
    },
    _reset: function() {
        this.setState({
            timesClicked: 0,
            timesReset: this.state.timesReset + 1
        });
    },
    render: function() {
        return (
            <div>
                <input type="button" onClick={this._handleButtonClick} value="CLICK ME!"/>
                <input type="button" onClick={this._reset} value="RESET"/>
                {this._numberOfClick()}
                <p> You have reset {this.state.timesReset} times </p>
            </div>
            
        );
    }
    
});

module.exports = YouClicked;