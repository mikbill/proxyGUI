import React, {useEffect, useState} from 'react';
import {fetchUsers} from "../http/usersAPI";
import UsersList from "../components/UsersList";
import {useFetching} from "../hooks/useFetching";
import {Spinner} from "react-bootstrap";

const Users = () => {
    const [users, setUsers] = useState([])

    const [fetchUsersList, isLoading, error] = useFetching(async () => {
        const response = await fetchUsers()
        setUsers(response.data.data)
        console.log(response)
    })

    useEffect(() => {
        fetchUsersList()
    }, [])

    return (
        <div>
            <h1>Users</h1>
            {isLoading
                ?
                <div className='d-flex justify-content-center align-items-center'>
                    <Spinner animation="border"/>
                </div>
                :
                <>
                    <UsersList users={users}/>
                </>
            }

        </div>
    );
};

export default Users;
