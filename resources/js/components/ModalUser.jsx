import React from 'react';
import {Table} from "react-bootstrap";
import ModalTemplate from "./Modal";

const ModalUser = ({show, onHide, userInfo}) => {
    return (
        <ModalTemplate
            show={show}
            onHide={onHide}
            title="Информация о клиенте"
        >
            <Table hover>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{userInfo.id}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{userInfo.name}</td>
                    </tr>
                    <tr>
                        <td>Update date</td>
                        <td>{userInfo.update_date}</td>
                    </tr>
                    <tr>
                        <td>Production URL</td>
                        <td>{userInfo.production_url}</td>
                    </tr>
                    <tr>
                        <td>Testing URL</td>
                        <td>{userInfo.testing_url}</td>
                    </tr>
                </tbody>
            </Table>
        </ModalTemplate>
    );
};

export default ModalUser;
