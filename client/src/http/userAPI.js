import {$authHost, $host} from './index';
import jwtDecode from 'jwt-decode';

export const registration = async (email, password) => {
    // console.log('from server')
    const {data} = await $host.post('api/user/registration', {email, password, role: 'USER'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token);
}

export const login = async (email, password) => {
    const {data} = await $host.post( 'api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token);
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    // console.log(jwtDecode(data.token.role));
    return jwtDecode(data.token);
}

export const fetchUser = async (email) => {
    const {data} = await $host.get('api/user', {params: {
        email
    }});
    return data;
}