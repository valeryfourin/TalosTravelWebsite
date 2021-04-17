import {$authHost, $host} from './index';
import jwtDecode from 'jwt-decode';

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'USER'});
    localStorage.setItem('token', data.token);
    let dataToken = jwtDecode(data.token);
    let dataRole = dataToken.role;
    let dataId = dataToken.id;
    return {dataToken, dataRole, dataId};
    // return jwtDecode(data.token);
}

export const login = async (email, password) => {
    const {data} = await $host.post( 'api/user/login', {email, password});
    localStorage.setItem('token', data.token);
    let dataToken = jwtDecode(data.token);
    let dataRole = dataToken.role;
    let dataId = dataToken.id;
    return {dataToken, dataRole, dataId};
    
    // return jwtDecode(data.token);
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    let dataToken = jwtDecode(data.token);
    let dataRole = dataToken.role;
    let dataId = dataToken.id;
    return {dataToken, dataRole, dataId};
    
    // return jwtDecode(data.token);
}

export const fetchUsers = async (email) => {
    const {data} = await $host.get('api/user', {params: {
        email
    }});
    return data;
}