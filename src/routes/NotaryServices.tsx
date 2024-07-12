import { Accordion, Col, Container, Row } from "react-bootstrap";

import HeroGraphic from "../components/HeroGraphic";
import NotaryPageHeader from "../assets/notary-servcies-header.jpg";
import { mdiFileSign } from "@mdi/js";

import NavBar from "../components/NavBar";
import useNavBar from "../components/hooks/useNavBar";

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Immigration(){
    const { showMenu, handleMenuShow, handleMenuHide } = useNavBar();

    return (
        <>
            <NavBar
                showMenu={showMenu}
                menuShowHandler={handleMenuShow}
                menuHideHandler={handleMenuHide}
                selectedRoute="/practice-areas/notary-services"
            />

            <HeroGraphic
                imageSource={NotaryPageHeader}
                graphicText=" Notary Services"
                iconPath={mdiFileSign}
            />

            <Container>
                <Row>
                    <h1 className="text-primary">Notary Service in Manitoba</h1>
                    <hr/>
                </Row>

                <Row className="mb-4">
                    <Col xl={8}>
                        <p>
                        Welcome to our premier notary services, where your document authentication needs are our top priority. Our experienced and certified notaries are dedicated to providing fast, reliable, and convenient services tailored to your schedule. Whether you need affidavits, contracts, power of attorney, or any other document notarized, we ensure the process is seamless and efficient. We offer mobile services, bringing our expertise to your doorstep, saving you time and effort. Trust our professional team to handle your documents with the utmost care and confidentiality. Choose us for all your notary needs and experience unparalleled service. Contact us today!
                        </p>
                    </Col>
                </Row>

                <Row>
                    <h1 className="text-primary">Frequently Asked Questions</h1>
                    <hr/>
                </Row>

                <Row className="mb-5">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                What types of documents need notarization?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                                <p>
                                    Common documents requiring notarization include affidavits, power of attorney, wills, deeds, contracts, and loan documents.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                What do I need to bring to a notary appointment?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                                You should bring a valid, government-issued photo ID (such as a driver’s license or passport) and the documents you need notarized.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                What if a document is in a foreign language?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                                A notary can notarize a document in a foreign language if they are confident the signers understand the content. Some jurisdictions may have specific requirements, so it's advisable to check local laws.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                What happens if there are errors in the notarized document?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                                <p>
                                If there are errors, the document may need to be notarized again. Always review the document carefully before and after notarization to ensure accuracy.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>

                <Row className="mb-5">
                    <Col>
                        <h1 className="text-primary mb-2">Contact Us</h1>

                        <p>
                            Have any questions? Feel free to reach out to us using the form below, and one of our team members will reach out to you to arrange a no-obilgation consultation.
                        </p>

                        <ContactForm/>
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </>
    )
}