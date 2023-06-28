import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Container, Nav, Navbar} from "react-bootstrap";

function Header() {
    //const navigate = useNavigate();
    const pageLinks = [
        {
            "name": "Home",
            "url": HOME_ROUTE,
        },
        {
            "name": "Login",
            "url": LOGIN_ROUTE,
        },
        {
            "name": "AdminPanel",
            "url": ADMIN_ROUTE,
        },
    ];

    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <NavLink to={HOME_ROUTE} className="navbar-brand">LOGO</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        {pageLinks.map((page, key) => {
                            return (
                                <NavLink
                                    key={page.url}
                                    to={page.url}
                                    // поменять стили
                                    style={({isActive}) => ({color: isActive ? 'red' : ''})}
                                    className={'nav-link'}
                                >
                                    {page.name}
                                </NavLink>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
