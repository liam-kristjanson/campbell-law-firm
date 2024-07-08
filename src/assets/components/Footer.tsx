import { Col, Container, Row } from "react-bootstrap";
import { VscLaw } from "react-icons/vsc";
import Icon from "@mdi/react";
import { mdiCellphoneBasic } from '@mdi/js';
import { mdiFax } from '@mdi/js';
import { mdiEmailFastOutline } from '@mdi/js';
import { mdiMapMarkerRadiusOutline } from '@mdi/js';
import { mdiCopyright } from '@mdi/js';

const myStyle={
    listStyleType:'none'}

export default function Footer() {


return(

<>
    <footer className=" justify-content-evenly align-items-center bg-primary text-light ps-3 ">
        <div className="d-flex  mx-auto justify-content-start position-relative mt-5">
            <h3 className=" pe-auto fw-bolder" role="button"> <VscLaw /> Campbell Law services</h3>
        </div>
        <Container>
            <Row >
                <Col>
                    <div className=" d-flex pe-auto text-sm-center mt-5">
                        <div>    
                            <p>Campbell Law firms is known for providing high – end solution either in legal or in consultancy services in order to meet the clients’ interests or to building a strong and long term relationship.</p>
                            <ul className=" link-underline-opacity-75-hover text-decoration-underline" style={myStyle} >
                                <li> <Icon path={mdiCellphoneBasic} size={1.3} /> 204-555-6666</li>
                                <li> <Icon path={mdiFax} size={1.3} /> 431-555-7878</li>
                                <li> <Icon path={mdiEmailFastOutline} size={1.3} className="text-end" />c@campbol.ca</li>
                            </ul>
                            <div> Address: <br />
                            <Icon path={mdiMapMarkerRadiusOutline} size={1} /> 4000 Middle of Nowhere avenue, R7A5Y9, Winnipeg, MB, Canada.   
                            </div> 
                        </div>
                    </div>
                </Col>

                <Col>

                    <div className="d-flex justify-content-evenly text-light mt-5">

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
                    </div>  
                </Col>


                <Col>

                    <div className="d-flex justify-content-evenly text-light mt-5">

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
                    </div>  
                </Col>

                <Col>

                    <div className="d-flex justify-content-evenly text-light mt-5">

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
                    </div>  
                </Col>
                    <hr />
                    <div className=" d-flex justify-content-center"> Copyright <Icon path={mdiCopyright} size={0.8} />  CAMPBELL LAW OFFICE. All Rights Reserved..</div>
            </Row>
        </Container>
    </footer>
</>
)
}