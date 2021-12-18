//import React, { Component } from 'react';
import React from 'react';
import axios from 'axios'


class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
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
    // here show me the API correct like this
    // 0:{id:1, name:"categorie one"}
    // 1:{id:11, name:"categorie four"}
    // 2:{id:19, name:"categorie five"}
    // 3:{id:16, name:"categorie six"}
    this.getMessages();
  }

  handleSubmit(event) {
    const message = this.state.joke;
    const user = this.state.user;
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name='user' type="text" value={this.state.user} onChange={this.handleChange} />
          </label>
          <label>
            Write your joke sucka:
            <textarea name='joke' value={this.state.joke} onChange={this.handleChange} placeholder="I pity da foo who ain't funny" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.data && this.state.data.map((post, index) => (
          <React.Fragment key={index}>
            <p>{`${post.user} ${post.message}`}</p>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default MessageBoard;