import logo from "../assets/netflix_logo.png";
import fatKid from "../assets/avatar.png";
import { Component } from "react";
import { Dropdown, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import { BsFillBellFill, BsSearch } from "react-icons/bs";

class MyNavbar extends Component {
render() {
        return (
        <Navbar>
            <Navbar.Brand>
            <img src={logo} id="logo" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>TV Shows</Nav.Link>
                <Nav.Link>Movies</Nav.Link>
                <Nav.Link>Recently Added</Nav.Link>
                <Nav.Link>My List</Nav.Link>
            </Nav>
            <Nav id="avatarZone">
                <BsSearch className="navbar-icon" />
                <BsFillBellFill className="navbar-icon" />
                <Nav.Link>Marquis Warren</Nav.Link>
                <NavDropdown title={<img src={fatKid} id="avatar" alt="propic" />}>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default MyNavbar;