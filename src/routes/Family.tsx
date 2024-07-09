import HeroGraphic from "../components/HeroGraphic";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";
import useNavBar from "../components/hooks/useNavBar";
import FamilyLawCardPhoto from "../assets/family-law-card-photo.jpg"
import { mdiHumanMaleFemaleChild } from '@mdi/js';
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Family(){
    const { showMenu, handleMenuShow, handleMenuHide } = useNavBar();
    return(

        <>

            <NavBar
                showMenu={showMenu}
                menuShowHandler={handleMenuShow}
                menuHideHandler={handleMenuHide}
                selectedRoute="/"
            />

            <HeroGraphic
                imageSource={FamilyLawCardPhoto}
                graphicText=" Family Law"
                iconPath={mdiHumanMaleFemaleChild}
            />


            <Container>

                <Row>
                    <h1 className="text-primary">Family Matters Lawyer in Winnipeg, Manitoba</h1>
                    <hr/>
                </Row>

                <Row className="mb-4">
                    <Col xl={8}>
                        <p>
                        Welcome to our Family Law page, your go-to guide for understanding the ins and outs of legal issues affecting families. Our dedicated team focuses on offering practical advice and support on matters such as divorce, child custody, adoption, domestic partnerships, and disputes. Whether you're facing a separation, planning to adopt, or dealing with custody issues, we're here to ensure your family matters are handled with care, clarity, and legal expertise. Discover how we can help protect your family's interests today.
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
                                    What is family law?
                                </Accordion.Header>
                                
                                <Accordion.Body>
                                Family Law is the area of legal practice that deals with issues concerning families and relationships. It covers a wide range of matters such as divorce, child custody, adoption, domestic violence, property division, and support payments. Family law attorneys help people navigate these sensitive issues by providing legal advice, representing clients in court proceedings, and assisting with negotiations to reach fair resolutions. The goal of family law is to protect the rights and well-being of individuals within a family unit while resolving disputes in a just and equitable manner.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    What should I do if I'm considering divorce?
                                </Accordion.Header>
                                
                                <Accordion.Body>
                                    <p>If you're thinking about divorce, it's wise to consult with a family law attorney who can explain your rights, help you understand the process, and guide you through decisions regarding property, children, and support.</p>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    What is mediation in family law?
                                </Accordion.Header>
                                
                                <Accordion.Body>
                                Mediation is a voluntary process where a neutral third party (the mediator) helps disputing parties reach a mutually acceptable agreement. It can be used for resolving issues such as custody, visitation, and division of property outside of court.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    What is alimony and how is it determined?
                                </Accordion.Header>
                                
                                <Accordion.Body>
                                    <p>
                                        Alimony, also known as spousal support, is financial support paid by one spouse to the other after divorce. The amount and duration of alimony depend on factors such as the length of the marriage, each spouse's income, and financial needs.
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    How can I protect my assets during a divorce?
                                </Accordion.Header>
                                
                                <Accordion.Body>
                                To protect your assets during divorce, consider gathering documentation of all assets and debts, including bank statements, tax returns, and property deeds. Consulting with a family law attorney early in the process can help you understand your rights and options.
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