import React, { Component } from 'react';
import axios from 'axios'


class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const message = this.state.value;
    const user = 'Gabriel';
    alert('You did a funny: ' + this.state.value);
    event.preventDefault();
    //post request
    axios.post('https://afternoon-stream-01263.herokuapp.com/message', { user, message })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err));
    //get request
    fetch('https://afternoon-stream-01263.herokuapp.com/messages')
      .then(response => response.json())
      .then(data => console.log(data));
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Write your joke sucka:
          <textarea value={this.state.value} onChange={this.handleChange} placeholder="I pity da foo who ain't funny" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MessageBoard;