import Icon from "@mdi/react";
import { Card, Col, Container, Row } from "react-bootstrap";

interface CorevaluesCardProps {
    iconPath: string;
    heading: string;
    body: string[];
}

export default function CoreValuesCard(props: CorevaluesCardProps) {
    return (
        <Card className='shadow h-100 p-1'>

        <Container>
            <Row className='d-flex justify-content-center'>
                <Col className='col-12 text-center'>
                <Icon path={props.iconPath} size={4}/>
                <hr/>
                </Col>
            </Row>

            <Row>
                <Col>
                <h3 className='text-primary text-center'>{props.heading}</h3>

                {props.body.map(paragraph => (
                    <p>{paragraph}</p>
                ))}
                </Col>
            </Row>
        </Container>
        
    </Card>
    )
}