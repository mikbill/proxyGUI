import React from 'react';
import {Table} from "react-bootstrap";

const RequestsList = ({requests, modalVisible, requestData}) => {
    return (
        <Table hover className="table-selection">
            <thead>
            <tr>
                <th>clientID</th>
                <th>msisdn</th>
                <th>operationName</th>
                <th>Request</th>
                <th>Response</th>
            </tr>
            </thead>
            <tbody>
            {requests.map((r) => {
                const code = !((r.requestCode || r.responseCode) == 0)

                return <tr
                    key={r.id}
                    className={code ? 'select-color' : ''}
                    onClick={() => {
                        requestData(r.id)
                        modalVisible()
                    }}
                >
                    <td>{r.clientID}</td>
                    <td>{r.msisdn}</td>
                    <td>{r.operationName}</td>
                    <td>{r.requestCode}</td>
                    <td>{r.responseCode}</td>
                </tr>
            })}
            </tbody>
        </Table>
    );
};

export default RequestsList;
