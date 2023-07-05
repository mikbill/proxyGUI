import React from 'react';
import {Table} from "react-bootstrap";

const UsersList = ({users, modalVisible, userData}) => {
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
                        userData(r.id)
                        modalVisible()
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
