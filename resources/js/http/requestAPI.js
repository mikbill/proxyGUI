import {$authHost} from "./index";


export const fetchRequests = async (page) => {
    const data = $authHost.get('/api/v1/proxy/requests'+'?page='+page)
    return data
}

export const fetchOneRequest = async (id) => {
    const data = $authHost.get('/api/v1/proxy/requests/' + id)
    return data
}
