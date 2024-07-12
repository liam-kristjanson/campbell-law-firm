import { mdiGavel, mdiHandshake, mdiScaleBalance } from '@mdi/js';

import NavBar from '../components/NavBar';
import useNavBar from '../components/hooks/useNavBar';

import HeroGraphic from '../components/HeroGraphic';

import { Col, Container, Row } from 'react-bootstrap';
import CustomerReview from '../components/CustomerReview';

import BookHeader from "../assets/book-header-croppedV2.jpg";
import FamilyLawCardPhoto from "../assets/family-law-card-photoV2.jpg";
import RealEstateLawCardPhoto from "../assets/real-estate-card-photoV2.jpg";
import ImmigrationLawCardPhoto from "../assets/immigration-law-card-photoV2.jpg";
import NotaryCardPhoto from "../assets/notary-card-photo.jpg";
import Footer from "../components/Footer";
import ContactForm from '../components/ContactForm';
import PracticeAreaCard from '../components/PracticeAreaCard';
import CoreValuesCard from '../components/CoreValuesCard';

export default function Home() {
  const { showMenu, handleMenuShow, handleMenuHide } = useNavBar();
  const route = "/";

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
            <PracticeAreaCard
              photoSource={RealEstateLawCardPhoto}
              title='Real Estate Law'
              body="Whether you're buying, selling, or have any other questions related to real estate law, we're happy to help!"
              route="/practice-areas/real-estate-law"
            />
          </Col>

          <Col lg={6} xl={3} className='mb-4 grow-hover'>
            <PracticeAreaCard
                photoSource={FamilyLawCardPhoto}
                title='Family Law'
                body="Family can be complicated. Our team of family law experts will support you through any family law situation you may be in."
                route="/practice-areas/family-law"
              />
          </Col>

          <Col lg={6} xl={3} className='mb-4'>
            <PracticeAreaCard
              photoSource={ImmigrationLawCardPhoto}
              body="Our team of immigration lawyers will help pave the way towards student visas, residency, citezenship, or whatever your immigration goals may be."
              title="Immigration Law"
              route="/practice-areas/immigration-law"
            />
          </Col>

          <Col lg={6} xl={3} className='mb-4 grow-hover'>
            <PracticeAreaCard
              photoSource={NotaryCardPhoto}
              title="Notary Services"
              body="Need a notary? Look no further! Our professional notary services ensure your documents are legally binding. Our services are fast, reliable, and convenient."
              route="/practice-areas/notary-services"
            />
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
            <CoreValuesCard
              iconPath={mdiGavel}
              heading="Justice"
              body={["We believe in doing what is right. We value standing up for those in need, and using our legal skills to help those in need of assistance. With A.L Campbell Law Office, you are in good hands."]}
            />
          </Col>

          <Col lg={4} className='mb-4'>
            <CoreValuesCard
              iconPath={mdiScaleBalance}
              heading="Equality"
              body={["Believing in equality means recognizing and valuing the inherent dignity and worth of every individual, regardless of their background, identity, or circumstances. It involves advocating for fair treatment, opportunities, and rights for all people, fostering a society where everyone has the chance to thrive and contribute.", "Embracing equality is essential for building inclusive communities and a just world where diversity is celebrated and everyone can reach their full potential."]}
            />
          </Col>

          <Col lg={4} className='mb-4'>
            <CoreValuesCard
              iconPath={mdiHandshake}
              heading="Honesty"
              body={["Honesty fosters trust and integrity, creating strong, transparent relationships. It involves being truthful and sincere, even when it's challenging, and always valuing truth over deceit."]}
            />
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