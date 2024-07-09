import Icon from '@mdi/react';
import { mdiFacebook, mdiFax, mdiHomeCity, mdiPhone, mdiPhoneClassic } from '@mdi/js';

import NavBar from '../components/NavBar';
import useNavBar from '../components/hooks/useNavBar';

import HeroGraphic from '../components/HeroGraphic';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Footer from '../components/Footer';

export default function Contact() {
    const {showMenu, handleMenuShow, handleMenuHide} = useNavBar();
    const route = "/contact";

    return (
        <>
            <NavBar
                showMenu={showMenu}
                menuHideHandler={handleMenuHide}
                menuShowHandler={handleMenuShow}
                selectedRoute={route}
            />

            <HeroGraphic
                    graphicText=' Contact Information'
                    iconPath={mdiPhoneClassic}
                    imageSource='telephone-headerV2.jpg'
                />

            <Container>
                <Row>
                    <Col>
                        <h1 className='text-primary'>We're Always Available!</h1>
                        <hr/>
                    </Col>
                </Row>

                <Row className='mb-4'>
                    <Col xl={8}>
                        <p>
                            If you have any questions or concerns, make sure to reach out to any of our
                            staff members using the following information.
                        </p>

                        <p><Icon path={mdiHomeCity} size={0.9}/> 2-430 River Avenue, Winnipeg, MB R3L 0C6</p>
                        <p><Icon path={mdiPhone} size={0.9}/> 204-291-6312</p>
                        <p><Icon path={mdiFax} size={0.9}/> 204-817-3430</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h1 className='text-primary'>We're On Social Media!</h1>
                        <hr/>
                    </Col>
                </Row>

                <Row className='mb-4'>
                    <Col xl={8}>
                        <p>
                            Connect with us on various social media platforms, and hear the testimonies
                            of the people A.L Campbell Law Office has helped!
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center mb-5">
                    <Col className="col-4 col-md-3 col-lg-2">
                        <Nav.Link className="link-primary d-flex align-items-center flex-column" href="#">
                            <Icon path={mdiFacebook} size={2}/>
                            <Container className="text-center">Facebook</Container>
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </>
    )
}