import React, {useEffect, useState} from 'react';
import {fetchOneRequest, fetchRequests} from "../http/requestAPI";
import {FormGroup, Form, Button, InputGroup, Col} from "react-bootstrap";
import Pages from "../components/Pages";
import {observer} from "mobx-react-lite";
import ModalRequest from "../components/ModalRequest";
import RequestsList from "../components/RequestsList";
import RequestSort from "../components/RequestSort";

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

    const requestData = (id) => {
        fetchOneRequest(id).then(r => {
            setRequestInfo(r.data.data)
            console.log(r.data.data)
        })
    }
    const closeModal = () => {
        setRequestVisible(false)
        setRequestInfo({})
    }

    const sortRequests = (clientID, msisdn) => {
        fetchRequests(1, clientID, msisdn ).then(r => {
            setRequests(r.data.data)
            setTotalPage(r.data.meta.last_page)
            console.log(r.data)
        })
    }

    return (
        <div>
            <h1>Requests</h1>
            <Col md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
                <RequestSort
                    className="mb-2"
                    sort={sortRequests}
                />
            </Col>

            <RequestsList
                requests={requests}
                modalVisible={() => setRequestVisible(true)}
                requestData={requestData}
            />
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
