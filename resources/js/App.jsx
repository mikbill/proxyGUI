import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "./index";

import Layout from "./components/Layout";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import {profile} from "./http/userAPI";

import {Spinner} from "react-bootstrap";
import {useFetching} from "./hooks/useFetching";

const App = observer(() => {
    const {auth} = useContext(Context)
    //const [loading, setLoading] = useState(true)

    const [fetchProfile, isLoading, error] = useFetching(async () => {
        const response = await profile()
        auth.setIsAuth(true)
        auth.setUser(response.data.name)
    })

    useEffect(() => {
        fetchProfile()
        // profile().then(data => {
        //     auth.setIsAuth(true)
        //     auth.setUser(data.data.name)
        // }).finally(() => setLoading(false))
    }, [])

    if (isLoading) {
        return <div style={{height: '100vh'}}
            className='d-flex justify-content-center align-items-center'>
            <Spinner animation="border"/>
        </div>
    }

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
