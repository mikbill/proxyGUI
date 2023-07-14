import React from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import UserForm from "./UserForm";

const EditUserForm = ({user, setUser, update}) => {
    return (
        <Form >
            <UserForm
                user={user}
                setUser={setUser}
            />
            <Button
                type="submit"
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    update()
                }}
            >
                Сохранить
            </Button>
        </Form>
    );
};

export default EditUserForm;
