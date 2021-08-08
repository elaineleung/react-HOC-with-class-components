import React from 'react';

class AllUsers extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users/';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log;
        this.setState(prevState => ({ users: data }));
      });
  }

  render() {
    const Component = this.props.component;
    return <Component users={this.state.users} {...this.state.props} />;
  }
}

export function WithAllUsers(component) {
  return function(props) {
    return <AllUsers component={component} {...props} />;
  };
}
