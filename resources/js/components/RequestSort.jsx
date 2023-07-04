import React, {useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";

const RequestSort = ({className, sort}) => {
    const [clientID, setClientID] = useState('')
    const [msisdn, setMsisdn] = useState('')

    return (
        <Form className={className}>
            <InputGroup className="mb-2">
                <InputGroup.Text id="clientID-addon">Client ID</InputGroup.Text>
                <Form.Control
                    type="text"
                    aria-describedby="clientID-addon"
                    value={clientID}
                    onChange={(e) => setClientID(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="mb-2">
                <InputGroup.Text id="msisdn-addon">msisdn</InputGroup.Text>
                <Form.Control
                    type="text"
                    aria-describedby="msisdn-addon"
                    value={msisdn}
                    onChange={(e) => setMsisdn(e.target.value)}
                />
            </InputGroup>
            <div className="d-flex justify-content-end">
                <Button
                    className="me-2"
                    variant="outline-secondary"
                    onClick={() => {
                        sort('', '')
                        setClientID('')
                        setMsisdn('')
                    }}
                >Очистить</Button>
                <Button
                    variant="success"
                    onClick={() => {
                        sort(clientID, msisdn)
                    }}
                >Поиск</Button>
            </div>

        </Form>
    );
};

export default RequestSort;
