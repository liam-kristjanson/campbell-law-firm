import { mdiGavel, mdiHandshake, mdiScaleBalance } from '@mdi/js';
import HeroGraphic from './components/HeroGraphic'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Icon from '@mdi/react';

function App() {
  

  return (
    <>
      <HeroGraphic
        graphicText=' A.L Campbell Law Office'
        iconPath={mdiScaleBalance}
        imageSource='book-header-cropped.jpg'
      />

      
      <Container>
        <Row>
          <Col>
            <h1 className='text-primary'>Welcome to A.L Campbell Law Office</h1>
            <hr/>
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col xl={8}>
            <p>
              Your legal needs are our top priority.
              With a commitment to excellence and a passion for justice, we provide comprehensive legal services to individuals, families, and businesses.
              Our team of experienced attorneys is dedicated to delivering personalized solutions, tailored to meet the unique challenges and goals of each client.
            </p>

            <p>
              Whether you are facing a complex legal dispute, require assistance with a business transaction, or need guidance on personal matters, we are here to offer expert advice and steadfast support. 
              At A.L Campbell Law Office, we strive to achieve the best possible outcomes, ensuring that your rights and interests are protected every step of the way. Contact us today to schedule a consultation and learn how we can assist you with your legal needs.
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <h1 className='text-primary'>What we stand for</h1>
            <hr/>
          </Col>
        </Row>

        <Row className='mb-5'>
          <Col lg={4} className='mb-4'>
            <Card className="shadow h-100">

              <Container>
                <Row className='d-flex justify-content-center'>
                  <Col className='col-12 text-center'>
                    <Icon path={mdiGavel} size={4}/>
                    <hr/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h3 className='text-primary text-center'>Justice</h3>

                    <p>
                      We believe in doing what is right. We value standing up for
                      those in need, and using our legal skills to help those in need of assistance.
                      With A.L Campbell Law Office, you are in good hands.
                    </p>
                  </Col>
                </Row>
              </Container>
                
            </Card>
          </Col>

          <Col lg={4} className='mb-4'>
            <Card className="shadow h-100">

              <Container>
                <Row className='d-flex justify-content-center'>
                  <Col className='col-12 text-center'>
                    <Icon path={mdiScaleBalance} size={4}/>
                    <hr/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h3 className='text-primary text-center'>Equality</h3>

                    <p>
                      We believe in doing what is right. We value standing up for
                      those in need, and using our legal skills to help those in need of assistance.
                      With A.L Campbell Law Office, you are in good hands.
                    </p>

                    <p>
                      We believe in doing what is right. We value standing up for
                      those in need, and using our legal skills to help those in need of assistance.
                      With A.L Campbell Law Office, you are in good hands.
                    </p>
                  </Col>
                </Row>
              </Container>
                
            </Card>
          </Col>

          <Col lg={4} className='mb-4'>
            <Card className="shadow h-100">

              <Container>
                <Row className='d-flex justify-content-center'>
                  <Col className='col-12 text-center'>
                    <Icon path={mdiHandshake} size={4}/>
                    <hr/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h3 className='text-primary text-center'>Honesty</h3>

                    <p>
                      We believe in doing what is right. We value standing up for
                      those in need, and using our legal skills to help those in need of assistance.
                      With A.L Campbell Law Office, you are in good hands.
                    </p>
                  </Col>
                </Row>
              </Container>
                
            </Card>
          </Col>
        </Row>

        <Row>
          <h1 className="text-primary">Areas of practice</h1>
          <hr/>
        </Row>

        <Row>
          <Col lg={8}>
            <p>
              We are happy to offer our legal services in any of the following areas. Click on any of the cards to learn more about
              our team, the services we offer, and some frequently asked questions related to the legal field
            </p>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default App
