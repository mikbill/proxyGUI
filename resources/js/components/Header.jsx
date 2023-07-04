import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REQUEST_ROUTE} from "../utils/consts";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
    const {auth} = useContext(Context)
    const navigate = useNavigate();
    const pageLinks = [
        {
            "name": "Request",
            "url": REQUEST_ROUTE,
        },
    ];

    const logout = () => {
        auth.setIsAuth(false)
        auth.setUser('')
        localStorage.removeItem('token')
        navigate(LOGIN_ROUTE)
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="md" className="bg-body-tertiary">
            {auth.isAuth ?
                <Container>
                    <Navbar.Toggle aria-controls="navbar-nav"/>
                    <Navbar.Collapse id="navbar-nav" className="mt-2 mb-2">
                        <Nav className="me-auto">
                            {auth.isAuth && pageLinks.map((page, key) => {
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
                        <Nav>
                            <div>
                                <Navbar.Text
                                    className="me-4"
                                >{auth.user}</Navbar.Text>
                                <Button
                                    variant="outline-light"
                                    onClick={logout}
                                >
                                    Logout
                                </Button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                :
                <Container className="justify-content-end">
                    <Button
                        variant="outline-light"
                        onClick={() => navigate(LOGIN_ROUTE)}
                    >
                        Login
                    </Button>
                </Container>
            }
        </Navbar>
    );
});

export default Header;
