//import React, { Component } from 'react';
import React from 'react';
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'


class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async getMessages() {
    const response = await fetch(`https://afternoon-stream-01263.herokuapp.com/messages`);
    const data = await response.json();
    this.setState({ data });
  }

  componentDidMount() {
    // here show me the API correct like this
    // 0:{id:1, name:"categorie one"}
    // 1:{id:11, name:"categorie four"}
    // 2:{id:19, name:"categorie five"}
    // 3:{id:16, name:"categorie six"}
    this.getMessages();
  }

  handleSubmit(event) {
    const message = this.state.value;
    const user = 'Gabriel';
    alert('You did a funny: ' + this.state.value);
    event.preventDefault();
    //post request
    axios.post('https://afternoon-stream-01263.herokuapp.com/message', { user, message })
      .then(res => {
        this.getMessages();
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err));

  }


  render() {
    // console.log(this.state.data);
    return (
      <div id='mBoard'>
        <form onSubmit={this.handleSubmit}>
        <label>
            User:
            <textarea value={this.state.value} onChange={this.handleChange} placeholder="What's ya name? Tony!" />
          </label>
          <label>
            Say funny stuff:
            <textarea value={this.state.value} onChange={this.handleChange} placeholder="Don't submit if it's bad." />
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