import { Accordion, Col, Container, Row } from "react-bootstrap";

import HeroGraphic from "../components/HeroGraphic";
import ImmigrationPageHeader from "../assets/immigration-page-headerV2.jpg";
import { mdiPassport } from "@mdi/js";

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
                selectedRoute="/practice-areas/immigration-law"
            />

            <HeroGraphic
                imageSource={ImmigrationPageHeader}
                graphicText=" Immigration Law"
                iconPath={mdiPassport}
            />

            <Container>
                <Row>
                    <h1 className="text-primary">Immigration Lawyer in Canada</h1>
                    <hr/>
                </Row>

                <Row className="mb-4">
                    <Col xl={8}>
                        <p>
                            Welcome to our Immigration Law page, your trusted resource for understanding and managing the complexities of immigration. Our skilled team offers expert guidance and representation in areas such as visa applications, permanent residency, citizenship, deportation defense, and asylum claims. Whether you're an individual aiming to relocate, a family seeking reunification, or an employer requiring visa assistance for employees, we are committed to making your immigration process seamless, secure, and compliant with legal standards. Discover our services and let us support your immigration journey with confidence and clarity.
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
                                What are the main pathways to immigrate to Canada?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                                <p>There are many pathways of immigration to Canada, including:</p>

                                <ul className="d-flex flex-column gap-2">
                                    <li>Express Entry: For skilled workers.</li>
                                    <li>Family Sponsorship: For relatives of Canadian citizens or permanent residents.</li>
                                    <li>Provincial Nominee Programs (PNPs): For individuals nominated by a Canadian province or territory.</li>
                                    <li>Quebec-selected Skilled Workers: For those selected by the province of Quebec.</li>
                                    <li>Refugees and Asylum Seekers: For individuals needing protection from persecution.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                            How does the Express Entry system work?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                                The Express Entry system is an online application process used to manage applications for permanent residence under federal economic immigration programs. Candidates submit a profile and are ranked using a points-based system called the Comprehensive Ranking System (CRS). Those with the highest scores are invited to apply for permanent residence.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                What are the requirements for family sponsorship?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                                To sponsor a family member, you must be a Canadian citizen or permanent resident, at least 18 years old, and able to provide financial support to your sponsored relative. The sponsored person must also meet specific eligibility requirements. Common categories for family sponsorship include spouses, common-law partners, dependent children, and parents or grandparents.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                What should I do if my visa or immigration application is refused?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                                <p>If your visa or immigration application is refused, you should:</p>

                                <ul className="d-flex flex-column gap-2">
                                    <li>Review the refusal letter: Understand the reasons for the refusal.</li>
                                    <li>Appeal options: You may have the right to appeal the decision or request a judicial review.</li>
                                    <li>Reapply: Address the issues mentioned in the refusal letter and provide additional documentation if necessary.</li>
                                    <li>Consult an immigration lawyer: Seek legal advice to determine the best course of action.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                Can I work in Canada while my permanent residence application is being processed?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                                Yes, if you have a valid work permit, you can continue working in Canada while your permanent residence application is being processed. Additionally, you may be eligible for a bridging open work permit, which allows you to keep working if your current permit expires before a decision is made on your permanent residence application.
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