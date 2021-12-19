//import React, { Component } from 'react';
import React from 'react';
import axios from 'axios'
import { Col, Row } from 'react-bootstrap';


class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: "",
      joke: "",
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  async getMessages() {
    const response = await fetch(`https://afternoon-stream-01263.herokuapp.com/messages`);
    const data = await response.json();
    this.setState({ data });
  }

  componentDidMount() {

    this.getMessages();
  }

  handleSubmit(event) {
    event.preventDefault();
    const message = this.state.joke;
    const user = this.props.user;
    alert('You did a funny: ' + message);
    //post request
    axios.post('https://afternoon-stream-01263.herokuapp.com/message', { user, message })
      .then(res => {
        this.getMessages();
      })
      .catch(err => console.log(err));

  }


  render() {
    return (
      <div id='mBoard'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Write your joke sucka:
            <textarea name='joke' value={this.state.joke} onChange={this.handleChange} placeholder="I pity da foo who ain't funny" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.data && this.state.data.map((post, index) => (
          <React.Fragment key={index}>
            <Row><Col><text>{`${post.user} ${post.message}`}</text></Col></Row>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default MessageBoard;