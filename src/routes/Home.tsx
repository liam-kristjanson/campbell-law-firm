import 'bootstrap/dist/css/bootstrap.min.css';

import Icon from '@mdi/react';
import { mdiGavel, mdiHandshake, mdiScaleBalance } from '@mdi/js';

import NavBar from '../components/NavBar';
import useNavBar from '../components/hooks/useNavBar';

import HeroGraphic from '../components/HeroGraphic';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';

export default function Home() {
  const {showMenu, handleMenuShow, handleMenuHide} = useNavBar();

  return (
    <>
      <NavBar
        showMenu={showMenu}
        menuHideHandler={handleMenuHide}
        menuShowHandler={handleMenuShow}
      />

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
            <Card className='shadow h-100'>

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
            <Card className='shadow h-100'>

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
                      Believing in equality means recognizing and valuing the inherent dignity and worth of every individual, regardless of their background, identity, or circumstances. 
                      It involves advocating for fair treatment, opportunities, and rights for all people, fostering a society where everyone has the chance to thrive and contribute.
                    </p>

                    <p>
                      Embracing equality is essential for building inclusive communities and a just world where diversity is celebrated and everyone can reach their full potential.
                    </p>
                  </Col>
                </Row>
              </Container>
                
            </Card>
          </Col>

          <Col lg={4} className='mb-4 grow-hover'>
            <Card className='shadow h-100'>

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
                    Honesty fosters trust and integrity, creating strong, transparent relationships. It involves being truthful and sincere, even when it's challenging, and always valuing truth over deceit.
                    </p>
                  </Col>
                </Row>
              </Container>
                
            </Card>
          </Col>
        </Row>

        <Row>
          <h1 className='text-primary'>Areas of practice</h1>
          <hr/>
        </Row>

        <Row className='mb-4'>
          <Col lg={8}>
            <p>
              We are happy to offer our legal services in any of the following areas. Click on any of the cards to learn more about
              our team, the services we offer, and some frequently asked questions related to the legal field
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={4} className='mb-4 grow-hover'>
            <Card className='shadow'>
              <Card.Img variant='top' src='real-estate-card-photo.jpg'/>

              {/* <Card.Header className='text-primary'>
                <h6 className='fw-bold'>Real Estate</h6>
              </Card.Header> */}

              <Card.Body>

                <Card.Title className='text-primary fw-bold'>
                  Real Estate
                </Card.Title>
                <p>
                  Whether you're buying, selling, or have any other questions related to real estate law, we're happy to help!
                </p>

                <Button className='w-50 fw-bold' variant='primary'>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className='mb-4 grow-hover'>
            <Card className='shadow'>
              <Card.Img variant='top' src='family-law-card-photo.jpg'/>

              {/* <Card.Header className='text-primary'>
                <h6 className='fw-bold'>Real Estate</h6>
              </Card.Header> */}

              <Card.Body>

                <Card.Title className='text-primary fw-bold'>
                  Family Law
                </Card.Title>
                <p>
                  Family can be complicated. Our team of family law experts will support you through any family law situation you may be in.
                </p>

                <Button className='w-50 fw-bold' variant='primary'>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className='mb-4'>
            <Card className='shadow'>
              <Card.Img variant='top' src='immigration-law-card-photo.jpg'/>

              {/* <Card.Header className='text-primary'>
                <h6 className='fw-bold'>Real Estate</h6>
              </Card.Header> */}

              <Card.Body>

                <Card.Title className='text-primary fw-bold'>
                  Immigration Law
                </Card.Title>
                <p>
                  Whether you're buying, selling, or have any other questions related to real estate law, we're happy to help!
                </p>

                <Button className='w-50 fw-bold' variant='primary'>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        </>
    )
}