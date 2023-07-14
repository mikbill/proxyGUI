import {$authHost, $host} from "./index";

export const login = async (name, password) => {
    const {data} = await $host.post('/auth', {name, password})
    localStorage.setItem('token', data.access_token)
}

export const profile = async () => {
    const {data} = await $authHost.get('/user')
    return data
}
