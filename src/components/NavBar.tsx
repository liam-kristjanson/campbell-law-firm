import 'bootstrap/dist/css/bootstrap.min.css';

import Icon from '@mdi/react';
import { mdiMenu, mdiScaleBalance } from '@mdi/js';

import { Nav, Offcanvas } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  menuShowHandler: () => void;
  menuHideHandler: () => void;
  showMenu: boolean;
}

export default function NavBar(props: NavbarProps) {
  const navigate = useNavigate();

  const links = [
    {
      route: "/contact",
      text: "Contact",
    },
  ];

  return (
    <>
      <Nav className='fixed-top w-100 justify-content-between align-items-center bg-white shadow p-2'>
        <Nav.Item className='my-auto align-center'>
          <Nav.Link
          onClick={() => navigate('/')}
          className='link-primary'
          role='button'
          >
            <h3>
              <Icon path={mdiScaleBalance} size={1.3} className='align-bottom'/> A.L Campbell Law Office
            </h3>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className='d-none d-md-flex align-items-center text-center align-center'>
            {links.map((link: {route: string, text: string}) => (
              <Nav.Link
              onClick={() => navigate(link.route)}
              className='my-auto link-dark'
              role='button'
              >
                {link.text}
              </Nav.Link>
            ))}
        </Nav.Item>

        <div id='menu-button-sm' className='d-md-none pe-2'>
          <a onClick={() => props.menuShowHandler()}
          className='text-primary'
          role='button'
          >
            <Icon path={mdiMenu} size={1.3}/>
          </a>
        </div>
      </Nav>

      <div style={{marginBottom: '75px'}}></div>

      <Offcanvas show={props.showMenu} onHide={props.menuHideHandler} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              {links.map((link: {route: string, text: string}) => (
                <Nav.Item>
                  <Nav.Link
                  onClick={() => navigate(link.route)}
                  className='text-primary'
                  >
                    <h5>
                      {link.text}
                    </h5>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}