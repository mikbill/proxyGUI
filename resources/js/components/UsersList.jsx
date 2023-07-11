import React from 'react';
import {Table} from "react-bootstrap";
import {USERS_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const UsersList = ({users}) => {
    const navigate = useNavigate()
    return (
        <Table hover className="table-selection">
            <thead>
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>updateDate</th>
                <th>production_url</th>
                <th>testing_url</th>
            </tr>
            </thead>
            <tbody>
            {users.map((r) => {
                return <tr
                    key={r.id}
                    onClick={() => {
                        navigate(USERS_ROUTE + '/' + r.id)
                    }}
                >
                    <td>{r.id}</td>
                    <td>{r.name}</td>
                    <td>{r.update_date}</td>
                    <td>{r.production_url}</td>
                    <td>{r.testing_url}</td>
                </tr>
            })}
            </tbody>
        </Table>
    );
};

export default UsersList;
