var React = require('react');

// children are everything written between <Layout> </Layout> in App.jsx
var Layout = React.createClass({
    render: function() {
        return (
            <div className="layout">
                <nav className="main-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                    </ul>
                </nav>

                <main>
                    {this.props.children}
                </main>
                
                <footer>
                    Copywhat 2016 Kittens
                 </footer>
            </div>
        );
    }
    
});

module.exports = Layout;