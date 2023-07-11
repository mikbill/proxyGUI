import {$authHost} from "./index";

export const fetchUsers = async () => {
    const data = $authHost.get('/api/v1/proxy/users')
    return data
}

export const fetchOneUser = async (id) => {
    const data = $authHost.get('/api/v1/proxy/users/' + id)
    return data
}

export const editUser = async (id, body) => {
    const data = $authHost.patch('/api/v1/proxy/users/' + id, body)
    return data
}
