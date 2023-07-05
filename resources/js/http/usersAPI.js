import {$authHost} from "./index";

export const fetchUsers = async () => {
    const data = $authHost.get('/api/v1/proxy/users')
    return data
}

export const fetchOneUser = async (id) => {
    const data = $authHost.get('/api/v1/proxy/users/' + id)
    return data
}
