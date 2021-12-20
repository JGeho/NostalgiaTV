import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import standup1 from './standup1.png'

export default function Landingpage() {
  return (
    <div>
      <Container className='m-auto' id="rightCont">
        <Row>
          <Col>
            <h1>LaffBoxTV</h1>
          </Col>
        </Row>
        <Col id='midCol'>
          <img src={standup1} alt="standup pic" id='midCol' />
        </Col>
        <Row>
          <form
            method="GET"
            action="https://afternoon-stream-01263.herokuapp.com/auth/google">
            {/* action="http://localhost:3001/auth/google"> */}
            <button className="btn btn-danger">
              <span className="fa fa-google"></span> Sign-in With Google
            </button>
          </form>
        </Row>
        <Row>
          <h5>
            Sign in. Find jokes. Tell Jokes.<br />
            It only hurts if it's funny.
          </h5>
        </Row>
      </Container>
      <Container fixed='bottom' id='splashFoot'>
        LaffBoxTV was just an idea dreamed up by a couple kids who like to laugh.<br /> Find out
        more about us <a href='/About'>here</a>. Or Don't. We're still gonna laugh ¯\_(ツ)_/¯
      </Container>
      {console.log('No errors here but maybe check our portfolios?')}
      {console.log('https://e-fricke.github.io')}
      {console.log('https://gabriellopez.netlify.app/')}
      {console.log('https://www.justingeho.com')}
    </div>
  );
}