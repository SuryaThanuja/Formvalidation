import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { count: props.data + 10 };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data });
      });
  }

  render() {
    return (
      <>
        <h2>This is child component</h2>
        <h2>Props: {this.props.data}</h2>
        <h2>Count (props + 10): {this.state.count}</h2>
        <h3>User Info:</h3>
        {this.state.user ? (
          <p>{this.state.user.name} - {this.state.user.email}</p>
        ) : (
          <p>Loading user...</p>
        )}
      </>
    );
  }
}

export default Child;
