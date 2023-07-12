import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {editUser, fetchOneUser} from "../http/usersAPI";
import {useFetching} from "../hooks/useFetching";
import {Alert, Button, Form, InputGroup, Spinner} from "react-bootstrap";
import EditUserForm from "../components/EditUserForm";
import {USERS_ROUTE} from "../utils/consts";

const UserPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState({})
    const [alertVisible, setAlertVisible] = useState(false)

    const [fetchUserByID, isLoading, error] = useFetching(async (id) => {
        const response = await fetchOneUser(id)
        setUser(response.data.data)
        console.log(response.data.data)
    })

    useEffect(() => {
        fetchUserByID(id)
    }, [])

    const updateUser = async () => {
        const res = await editUser(id, user)
        setAlertVisible(true)
        //console.log(res)
        if (res.status === 200) {
            setTimeout(() => {
                setAlertVisible(false)
                //navigate(USERS_ROUTE)
            }, 1000)
        }
    }

    return (
        <div>
            {isLoading
                ?
                <div className='d-flex justify-content-center align-items-center'>
                    <Spinner animation="border"/>
                </div>
                :
                <div>
                    <EditUserForm
                        user={user}
                        setUser={setUser}
                        update={updateUser}
                    />
                    <Alert
                        variant="success"
                        className="mt-3"
                        show={alertVisible}
                    >
                        Успешно изменено
                    </Alert>
                </div>
                }
        </div>
    );
};

export default UserPage;
