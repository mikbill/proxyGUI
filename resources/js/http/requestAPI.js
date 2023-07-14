import {$authHost} from "./index";
import {REQUESTS_ROUTE} from "../utils/consts";

export const fetchRequests = async (page=1, clientID='', msisdn='') => {
    const data = $authHost.get(REQUESTS_ROUTE + '?page='+page, {params: {clientID, msisdn}})
    return data
}

export const fetchOneRequest = async (id) => {
    const data = $authHost.get(REQUESTS_ROUTE + '/' + id)
    return data
}
