/* global $ */
var React = require('react');
var $ = require('jquery');
var GithubSearch = require('./GithubSearch');

var GithubUser = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
    },
    getInitialState: function() {
        return {};
    },
    fetchData: function() {
        var url = `https://api.github.com/users/${this.props.username}?access_token=7caefdbff045f5059b46e65eb5a51f1c96873312`;
        var _this = this;
        //console.log(url);
        $.getJSON(url)
        .done(function(userInfo) {
            _this.setState({
                user: userInfo,
                username: userInfo.login,
                error: ''
            });
        })
        .fail(function(err) {
            var error;
            try {
                error = JSON.parse(err.responseText);
            }
            catch (e) {
                error = e;
            }
            _this.setState({
                error: error.message
            });
        })
    },
    componentDidUpdate: function(prevProps) {
        // prevPros is an object from React that contains information about previous props
        if (prevProps) {
            if (prevProps.username !== this.props.username) {
                this.fetchData();
            }
            else {
                return (<p> LOADING </p>);
            }
        }
    },
    componentDidMount: function() {
        // console.log("currentUsername", this.props.username);
        // console.log("previous props", this.props.prevProps);
        this.fetchData();
        this.componentDidUpdate();
    },
    render: function() {
        if (this.state.user && !this.state.error) {
            return (
                <div className="github-user">
                    <img className="github-user__avatar" src={this.state.user.avatar_url} />
                    <div className="github-user__info">
                        <p className="main_user_info"> {this.state.user.login} ({this.state.user.name})</p>
                        <p className="sub_user_info"> {this.state.user.bio} </p>
                    </div>
                </div>
            );
        }
        else if (this.state.error) {
            return (
                <div>
                    <p> {this.state.error} </p>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p> LOADING </p>
                </div>
            );
        }

    }
});

module.exports = GithubUser;