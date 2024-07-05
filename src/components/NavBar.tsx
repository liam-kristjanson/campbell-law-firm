import 'bootstrap/dist/css/bootstrap.min.css';

import Icon from '@mdi/react';
import { mdiMenu, mdiScaleBalance } from '@mdi/js';

import { Col, Container, Nav, Offcanvas, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  menuShowHandler: () => void;
  menuHideHandler: () => void;
  showMenu: boolean;
}

export default function NavBar(props: NavbarProps) {
  const navigate = useNavigate();

  return (
    <>
      <Nav className='fixed-top w-100 justify-content-between align-items-center bg-white shadow p-2'>
        <Nav.Item className='my-auto align-center'>
          <Nav.Link onClick={() => navigate('/')} className='link-primary' role='button'><h3><Icon path={mdiScaleBalance} size={1.3} className='align-bottom'/> A.L. Campbell Law Firm</h3></Nav.Link>
        </Nav.Item>

        <Nav.Item className='d-none d-md-flex align-items-center text-center align-center'>
            <Nav.Link className='my-auto link-dark' role='button'>About US</Nav.Link>
            <Nav.Link className='my-auto link-dark' role='button'>Practice Areas</Nav.Link>
        </Nav.Item>

        <div id='menu-button-sm' className='d-md-none pe-2'>
          <a onClick={() => props.menuShowHandler()} className='text-primary' role='button'><Icon path={mdiMenu} size={1.3}/></a>
        </div>
      </Nav>

      <div style={{marginBottom: '75px'}}></div>

      <Offcanvas show={props.showMenu} onHide={props.menuHideHandler} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <Container className='ps-0'>
                    <Row>
                        <Col className='d-flex flex-column gap-3'>
                          <a><h5>About Us</h5></a>
                          <a><h5>Practice Areas</h5></a>
                        </Col>
                    </Row>
                </Container>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}