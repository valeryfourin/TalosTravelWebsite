import {$authHost, $host} from './index';

export const createAccomm = async (accommodation) => {
    const {data} = await $authHost.post('api/accommodation', accommodation);
    return data;
}

export const fetchAccomms = async (tourId) => {
    const {data} = await $host.get('api/accommodation', {params: {
        tourId
   }});
    return data;
}

export const createTour = async (tour) => {
    const {data} = await $authHost.post('api/tour', tour);
    return data;
}

export const fetchTours = async (country, id) => {
    const {data} = await $host.get('api/tour', {params: {country, id}});
    return data;
}

export const fetchOneTour = async (id) => {
    const {data} = await $host.get('api/tour/' + id )
    return data;
}

export const deleteTour = async (id) => {
    const {data} = await $authHost.delete('api/tour/' + id);
    return data;
}
export const deleteAccomm = async (id) => {
    const {data} = await $authHost.delete('api/accommodation/' + id);
    return data;
}