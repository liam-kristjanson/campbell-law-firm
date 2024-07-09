import 'bootstrap/dist/css/bootstrap.min.css';

import Icon from '@mdi/react';
import { mdiMenu, mdiScaleBalance } from '@mdi/js';

import { Nav, NavDropdown, Offcanvas } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  menuShowHandler: () => void;
  menuHideHandler: () => void;
  showMenu: boolean;
  selectedRoute: string;
}

interface Route {
  route?: string;
  text: string;
  childRoutes? : Route[];
}

export default function NavBar(props: NavbarProps) {
  const navigate = useNavigate();

  const links : Route[] = [
    {
      route: "/",
      text: "Home",
    },
    {
      route: "/about-us",
      text: "About",
    },
    {
      text: "Practice Areas",
      childRoutes: [
        {
          route: "/practice-areas/real-estate-law",
          text: "Real Estate Law"
        },
        {
          route: "/practice-areas/immigration-law",
          text: "Immigration Law"
        },
        {
          route: "practice-areas/family-law",
          text: "Family Law"
        },
      ],
    },
    {
      route: "/contact",
      text: "Contact",
    },
  ];

  function findLinkClass(linkText: string) : string {
    if (linkText === props.selectedRoute){
      return 'primary'
    }

    return 'dark'
  }

  return (
    <>
      <Nav className='fixed-top w-100 justify-content-between align-items-center bg-white shadow p-2'>
        <Nav.Item className='my-auto align-center'>
          <Nav.Link
          onClick={() => navigate('/')}
          className='link-primary'
          role='button'
          >
            <h4>
              <Icon path={mdiScaleBalance} size={1.3} className='align-bottom'/> A.L Campbell Law Office
            </h4>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className='d-none d-md-flex my-auto align-center'>
            {links.map((link: Route) => (
              link.route ? (
                <h5>
                  <Nav.Link
                  onClick={() => navigate(link.route ?? "/")}
                  className={'my-auto link-' + findLinkClass(link.route)}
                  role='button'
                  >
                    <span className={'border-bottom border-' + findLinkClass(link.route ?? "/")}>
                      {link.text}
                    </span>
                  </Nav.Link>
                </h5>
              ) : (
                link.childRoutes ? (
                  <h5>
                    <NavDropdown
                    title={link.text}
                    menuVariant='light'
                    className='my-auto link-dark'
                    >
                      {link.childRoutes.map((sublink: Route) => (
                        <NavDropdown.Item
                        onClick={() => navigate(sublink.route ?? "/")}
                        className={'my-auto link-dark'}
                        role='button'
                        >
                          {sublink.text}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  </h5>
                ) : (
                  <></>
                )
              )
            ))}
        </Nav.Item>

        <div id='menu-button-sm' className='d-md-none pe-2'>
          <a onClick={() => props.menuShowHandler()}
          className='link-primary'
          role='button'
          >
            <Icon path={mdiMenu} size={1.3}/>
          </a>
        </div>
      </Nav>

      <div style={{marginBottom: '70px'}}></div>

      <Offcanvas show={props.showMenu} onHide={props.menuHideHandler} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              {links.map((link : Route) => (
                link.route ? (
                  <Nav.Item>
                    <Nav.Link
                    onClick={() => navigate(link.route ?? "/")}
                    className='link-primary mb-4'
                    >
                      <h5>
                        <span className="border-bottom border-primary">{link.text}</span>
                      </h5>
                    </Nav.Link>
                  </Nav.Item>
                ) : (
                  link.childRoutes ? (
                    link.childRoutes.map((sublink: Route) => (
                      <Nav.Item>
                        <Nav.Link
                        onClick={() => navigate(sublink.route ?? "/")}
                        className='link-primary mb-4'
                        >
                          <h5>
                            <span className="border-bottom border-primary">{sublink.text}</span>
                          </h5>
                        </Nav.Link>
                      </Nav.Item>
                    ))
                  ) : (
                    <></>
                  )
                )
              ))}
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}