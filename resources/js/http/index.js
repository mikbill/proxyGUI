import axios from 'axios'

// const url = new URL(
//     "https://proxy.nekkoy.pp.ua/"
// );

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
}

const $host = axios.create({
    headers: headers,
})

const $authHost = axios.create({
    headers: headers,
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost,
}
