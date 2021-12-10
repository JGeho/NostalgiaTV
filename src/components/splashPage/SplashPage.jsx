import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Message from '../home/Message';

export default function Landingpage() {
  return (
    <Container id='landingPage'>
      <Row>
        <Col className='leftCol'><a href="">
          Left Side<br />
          <img src="" height='' width='' /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sit aliquid doloribus suscipit deserunt impedit soluta laborum! Laudantium voluptate, fugiat nostrum sunt quas assumenda expedita veritatis atque voluptatem architecto ullam!
        </a>
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