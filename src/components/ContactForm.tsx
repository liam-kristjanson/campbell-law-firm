import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import { Card, Form } from 'react-bootstrap';

export default function ContactForm() {
    const [mailtoHref, setMailtoHref] = useState<string>("");
    const [customerName, setCustomerName] = useState<string>("");
    const [customerMessage, setCustomerMessage] = useState<string>("");

    const contactEmail = "example@email.com";

    function handleCustomerNameChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const newCustomerName = e.target.value;

        setCustomerName(newCustomerName);

        setMailtoHref(encodeURI(
        "mailto:" + contactEmail
        + "?subject=" + newCustomerName + " - Customer Inquiry"
        + "&body=" + customerMessage
        ));
    }

    function handleCustomerMessageChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const newCustomerMessage = e.target.value;

        setCustomerMessage(newCustomerMessage);

        setMailtoHref(encodeURI(
        "mailto:" + contactEmail
        + "?subject=" + customerName + " - Customer Inquiry"
        + "&body=" + newCustomerMessage
        ));
    }

    return (
        <Card className='shadow'>

            <Card.Header>
            Contact Information
            </Card.Header>

            <Card.Body>
            <Form>
                <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => {handleCustomerNameChange(e)}}type='text' name='name' placeholder='Enter your name'></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control onChange={(e) => {handleCustomerMessageChange(e)}} as='textarea' name='message' placeholder='Enter your message to us' rows={8} cols={30}/>
                </Form.Group>

                <a className="btn btn-primary w-100 fw-bold btn-lg" href={mailtoHref}>Submit</a>
            </Form>
            </Card.Body>
        </Card>
    )
}