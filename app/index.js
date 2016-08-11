var USER_DATA = {
  name: 'Sean Hawkridge',
  username: 'seanhawkridge',
  image: 'https://avatars3.githubusercontent.com/u/1470147?v=3&u=a3c40210e3242f2400c4f01972c093b2572b2b51&s=140'
};

var React = require('react');
var ReactDom = require('react-dom');

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageURL} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div><a href={'https://github.com/' + this.props.username}>
      {this.props.username}
      </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function () {
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageURL={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
});

ReactDom.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
