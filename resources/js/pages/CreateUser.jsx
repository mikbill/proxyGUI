import React, {useState} from 'react';
import CreateUserForm from "../components/CreateUserForm";
import {createUser} from "../http/usersAPI";
import {useNavigate} from "react-router-dom";
import {USERS_ROUTE} from "../utils/consts";
import {Alert} from "react-bootstrap";

const CreateUser = () => {
    const [user, setUser] = useState({
        id: "",
        name: "",
        update_date: "",
        production_url: "",
        testing_url: ""
    })
    const [alertVisible, setAlertVisible] = useState(false)

    const navigate = useNavigate()

    const create = async () => {
        const res = await createUser(user)
        //console.log(res)
        setAlertVisible(true)
        if (res.status === 201) {
            setTimeout(() => {
                setAlertVisible(false)
                navigate(USERS_ROUTE)
            }, 1000)
        }
    }

    return (
        <div>
            <h1>Create</h1>
            <CreateUserForm
                user={user}
                setUser={setUser}
                create={create}
            />
            <Alert
                variant="success"
                className="mt-3"
                show={alertVisible}
            >
                Пользователь успешно добавлен
            </Alert>
        </div>
    );
};

export default CreateUser;
