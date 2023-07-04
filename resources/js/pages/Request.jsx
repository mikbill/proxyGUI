import React, {useEffect, useState} from 'react';
import {fetchOneRequest, fetchRequests} from "../http/requestAPI";
import {Pagination, Table} from "react-bootstrap";
import Pages from "../components/Pages";
import {observer} from "mobx-react-lite";
import ModalRequest from "../components/ModalRequest";

const Request = observer(() => {
    const [requests, setRequests] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const pages = []
    const gap = 3

    const [requestVisible, setRequestVisible] = useState(false)
    const [requestInfo, setRequestInfo] = useState({})

    for (let i = 0; i < totalPage; i++) {
        pages.push(i + 1)
    }

    useEffect(() => {
        fetchRequests().then(r => {
            setRequests(r.data.data)
            setTotalPage(r.data.meta.last_page)
            console.log(r.data)
        })
    }, [])

    useEffect(() => {
        fetchRequests(currentPage).then(r => {
            setRequests(r.data.data)
            setTotalPage(r.data.meta.last_page)
            console.log(r.data)
        })
    }, [currentPage])

    const requestProp = (id) => {
        fetchOneRequest(id).then(r => {
            setRequestInfo(r.data.data)
            console.log(r.data.data)
        })
    }
    const closeModal = () => {
        setRequestVisible(false)
        setRequestInfo({})
    }

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
                        onClick={() => {
                            requestProp(r.id)
                            setRequestVisible(true)
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
            <ModalRequest
                show={requestVisible}
                onHide={closeModal}
                reqInfo={requestInfo}
            />

            <Pages
                currentPage={currentPage}
                totalPage={totalPage}
                gap={gap}
                click={(page) => setCurrentPage(page)}
            />
        </div>
    );
});

export default Request;
