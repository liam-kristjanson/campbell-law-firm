import { mdiStar } from "@mdi/js"
import Icon from "@mdi/react"
import { Card, Container, Row, Col } from "react-bootstrap"

interface CustomerReviewProps {
    reviewContent: string;
    customerName: string;
}

export default function CustomerReview(props: CustomerReviewProps) {
    return (
        <Card className="shadow h-100">
            <Card.Body>
                <Container>
                    <Row className="d-flex justify-content-around px-3 mb-2">
                    <Icon path={mdiStar} color="gold" size={2} className="p-0"/>
                    <Icon path={mdiStar} color="gold" size={2} className="p-0"/>
                    <Icon path={mdiStar} color="gold" size={2} className="p-0"/>
                    <Icon path={mdiStar} color="gold" size={2} className="p-0"/>
                    <Icon path={mdiStar} color="gold" size={2} className="p-0"/>
                    </Row>

                    <Row>
                    <Col>
                        <p className="fst-italic">
                            "{props.reviewContent}"
                        </p>

                        {/* <hr/>
                        <p className='text-center fs-1 fw-bolder text-primary' style={{fontFamily: "serif"}}>
                        "
                        </p> */}

                        
                    </Col>
                    </Row>
                </Container>
            </Card.Body>

            <Card.Footer className="bg-white">
                <p className='text-primary text-end fs-3 fw-bold'>- {props.customerName}</p>
            </Card.Footer>
        </Card>
    )
}