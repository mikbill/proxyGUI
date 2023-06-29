import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Header = observer( () => {
    const {auth} = useContext(Context)
    const navigate = useNavigate();
    const pageLinks = [
        {
            "name": "Home",
            "url": HOME_ROUTE,
        },
        {
            "name": "AdminPanel",
            "url": ADMIN_ROUTE,
        },
        {
            "name": "Profile",
            "url": PROFILE_ROUTE,
        },
    ];

    const logout = () => {
        auth.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(LOGIN_ROUTE)
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="md" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <NavLink to={HOME_ROUTE} className="navbar-brand">LOGO</NavLink>
                </Navbar.Brand>
                {
                    auth.isAuth && <Navbar.Toggle aria-controls="navbar-nav"/>
                }
                {/*<Navbar.Toggle aria-controls="navbar-nav"/>*/}
                <Navbar.Collapse id="navbar-nav">

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
                            })
                        }
                    </Nav>
                    <Nav>
                        {auth.isAuth ?
                            <Button
                                variant="outline-light"
                                onClick={logout}
                            >
                                Logout
                            </Button>
                            :
                            <Button
                                variant="outline-light"
                                onClick={() => navigate(LOGIN_ROUTE)}
                            >
                                Login
                            </Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default Header;
