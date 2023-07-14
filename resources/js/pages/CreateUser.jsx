import React, {useState} from 'react';
import CreateUserForm from "../components/CreateUserForm";
import {createUser} from "../http/usersAPI";

const CreateUser = () => {
    const [user, setUser] = useState({})

    const create = async () => {
        const res = await createUser()
        console.log(res)
    }

    return (
        <div>
            <h1>Create</h1>
            <CreateUserForm
                user={user}
                setUser={setUser}
                create={create}
            />
        </div>
    );
};

export default CreateUser;
