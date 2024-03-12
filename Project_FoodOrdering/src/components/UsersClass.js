import React from "react";

class UsersClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>This is user {this.props.name}</h1>
      </div>
    );
  }
}

export default UsersClass;
