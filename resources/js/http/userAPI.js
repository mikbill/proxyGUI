import {$authHost, $host} from "./index";


export const login = async (name, password) => {
    const {data} = await $host.post('/api/v1/auth', {name, password})
    localStorage.setItem('token', data.access_token)
    //console.log(data.access_token)
}

export const profile = async () => {
    const {data} = await $authHost.get('api/v1/user')
    return data
}
