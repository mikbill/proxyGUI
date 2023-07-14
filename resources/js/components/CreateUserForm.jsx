import React, {useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import UserForm from "./UserForm";

const CreateUserForm = ({user, setUser, create}) => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <UserForm
                    user={user}
                    setUser={setUser}
                />
                <Button
                    type="submit"
                    onClick={() => {
                        create()
                    }}
                >
                    Сохранить
                </Button>
            </Form>
        </div>
    );
};

export default CreateUserForm;
