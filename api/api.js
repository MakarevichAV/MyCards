import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://63a0b184e3113e5a5c44cd5c.mockapi.io"
});

export const categoriesAPI = {
    getCategories() {
        return instance.get(`categories`).then(res => res.data);
    },
    getOneCategories(catId) {
        return instance.get(`categories/:${catId}`).then(res => res.data);
    }
}