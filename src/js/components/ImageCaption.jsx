var React = require('react');

var ImageCaption = React.createClass({
    // ImageCaption has this.prop.source and this.prop.text that are type string and which are both required
    propTypes: {
        source: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <figure>
                <img src={this.props.source}/>
                <figcaption>
                    {this.props.text}
                </figcaption>
            </figure>
        );
    }
});

module.exports = ImageCaption;