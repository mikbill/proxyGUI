import {$authHost} from "./index";

const usersURL = '/proxy/users/'

export const fetchUsers = async () => {
    const data = $authHost.get(usersURL)
    return data
}

export const fetchOneUser = async (id) => {
    const data = $authHost.get(usersURL + id)
    return data
}

export const editUser = async (id, body) => {
    const data = $authHost.patch(usersURL + id, body)
    return data
}

export const createUser = async (body) => {
    const data = $authHost.post(usersURL, body)
    return data
}
