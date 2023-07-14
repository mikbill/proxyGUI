import React, {useContext, useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import NotFound from "../pages/NotFound";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {LOGIN_ROUTE, REQUESTS_ROUTE} from "../utils/consts";

const AppRouter = observer( () => {
    const {auth} = useContext(Context)

    return (
        <Routes>
            {auth.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {auth.isAuth ?
                <Route path='/' element={<Navigate to={REQUESTS_ROUTE} />}/>
                :
                <Route path='/' element={<Navigate to={LOGIN_ROUTE} />}/>
            }
            <Route path='*' element={<NotFound/>} />
        </Routes>
    );

});

export default AppRouter;
