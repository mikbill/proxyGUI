import {$authHost} from "./index";
import {USERS_ROUTE} from "../utils/consts";

export const fetchUsers = async () => {
    const data = $authHost.get(USERS_ROUTE)
    return data
}

export const fetchOneUser = async (id) => {
    const data = $authHost.get(USERS_ROUTE + '/' + id)
    return data
}

export const editUser = async (id, body) => {
    const data = $authHost.patch(USERS_ROUTE + '/' + id, body)
    return data
}

export const createUser = async (body) => {
    const data = $authHost.post(USERS_ROUTE, body)
    return data
}
