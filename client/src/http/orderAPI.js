import {$authHost, $host} from './index';

export const createOrder = async (order) => {
    const {data} = await $authHost.post('api/order', order);
    return data;
}

export const fetchOrders = async (userId) => {
    const {data} = await $host.get('api/order', {params: {
         userId
    }});
    return data;
}

export const fetchOneOrder = async (id) => {
    const {data} = await $host.get('api/order', id )
    return data;
}

export const confirmOrder = async (id, status) => {
    await $host.put('api/order', { id, status });

}
