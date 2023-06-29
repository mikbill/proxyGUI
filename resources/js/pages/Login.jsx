import React, {useContext, useState} from 'react';
import {login, profile} from "../http/userAPI";
import {Button, Card, Form, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Login = observer( () => {
    const {auth} = useContext(Context)

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
    };

    const click = async () => {
        try {
            await login(name, password)
            // profile().then(data => {
            //     auth.setUser(data.data.name)
            // })
            auth.setIsAuth(true)
            navigate(ADMIN_ROUTE)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    return (
        <div>
            <Col
                className="mt-5"
                md={{span: 8, offset: 2}}
                lg={{span: 6, offset: 3}}
                xl={{span: 4, offset: 4}}
            >
                <Card className="shadow border-0">
                    <Card.Body>
                        <Card.Title as='h2' className="text-center">Вход</Card.Title>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-4" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword( e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="d-grid">
                                    <Button
                                        type="submit"
                                        variant="success"
                                        size="lg"
                                        onClick={click}
                                    >
                                        Войти
                                    </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
})

export default Login;
