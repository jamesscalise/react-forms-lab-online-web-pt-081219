import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      remainingChars: 280,
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      remainingChars: 280 - (event.target.value.length)
    })
    
    console.log(this.state.message)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} value={this.state.message} name="message" id="message" />
        <div>{this.state.remainingChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
