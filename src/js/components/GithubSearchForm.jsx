var React = require('react');

var GithubSearchForm = React.createClass({
    PropTypes: {
        onSearch: React.PropTypes.func
    },
     _handleSubmit: function(e) {
        e.preventDefault();
        var userInputValue = this.refs.userInput.value;
        //a child component is communicating to a parent component using a function that was passed down to it as a prop.
        this.props.onSearch(userInputValue);
        //console.log("userInputValue: ", userInputValue);
        //console.log("this.props.onSearch ", this.props.onSearch);
    },
    render: function() {
        return (
            <form onSubmit={this._handleSubmit} >
                <p>Enter a GitHub username:</p>
                <input type="text" ref="userInput" />
                <button> Go! </button>
            </form>
        );
    }
});

module.exports = GithubSearchForm;