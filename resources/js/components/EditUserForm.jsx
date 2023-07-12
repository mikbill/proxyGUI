import React from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";

const EditUserForm = ({user, setUser, update}) => {
    return (
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
                    update()
                }}
            >
                Сохранить
            </Button>
        </Form>
    );
};

export default EditUserForm;
