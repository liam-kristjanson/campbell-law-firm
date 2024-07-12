import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface PracticeAreaCardProps {
    photoSource: string,
    title: string,
    body: string,
    route: string
}

export default function PracticeAreaCard(props: PracticeAreaCardProps) {
    const navigate = useNavigate();

    return (
        <Card className='shadow h-100'>
            <Card.Img variant='top' alt={props.title} src={props.photoSource}/>

            <Card.Body>

            <Card.Title className='text-primary fw-bold'>
                {props.title}
            </Card.Title>
            <p>
                {props.body}
            </p>

            
            </Card.Body>

            <Card.Footer className="bg-white border-0">
            <Button onClick={() => {window.scrollTo(0,0); navigate(props.route)}}className='w-75 fw-bold' variant='primary'>Learn More</Button>
            </Card.Footer>
        </Card>
    )
}