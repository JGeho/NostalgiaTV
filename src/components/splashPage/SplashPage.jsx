import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
//took out Carousel from above list
import standup1 from './standup1.png'

export default function Landingpage() {
  return (
    <div>
        <Container id="rightCont">
        <Row>
          <Col>
            <h1>LaffBoxTV</h1>
            </Col>
          </Row>
          
        <Col id='midCol'>
            <img src={standup1} alt="standup pic"/>
        </Col>
        <Col>
          <Row>
            <form
              method="GET"
              action="https://afternoon-stream-01263.herokuapp.com/auth/google">
              <button class="btn btn-danger">
                <span class="fa fa-google"></span> Sign-in With Google
              </button>
            </form>
          </Row>
        </Col>
        </Container>
    </div>
  );
}