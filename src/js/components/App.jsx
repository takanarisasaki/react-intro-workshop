var React = require('react');
var ImageCaption = require('./ImageCaption');
var Layout = require('./Layout');
var RedBox = require('./RedBox')
var GuessTheNumber = require('./GuessTheNumber');
var YouClicked = require('./YouClicked');
var CharacterCounter = require('./CharacterCounter');
var CharacterLimit = require('./CharacterLimit');
var NumberGuessing = require('./NumberGuessing');
var GithubProfile = require('./GithubProfile');
var GithubSearch = require('./GithubSearch');

var imageList = [
    {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
    {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
    {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

var App = React.createClass({
    render: function() {
        return (
            <main>
                <h3>My first React App</h3>
                <hr/>
                
                <h3> Testing ImageCaption </h3>
                <ImageCaption text={"This is a kittenz!"} source={"http://placekitten.com/g/210/210"} />
                <hr/>
                
                <h3> Testing Mapping ImageCaption </h3>
                <div>
                    {imageList.map(this.renderImage)}
                </div>
                <hr/>
                
                <RedBox>
                    <p>This will be in the red box</p>
                    <img alt="This too!" src="http://placekitten.com/g/200/200"/>
                </RedBox>
                <hr/>
                
                <h3> Testing Layout </h3>
                <Layout>
                    <h4> About us </h4>
                    <p> We are <a href="https://facebook.github.io/react/index.html">React</a> developers! </p>
                </Layout>
                <hr/>
                
                <h3> Testing GuessTheNumber </h3>
                <GuessTheNumber numberToGuess={42} />
                <hr/>
                
                <h3> Testing YouClicked </h3>
                <YouClicked />
                <hr/>
                
                <h3> Testing CharacterCount </h3>
                <CharacterCounter />
                <hr/>
                
                <h3> Testing CharacterLimit </h3>
                <CharacterLimit limit={10} />
                <hr/>
                
                <h3> Testing NumberGuessing </h3>
                <NumberGuessing limit={5} />
                <hr/>
                
                <h3> Testing GithubProfile </h3>
                <GithubProfile username="gaearon" />
                <hr/>
                
                <h3> Testing GithubSearch </h3>
                <GithubSearch />
                <hr/>
                
          </main>
        );
    },
    renderImage: function(image) {
        return (
            // Only when mapping each item needs an unique key
            <ImageCaption text={image.text} source={image.source} key={image.id} />
        );
    }
});

module.exports = App;