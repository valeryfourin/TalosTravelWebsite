import {$authHost, $host} from './index';
import jwtDecode from 'jwt-decode';

export const createOrder = async (order) => {
    const {data} = await $authHost.post('api/order', order);
    return data;
}

export const fetchOrders = async (country, userId) => {
    const {data} = await $host.get('api/order', {params: {
        country, userId
    }});
    return data;
}

export const fetchOneOrder = async (id) => {
    const {data} = await $host.get('api/order', id )
    return data;
}

export const confirmOrder = async (id, status) => {
    await $host.put('api/order', { id, status });
    // return data;
}
