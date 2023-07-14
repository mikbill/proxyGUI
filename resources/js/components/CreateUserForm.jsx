import React, {useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import UserForm from "./UserForm";

const CreateUserForm = ({user, setUser, create}) => {
    return (
        <div>
            <Form>
                <UserForm
                    user={user}
                    setUser={setUser}
                />
                <Button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
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
