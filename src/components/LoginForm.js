import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }


  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }
 
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    //let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
   // this.sendFormDataSomewhere(formData)
   if (this.state.username && this.state.password){
    this.props.handleLogin()
   }
  }
 

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" value = {this.state.username} onChange = {event => this.handleUsernameChange(event)}name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" value = {this.state.password} onChange = {event => this.handlePasswordChange(event)} name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
