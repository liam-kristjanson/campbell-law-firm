import Icon from '@mdi/react';
import { mdiGavel, mdiHandshake, mdiScaleBalance } from '@mdi/js';

import NavBar from '../components/NavBar';
import useNavBar from '../components/hooks/useNavBar';

import HeroGraphic from '../components/HeroGraphic';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import CustomerReview from '../components/CustomerReview';

import BookHeader from "../assets/book-header-croppedV2.jpg";
import FamilyLawCardPhoto from "../assets/family-law-card-photoV2.jpg";
import RealEstateLawCardPhoto from "../assets/real-estate-card-photoV2.jpg";
import ImmigrationLawCardPhoto from "../assets/immigration-law-card-photoV2.jpg";
import NotaryCardPhoto from "../assets/notary-card-photo.jpg";
import Footer from "../components/Footer";
import ContactForm from '../components/ContactForm';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { showMenu, handleMenuShow, handleMenuHide } = useNavBar();
  const route = "/";
  
  const navigate = useNavigate();

  return (
    <>
      <NavBar
        showMenu={showMenu}
        menuHideHandler={handleMenuHide}
        menuShowHandler={handleMenuShow}
        selectedRoute={route}
      />

      <HeroGraphic
        graphicText=' A.L Campbell Law Office'
        iconPath={mdiScaleBalance}
        imageSource={BookHeader}
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

        <Row className="mb-5">
          <Col lg={6} xl={3} className='mb-4 grow-hover'>
            <Card className='shadow h-100'>
              <Card.Img variant='top' alt="Real Estate Law" src={RealEstateLawCardPhoto}/>

              {/* <Card.Header className='text-primary'>
                <h6 className='fw-bold'>Real Estate</h6>
              </Card.Header> */}

              <Card.Body>

                <Card.Title className='text-primary fw-bold'>
                  Real Estate Law
                </Card.Title>
                <p>
                  Whether you're buying, selling, or have any other questions related to real estate law, we're happy to help!
                </p>

                
              </Card.Body>

              <Card.Footer className="bg-white border-0">
                <Button onClick={() => {window.scrollTo(0,0); navigate('/practice-areas/real-estate-law')}}className='w-75 fw-bold' variant='primary'>Learn More</Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg={6} xl={3} className='mb-4 grow-hover'>
            <Card className='shadow h-100'>
              <Card.Img variant='top' alt="Family Law" src={FamilyLawCardPhoto}/>

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
              </Card.Body>

              <Card.Footer className="bg-white border-0">
                  <Button onClick={() => {window.scrollTo(0,0); navigate('/practice-areas/family-law')}}className='w-75 fw-bold' variant='primary'>Learn More</Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg={6} xl={3} className='mb-4'>
            <Card className='shadow h-100'>
              <Card.Img variant='top' alt="Immigration Law" src={ImmigrationLawCardPhoto}/>

              {/* <Card.Header className='text-primary'>
                <h6 className='fw-bold'>Real Estate</h6>
              </Card.Header> */}

              <Card.Body>

                <Card.Title className='text-primary fw-bold'>
                  Immigration Law
                </Card.Title>
                <p>
                  Our team of immigration lawyers will help pave the way towards student visas, residency, citezenship, or whatever your immigration goals may be. 
                </p>

              </Card.Body>

              <Card.Footer className="bg-white border-0">
                <Button onClick={() => {window.scrollTo(0,0); navigate('/practice-areas/immigration-law')}}className='w-75 fw-bold' variant='primary'>Learn More</Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg={6} xl={3} className='mb-4 grow-hover'>
            <Card className='shadow h-100'>
              <Card.Img variant='top' alt="Notary Services" src={NotaryCardPhoto}/>

              {/* <Card.Header className='text-primary'>
                <h6 className='fw-bold'>Real Estate</h6>
              </Card.Header> */}

              <Card.Body>

                <Card.Title className='text-primary fw-bold'>
                  Notary Services
                </Card.Title>
                <p>
                  Need a notary? Look no further! Our professional notary services ensure your documents are legally binding. Our services are fast, reliable, and convenient.
                </p>

                
              </Card.Body>

              <Card.Footer className='bg-white border-0'>
                <Button onClick={() => {window.scrollTo(0,0); navigate('/practice-areas/notary-services')}}className='w-75 fw-bold' variant='primary'>Learn More</Button>
              </Card.Footer>
            </Card>
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
            <Card className='shadow h-100 p-1'>

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
            <Card className='shadow h-100 p-1'>

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
            <Card className='shadow h-100 p-1'>

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
          <h1 className='text-primary'>Customer Testimonials</h1>
          <hr/>
        </Row>

        <Row className="mb-5">
          <Col xxl={3} md={6} className="mb-3">
            <CustomerReview
              customerName='John Doe'
              reviewContent="Ms. Campbell was so helpful in my immigration case. Thanks to her I am now living the Canadian dream! I would highly recommend A.L Campbell law office for anyone seeking expertise in Canadian immigration law."
            />
          </Col>

          <Col xxl={3} md={6} className="mb-3">
            <CustomerReview
              customerName='Jane Roe'
              reviewContent="Working with Ms. Campbell for my family law case was a truly positive experience. Their expertise, compassion, and dedication made a stressful situation much more manageable. They were always available to answer questions and provide support. I highly recommend A.L. Campbell Law Office for anyone in need of family law services."
            />
          </Col>

          <Col xxl={3} md={6} className="mb-3">
            <CustomerReview
              customerName='Adam Appleseed'
              reviewContent="I had a fantastic experience working with Ms. Campbell for my real estate transaction. They were incredibly knowledgeable, detail-oriented, and responsive. They made the entire process seamless and stress-free. I highly recommend A.L Campbell Law Office for anyone needing expert real estate legal services."
            />
          </Col>

          <Col xxl={3} md={6} className="mb-3">
            <CustomerReview
              customerName='Eve Eden'
              reviewContent="Ms. Campbell is exceptional in immigration law. They guided me through the complex process with patience and clarity. Their thorough knowledge and genuine care for my case led to a successful outcome. I am grateful for their support and highly recommend A.L Campbell Law Office for anyone facing immigration challenges."
            />
          </Col>
        </Row>

        <Row>
          <h1 className='text-primary'>
            Get in Touch
          </h1>
          <hr/>
        </Row>

        <Row>
          <Col xl={8}>
            <p>
              Have any questions? Feel free to reach out to us using the form below, and one of our team members will reach out to you to arrange a no-obilgation consultation.
            </p>
          </Col>
        </Row>

        <Row className='mb-5'>
          <Col>
            <ContactForm/>
          </Col>
        </Row>
      </Container>

      <Footer/>
    </>
  )
}