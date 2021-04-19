import {$authHost, $host} from './index';
import jwtDecode from 'jwt-decode';

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'USER', previousOrders: 'none'});
    localStorage.setItem('token', data.token);
    let dataToken = jwtDecode(data.token);
    let dataRole = dataToken.role;
    let dataId = dataToken.id;
    let dataEmail = dataToken.email;
    let dataPrevOrders = dataToken.previousOrders;
    return {dataToken, dataRole, dataId, dataEmail, dataPrevOrders};

}

export const login = async (email, password) => {
    const {data} = await $host.post( 'api/user/login', {email, password});
    localStorage.setItem('token', data.token);
    let dataToken = jwtDecode(data.token);
    let dataRole = dataToken.role;
    let dataId = dataToken.id;
    let dataEmail = dataToken.email;
    let dataPrevOrders = dataToken.previousOrders;
    return {dataToken, dataRole, dataId, dataEmail, dataPrevOrders};

}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    let dataToken = jwtDecode(data.token);
    console.log(dataToken)
    let dataRole = dataToken.role;
    let dataId = dataToken.id;
    let dataEmail = dataToken.email;
    let dataPrevOrders = dataToken.previousOrders;
    return {dataToken, dataRole, dataId, dataEmail, dataPrevOrders};
    
}

export const fetchUsers = async (email) => {
    const {data} = await $host.get('api/user', {params: {
        email
    }});
    return data;
}

export const assignPreviousOrders = async (id, prevOrders) => {
    await $host.put('api/user', { id, prevOrders });

}