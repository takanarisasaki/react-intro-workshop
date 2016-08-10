var React = require('react');

var RedBox = React.createClass({
  render: function() {
    return (
      <div className="red-box">
        {this.props.children}
      </div>
    );
  }
});

module.exports = RedBox;