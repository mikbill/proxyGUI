import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {editUser, fetchOneUser} from "../http/usersAPI";
import {useFetching} from "../hooks/useFetching";
import {Button, Form, InputGroup, Spinner} from "react-bootstrap";

const UserPage = () => {
    const {id} = useParams()

    const [user, setUser] = useState({
        id: "",
        name: "",
        update_date: "",
        production_url: "",
        testing_url: ""
    })

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
        console.log(res)
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
                    <Form >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="id-addon">ID</InputGroup.Text>
                            <Form.Control
                                disabled
                                aria-describedby="id-addon"
                                type="text"
                                value={user.id || ''}
                                onChange={(e) => setUser({...user, id: e.target.value})}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="name-addon">Name</InputGroup.Text>
                            <Form.Control
                                aria-describedby="name-addon"
                                type="text"
                                value={user.name || ''}
                                onChange={(e) => setUser({...user, name: e.target.value})}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="update_date-addon">Update date</InputGroup.Text>
                            <Form.Control
                                aria-describedby="update_date-addon"
                                type="text"
                                value={user.update_date || ''}
                                onChange={(e) => setUser({...user, update_date: e.target.value})}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="production_url-addon">Production URL</InputGroup.Text>
                            <Form.Control
                                aria-describedby="production_url-addon"
                                type="text"
                                value={user.production_url || ''}
                                onChange={(e) => setUser({...user, production_url: e.target.value})}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="testing_url-addon">Testing URL</InputGroup.Text>
                            <Form.Control
                                aria-describedby="testing_url-addon"
                                type="text"
                                value={user.testing_url || ''}
                                onChange={(e) => setUser({...user, testing_url: e.target.value})}
                            />
                        </InputGroup>
                        <Button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                updateUser()
                            }}
                        >
                            Сохранить
                        </Button>
                    </Form>
                </div>
                }

        </div>
    );
};

export default UserPage;
