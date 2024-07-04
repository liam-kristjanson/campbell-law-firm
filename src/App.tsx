import { mdiScaleBalance } from '@mdi/js';
import HeroGraphic from './components/HeroGraphic'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  

  return (
    <>
      <HeroGraphic
        graphicText=' Campbell Law Firm'
        iconPath={mdiScaleBalance}
        imageSource='book-header-cropped.jpg'
      />

      
      <Container>
        <Row>
          <Col>
            <h1 className='text-primary'>Welcome to Campbell Law Firm</h1>
            <hr/>
            
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default App
