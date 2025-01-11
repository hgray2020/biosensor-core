import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarButton from './NavbarButton';
import '../styles/Navbar.css';
import Pages from '../util/pages.json';


function HeaderNavbar({current_page}) {
    

    return (
        <Navbar bg="primary" expand="lg" data-bs-theme="dark">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" placement="middle">
                <Nav className="d-flex justify-content-evenly">
                    {Pages.pages.map((item) => {
                        if (!current_page || item.title !== current_page.title) {
                            return <NavbarButton page={item}/>
                        }
                    })}
                    
                    
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default HeaderNavbar;