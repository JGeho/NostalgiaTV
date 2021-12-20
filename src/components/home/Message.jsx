import React from 'react';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import '../../styles/message.css';

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
      <div className='message-board-container' >
        <Container className='pt-3'>
          <h2>Funny Board</h2>
          <Form onSubmit={this.handleSubmit} className='form' style={{ width: '40rem' }}>
            <Form.Group className="pb-3 lg" controlId="exampleForm.ControlTextarea1">
              <Form.Control as='textarea' name='joke' value={this.state.joke} onChange={this.handleChange} placeholder=" What made you laugh today?" />
              <div className='d-flex justify-content-end'>
                <Button className='mt-3 px-4' variant="dark" as="input" type="submit" value="Post" />
              </div>
            </Form.Group>
          </Form>
        </Container>
        <Container className='bg-transparent py-3' style={{ overflow: 'auto', height: '100%' }}>
          {this.state.data && this.state.data.slice(0).reverse().map((post, index) => (
            <React.Fragment key={index}>
              <Card className='card mb-4' style={{ width: '40rem' }}>
                <Card.Header as="h5">{`${post.user} posted:`}</Card.Header>
                <Card.Body className='bg-white'>
                  <Card.Text>
                    {post.message}
                  </Card.Text>
                </Card.Body>
              </Card>
            </React.Fragment>
          ))}
        </Container>
      </div>
    );
  }
}

export default MessageBoard;