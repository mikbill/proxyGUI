import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";

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
        <nav className="navbar navbar-expand-lg">
            <NavLink to={HOME_ROUTE} className="navbar-brand">LOGO</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarContent" aria-controls="navbarContent"
                    aria-expanded="false" aria-label="Переключатель навигации">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mr-auto">
                    {pageLinks.map((page, key) => {
                        return (
                            <li key={key} className={`nav-item `}>
                                <NavLink
                                    to={page.url}
                                    // поменять стили
                                    style={({isActive}) => ({color: isActive ? 'red' : ''})}
                                    className={'nav-link'}
                                >
                                    {page.name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
