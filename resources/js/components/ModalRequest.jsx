import React from 'react';
import {Table} from "react-bootstrap";
import ModalTemplate from "./Modal";

const ModalRequest = ({show, onHide, reqInfo}) => {
    return (
        <ModalTemplate
            show={show}
            onHide={onHide}
            title="Информация о запросе"
        >
            <Table bordered hover>
                <tbody>
                <tr>
                    <td>Запрос</td>
                    <td colSpan={3}>{reqInfo.id}</td>
                </tr>
                <tr>
                    <td>Клиент</td>
                    <td>{reqInfo.clientID}</td>
                </tr>
                <tr>
                    <td>ID Транзакции</td>
                    <td>{reqInfo.transactionId}</td>
                </tr>
                <tr>
                    <td>Номер</td>
                    <td>{reqInfo.msisdn}</td>
                </tr>
                <tr>
                    <td>Тип запроса</td>
                    <td colSpan={3}>{reqInfo.operationName}</td>
                </tr>
                </tbody>
            </Table>
            <Table hover>
                <tbody>
                <tr>
                    <td>Время запроса</td>
                    <td>{reqInfo.requestTime}</td>
                </tr>
                <tr>
                    <td>Код запроса</td>
                    <td>{reqInfo.requestCode}</td>
                </tr>
                <tr>
                    <td>Описание запроса</td>
                    <td colSpan={3}>{reqInfo.requestDesc}</td>
                </tr>
                </tbody>
            </Table>
            <Table hover>
                <tbody>
                <tr>
                    <td>Время ответа</td>
                    <td>{reqInfo.responseTime}</td>
                </tr>
                <tr>
                    <td>Код ответа</td>
                    <td>{reqInfo.responseCode}</td>
                </tr>
                <tr>
                    <td>Описание ответа</td>
                    <td colSpan={3}>{reqInfo.responseDesc}</td>
                </tr>
                </tbody>
            </Table>
        </ModalTemplate>
    );
};

export default ModalRequest;
