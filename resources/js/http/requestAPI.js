import {$authHost} from "./index";

const requestsURL = '/proxy/requests'

export const fetchRequests = async (page=1, clientID='', msisdn='') => {
    const data = $authHost.get(requestsURL + '?page='+page, {params: {clientID, msisdn}})
    return data
}

export const fetchOneRequest = async (id) => {
    const data = $authHost.get(requestsURL + '/' + id)
    return data
}
