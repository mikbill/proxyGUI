import React, {useEffect, useState} from 'react';
import {fetchOneRequest, fetchRequests} from "../http/requestAPI";
import {Col, Spinner} from "react-bootstrap";
import Pages from "../components/Pages";
import {observer} from "mobx-react-lite";
import ModalRequest from "../components/ModalRequest";
import RequestsList from "../components/RequestsList";
import RequestSort from "../components/RequestSort";
import {useFetching} from "../hooks/useFetching";

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

    const [fetchRequestsList, isLoading, error] = useFetching(async () => {
        const response = await fetchRequests(currentPage)
        setRequests(response.data.data)
        setTotalPage(response.data.meta.last_page)
    })

    useEffect(() => {
        fetchRequestsList()
        // fetchRequests(currentPage).then(r => {
        //     setRequests(r.data.data)
        //     setTotalPage(r.data.meta.last_page)
        // })
    }, [currentPage])

    const requestData = (id) => {
        fetchOneRequest(id).then(r => {
            setRequestInfo(r.data.data)
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

            {isLoading
                ? <div className='d-flex justify-content-center align-items-center'>
                    <Spinner animation="border"/>
                </div>
                :
                <>
                    <RequestsList
                        requests={requests}
                        modalVisible={() => setRequestVisible(true)}
                        requestData={requestData}
                    />
                    <Pages
                        currentPage={currentPage}
                        totalPage={totalPage}
                        gap={gap}
                        click={(page) => setCurrentPage(page)}
                    />
                    <ModalRequest
                        show={requestVisible}
                        onHide={closeModal}
                        reqInfo={requestInfo}
                    />
                </>
            }
        </div>
    );
});

export default Request;
