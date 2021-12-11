import React, { Component } from 'react';
import axios from 'axios'


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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Write your joke sucka:
            <textarea value={this.state.value} onChange={this.handleChange} placeholder="I pity da foo who ain't funny" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.data && this.state.data.map(post => (
          <React.Fragment>
            <p>{`${post.user} ${post.message}`}</p>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default MessageBoard;