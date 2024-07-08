import { mdiStar } from "@mdi/js"
import Icon from "@mdi/react"
import { Card, Container, Row, Col } from "react-bootstrap"

export default function CustomerReview() {
    return (
        <Card className="shadow">
            <Card.Body>
                <Container>
                    <Row className="d-flex justify-content-between px-3 mb-2">
                    <Icon path={mdiStar} color="gold" size={2}/>
                    <Icon path={mdiStar} color="gold" size={2}/>
                    <Icon path={mdiStar} color="gold" size={2}/>
                    <Icon path={mdiStar} color="gold" size={2}/>
                    <Icon path={mdiStar} color="gold" size={2}/>
                    </Row>

                    <Row>
                    <Col>
                        <p className="fst-italic">
                        "Ms. Campbell was so helpful in my immigration case. Thanks to her I am now living the Canadian dream!
                        I would highly recommend A.L Campbell law office for anyone seeking expertise in Canadian immigration law."
                        </p>

                        {/* <hr/>
                        <p className='text-center fs-1 fw-bolder text-primary' style={{fontFamily: "serif"}}>
                        "
                        </p> */}

                        <p className='text-primary text-end fs-3 fw-bold'>- John Doe</p>
                    </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}