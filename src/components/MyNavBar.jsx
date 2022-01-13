import {Navbar, Nav} from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const MyNavBar = ({ filter, setFilter }) => {

const location = useLocation()
    // location is ALWAYS an object, probably the most important property of it is PATHNAME

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Strive Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                    <Link to="/registration">
                        <div className={location.pathname === '/registraion' ? 'nav-link active' : 'nav-link'}>Registration</div>
                    </Link>
                    
                    {/* <Link to="/stefano">
                        <div className="nav-link">404</div>
                    </Link> */}
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <input
                    type="text"
                    className="ml-auto"
                    value={filter}
                    onChange={e =>
                        setFilter(e.target.value)
                    }
                />
            </Navbar.Collapse>
        </Navbar>
    )
}
export default MyNavBar