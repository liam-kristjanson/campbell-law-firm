import { Col, Row } from "react-bootstrap";
import { VscLaw } from "react-icons/vsc";
import Icon from "@mdi/react";
import { mdiCellphoneBasic } from '@mdi/js';
import { mdiFax } from '@mdi/js';
import { mdiEmailFastOutline } from '@mdi/js';
import { mdiMapMarkerRadiusOutline } from '@mdi/js';
import { useNavigate } from "react-router-dom";

const myStyle={
    listStyleType:'none'
}

export default function Footer() {

const navigate = useNavigate()


return(
    <footer className="bg-primary text-light p-0 m-0 container-fluid">
        
        {/* <Container className="w-100 p-0 m-0"> */}
            <Row className="p-3">
                    <h3 className="text-decoration-underline" role="button"> <VscLaw />A.L Campbell Law Office</h3>
            </Row>

            <Row className="p-3">
                <Col lg={3} md={4}>
                            {/* <p>Campbell Law firms is known for providing high – end solution either in legal or in consultancy services in order to meet the clients’ interests or to building a strong and long term relationship.</p> */}

                    <h5>Info</h5>
                    <ul style={myStyle} className="d-flex flex-column align-items-start ps-0">
                        <li> <Icon path={mdiCellphoneBasic} size={1.3} /> 204-291-6312</li>
                        <li> <Icon path={mdiFax} size={1.3} /> 204-817-3430</li>
                        <li> <Icon path={mdiEmailFastOutline} size={1.3}/> campbell@example.com</li> 
                        <li><Icon path={mdiMapMarkerRadiusOutline} size={1.3} /> 2-430 River Avenue, Winnipeg, MB R3L 0C6</li>
                    </ul>
                </Col>

                <Col lg={3} md={4}>
                    <h5>Quick Links</h5>

                    <ul className="d-flex flex-column gap-3 fw-bold text-decoration-underline">
                        <li role="button" onClick={() => {navigate("/"); window.scrollTo(0,0)}}>Home</li>
                        <li role="button" onClick={() => {navigate("/about-us"); window.scrollTo(0,0)}}>About Us</li>
                        <li role="button" onClick={() => {navigate("/contact"); window.scrollTo(0,0)}}>Contact</li>
                    </ul>
                    
                    {/* <div className="d-flex justify-content-evenly text-light mt-5">

                        <div>
                            <h5 className=" justify-content-center fw-medium align-items-center"><p><u>QUICK LOOKS</u></p></h5>
                            <ul className=" link-underline-opacity-75-hover" style={myStyle}>
                                <li className="  fw-bold">
                                    -Home            
                                </li> <br />

                                <li className="  fw-bold">
                                    -About Company 
                                </li> <br />

                                <li className="  fw-bold">
                                    -Contact <br />
                                </li>
                            </ul>   
                        </div>
                    </div>   */}
                </Col>


                <Col lg={3} md={4}>

                <h5>Areas of Practice</h5>

                    <ul className="d-flex flex-column gap-3 fw-bold text-decoration-underline">
                        <li role="button" onClick={() => {navigate("/practice-areas/real-estate-law"); window.scrollTo(0,0)}}>Real Estate Law</li>
                        <li role="button" onClick={() => {navigate("/practice-areas/family-law"); window.scrollTo(0,0)}}>Family Law</li>
                        <li role="button" onClick={() => {navigate("/practice-areas/immigration-law"); window.scrollTo(0,0)}}>Immigration Law</li>
                    </ul>

                    {/* <div className="d-flex justify-content-evenly text-light mt-5">

                        <div>
                            <h5 className=" justify-content-center fw-medium align-items-center"><p><u>PRACTICE AREAS</u></p></h5>
                            <ul className=" link-underline-opacity-75-hover" style={myStyle}>
                                <li className="  fw-bold">
                                    -Real Estates            
                                </li> <br />

                                <li className="  fw-bold">
                                    -Family Law 
                                </li> <br />

                                <li className="  fw-bold">
                                    -Immigration Law <br />
                                </li>
                            </ul>   

                        </div>
                    </div>   */}
                </Col>

                <Col lg={3} md={12}>

                    <h5>Hours of Operation</h5>

                    <p>Monday - Friday: 9AM - 9PM</p>
                    <hr/>

                    <p>Weekends and Holidays: Closed</p>
                    <hr className="d-none d-lg-block"/>

                    {/* <div className="d-flex justify-content-evenly text-light mt-5">

                        <div>
                            <h5 className=" justify-content-center fw-medium align-items-center"><p><u>WORKING HOURS</u></p></h5>
                            <ul className=" link-underline-opacity-75-hover" style={myStyle}>
                                <li className="  fw-bold">
                                    Mon to Fri: 9AM TO 9PM           
                                </li> <hr /> <br />

                                <li className="  fw-bold">
                                    Weekends: Closed 
                                </li> <hr /> <br />
                            </ul>   

                        </div>
                    </div>   */}
                </Col>
                    <hr />
                    <div className=" d-flex justify-content-center"> Copyright {'\u00A9'} 2024 A.L. Campbell Law Office, All Rights Reserved.</div>
            </Row>
        {/* </Container> */}
    </footer>
)
}