import {$authHost} from "./index";

export const fetchRequests = async (page=1, clientID='', msisdn='') => {
    const data = $authHost.get('/api/v1/proxy/requests'+'?page='+page, {params: {clientID, msisdn}})
    return data
}

export const fetchOneRequest = async (id) => {
    const data = $authHost.get('/api/v1/proxy/requests/' + id)
    return data
}
