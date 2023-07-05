import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import {fetchOneUser, fetchUsers} from "../http/usersAPI";
import UsersList from "../components/UsersList";
import ModalUser from "../components/ModalUser";
import ModalRequest from "../components/ModalRequest";

const Users = () => {
    const [users, setUsers] = useState([])

    const [userVisible, setUserVisible] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        fetchUsers().then(r => {
            setUsers(r.data.data)
            console.log(r.data.data)
        })
    }, [])

    const userData = (id) => {
        fetchOneUser(id).then(r => {
            setUserInfo(r.data.data)
            console.log(r.data)
        })
    }

    const closeModal = () => {
        setUserVisible(false)
        setUserInfo({})
    }

    return (
        <div>
            <h1>Users</h1>
            <UsersList
                users={users}
                userData={userData}
                modalVisible={() => setUserVisible(true)}
            />
            <ModalUser
                show={userVisible}
                onHide={closeModal}
                userInfo={userInfo}
            />
        </div>
    );
};

export default Users;
