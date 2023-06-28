import React, {useContext, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import NotFound from "../pages/NotFound";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer( () => {
    //const isAuth = true
    const {auth} = useContext(Context)

    return (
        <Routes>
            {auth.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {/*<Route path='*' element={<Navigate to={NOT_FOUND_ROUTE} />}/>*/}
            <Route path='*' element={<NotFound/>} />
        </Routes>
    );

});

export default AppRouter;
