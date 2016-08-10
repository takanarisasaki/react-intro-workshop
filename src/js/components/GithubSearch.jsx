var React = require('react');
// GithubSearchForm and GithubUser are GitbubSearch's children components
var GithubSearchForm = require('./GithubSearchForm');
//GithubUser.jsx has exactly the same code as GithubProfile.jsx, just the names are different (just differentiating the exercises)
var GithubUser = require('./GithubUser');

var GithubSearch = React.createClass({
    getInitialState: function() {
        return {};
    },
    _handleSearch: function(searchTerm) {
        //searchTerm is what we type inside the text form
        //console.log("SEARCHTERM", searchTerm);
        this.setState({
            username: searchTerm
        });
    },
    render: function() {
        return (
            <div>
                <GithubSearchForm onSearch={this._handleSearch}/>
                {this.state.username ? <GithubUser username={this.state.username}/> : null}
            </div>
        );
    }
});

module.exports = GithubSearch;