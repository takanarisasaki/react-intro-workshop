/* global $ */
var React = require('react');
var $ = require('jquery');

var GithubProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired
    },
    getInitialState: function(){ 
        return {};
    },
    componentDidMount: function() {
        var url = `https://api.github.com/users/${this.props.username}?access_token=7caefdbff045f5059b46e65eb5a51f1c96873312`;
        var _this = this;
        //console.log(url);
        $.getJSON(url, function(userInfo) {
            //in another function, so need to use _this that contains the value of this
            _this.setState({
                user: userInfo
            });
        });
    },
    render: function() {
        
        if (this.state.user) {
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
        else {
            return (
                <div>
                    <p> LOADING </p>
                </div>
            );
        }
    
    }
});

module.exports = GithubProfile;