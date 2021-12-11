import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Message from '../home/Message';

export default function Landingpage() {
  return (
    <Container id='landingPage'>
      <Row>
        <Col className='leftCol'>
          <div class="container">
            <div class="jumbotron text-center text-primary">
              <p>Login or Register with:</p>
              <form method="GET" action="https://afternoon-stream-01263.herokuapp.com/auth/google">
                <button class="btn btn-danger"><span class="fa fa-google"></span> SignIn with Google</button>
              </form>
            </div>
          </div>
        </Col>
        <Col className='rightCol'>
          Right Side<br />
          <img src='' height='' width='' /><br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, vero vel! Saepe harum provident velit debitis minus non, eos et ipsum eligendi, natus mollitia eum aspernatur corrupti rem, quibusdam quasi.
        </Col>
        <Message />
      </Row>
    </Container>
  );
}