import React, {useContext, useEffect} from 'react';
import Layout from "./components/Layout";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {Context} from "./index";

const App = observer( () => {
    const {auth} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token'))
            auth.setIsAuth(true)
    }, [])

    return (
        <BrowserRouter>
            <Header/>
            <Layout>
                <AppRouter/>
            </Layout>
        </BrowserRouter>
    );
});

export default App;
