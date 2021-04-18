import {$authHost, $host} from './index';
import jwtDecode from 'jwt-decode';

export const createAccomm = async (accommodation) => {
    const {data} = await $authHost.post('api/accommodation', accommodation);
    return data;
}

export const fetchAccomms = async () => {
    const {data} = await $host.get('api/accommodation');
    return data;
}

export const createTour = async (tour) => {
    const {data} = await $authHost.post('api/tour', tour);
    return data;
}

export const deleteTour = async (id) => {
    const {data} = await $authHost.delete('api/tour/' + id);
    return data;
}

export const fetchTours = async (country) => {
    const {data} = await $host.get('api/tour', {params: {
        country
    }});
    return data;
}

export const fetchOneTour = async (id) => {
    const {data} = await $host.get('api/tour', id )
    return data;
}

// export const check = async () => {
//     const {data} = await $authHost.post('api/user/auth' )
//     localStorage.setItem('token', data.token)
//     return jwtDecode(data.token);
// }