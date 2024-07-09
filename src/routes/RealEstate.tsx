import HeroGraphic from "../components/HeroGraphic";
import RealEstatePageHeader from "../assets/real-estate-header-photo.jpg";
import { mdiHome } from "@mdi/js";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";
import useNavBar from "../components/hooks/useNavBar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function RealEstate() {
    
    const { showMenu, handleMenuShow, handleMenuHide } = useNavBar();
    
    return (
        <>
            <NavBar
                showMenu={showMenu}
                menuShowHandler={handleMenuShow}
                menuHideHandler={handleMenuHide}
                selectedRoute="/practice-areas/real-estate-law"
            />

            <HeroGraphic
                imageSource={RealEstatePageHeader}
                graphicText=" Real Estate Law"
                iconPath={mdiHome}
            />

            <Container>
                <Row>
                    <h1 className="text-primary">Real Estate Lawyer in Winnipeg, Manitoba</h1>
                    <hr/>
                </Row>

                <Row className="mb-4">
                    <Col xl={8}>
                        <p>
                            Welcome to our Real Estate Law page, your comprehensive resource for navigating the complexities of property transactions and legal issues. Our experienced team specializes in providing expert advice and representation on matters such as property purchases, sales, leases, zoning regulations, and disputes. Whether you're a buyer, seller, landlord, or tenant, we are committed to ensuring your real estate dealings are smooth, secure, and legally sound. Explore our services to safeguard your property interests today.
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
                                What is real estate law?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                                Real estate law, also known as property law, governs the various facets of property ownership and tenancy in real estate (land and buildings). It includes regulations on buying, selling, using, and leasing land and properties, as well as landlord-tenant issues, zoning, and land use.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                What should I know before buying a property?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                                <p>Before buying a property, you should:</p>

                                <ul className="d-flex flex-column gap-2">
                                <li>Conduct thorough due diligence, including property inspections.</li>
                                <li>Verify the title and ownership.</li>
                                <li>Understand zoning laws and restrictions.</li>
                                <li>Review any existing liens or encumbrances.</li>
                                <li>Familiarize yourself with property taxes and homeowner association (HOA) rules (if applicable).</li>
                                <li>Ensure the sale contract covers all necessary terms and conditions.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                What are zoning laws?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                            Zoning laws are regulations established by local governments that dictate how properties within certain areas can be used. They separate residential, commercial, industrial, and agricultural areas and may impose restrictions on building heights, lot sizes, and the types of structures allowed.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                What should I do if I have a dispute with my landlord?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                            <p>
                                If you have a dispute with your landlord, you should:
                            </p>

                            <ul>
                                <li>Review your lease agreement for terms related to the dispute.</li>
                                <li>Communicate your concerns clearly and in writing to your landlord.</li>
                                <li>Keep records of all communications and relevant documents.</li>
                                <li>Seek mediation or arbitration if informal resolution fails.</li>
                                <li>Consult a real estate attorney for legal advice if necessary.</li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                What is an easement?
                            </Accordion.Header>
                            
                            <Accordion.Body>
                                An easement is a legal right to use another person's land for a specific purpose. Common easements include utility easements (for power lines or water pipes) and access easements (to allow passage to another property).
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