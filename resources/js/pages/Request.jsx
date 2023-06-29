import React, {useEffect, useState} from 'react';
import {fetchRequests} from "../http/requestAPI";
import {Table} from "react-bootstrap";

const Request = () => {
    const [requests, setRequests] = useState([])


    useEffect(() => {
        fetchRequests().then(r => setRequests(r.data.data))
    }, [])

    return (
        <div>
            <h1>Requests</h1>
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
                    //console.log(code)
                    return <tr
                        key={r.id}
                        className={code ? 'select-color' : ''}
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

        </div>
    );
};

export default Request;
