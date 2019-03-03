import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    //In case we don't use username or null value it would throw exceptions
    // So it should be initialised with empty string
    account: { username: "", password: "" },
    errors: {}
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.username.trim() === "")
      errors.username = "Username is required.";
    if (account.password.trim() === "")
      errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  //   To get the access to DOM object
  username = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    // Call the server
    // User below approach to really accesing DOM object
    // const username = this.username.current.value;
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    //When we need to handle some property dynamically we need to use straight brackets
    // instead of dot.
    account[input.name] = input.value;
    this.setState({ account });
  };

  // When components are mounted we should focus
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {/* Here we can see the repitition of div label and input so we would
          better make a separate input.jsx */}
          {/* <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={this.username}
              //It would tightly couple the value with the state field and on typing in field
              //nothing would change
              value={account.username}
              // So need to bind onChange event
              onChange={this.handleChange}
              autoFocus
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div> */}
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            autoFocus
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
          />
          {/* <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              type="password"
              className="form-control"
            />
          </div> */}
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
