import React from 'react';
import {Button, Modal, Table} from "react-bootstrap";

const ModalRequest = ({show, onHide, reqInfo}) => {
    return (
        <Modal show={show} onHide={onHide} size="lg">
            {/*<Modal.Header closeButton>*/}
            {/*    <Modal.Title>Информация о запросе: {reqInfo.id}, от клиента: {reqInfo.clientID}</Modal.Title>*/}
            {/*</Modal.Header>*/}
            {/*<Modal.Body>*/}
            {/*    <p>ID Транзакции: {reqInfo.transactionId}</p>*/}
            {/*    <p>Номер: {reqInfo.msisdn}, тип запроса: {reqInfo.operationName}</p>*/}
            {/*    <p>Время запроса: {reqInfo.requestTime}, код запроса: {reqInfo.requestCode}</p>*/}
            {/*    <p>Время ответа: {reqInfo.responseTime}, код ответа: {reqInfo.responseCode}</p>*/}
            {/*</Modal.Body>*/}

            <Modal.Header closeButton>
                <Modal.Title>Информация о запросе</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table bordered hover>
                    <tbody>
                        <tr>
                            <td>Запрос</td>
                            <td colSpan={3}>{reqInfo.id}</td>
                        </tr>
                        <tr>
                            <td>Клиент</td>
                            <td colSpan={3}>{reqInfo.clientID}</td>
                        </tr>
                        <tr>
                            <td>ID Транзакции</td>
                            <td colSpan={3}>{reqInfo.transactionId}</td>
                        </tr>
                        <tr>
                            <td>Номер</td>
                            <td>{reqInfo.msisdn}</td>
                            <td>Тип запроса</td>
                            <td>{reqInfo.operationName}</td>
                        </tr>
                        <tr>
                            <td>Время запроса</td>
                            <td>{reqInfo.requestTime}</td>
                            <td>Код запроса</td>
                            <td>{reqInfo.requestCode}</td>
                        </tr>
                        <tr>
                            <td>Описание запроса</td>
                            <td>{reqInfo.requestDesc}</td>
                        </tr>
                        <tr>
                            <td>Время ответа</td>
                            <td>{reqInfo.responseTime}</td>
                            <td>Код ответа</td>
                            <td>{reqInfo.responseCode}</td>
                        </tr>
                        <tr>
                            <td>Описание ответа</td>
                            <td>{reqInfo.responseDesc}</td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalRequest;
