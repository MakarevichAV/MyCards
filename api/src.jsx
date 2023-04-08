import axios from "axios";

export const commonUrl = "https://06ef-77-137-68-181.eu.ngrok.io";
export const urlCat = commonUrl + "/api/categories";
export const urlSet = commonUrl + "/api/sets";
export const urlCard = commonUrl + "/api/cards";

export const urlPictureApi = `https://pixabay.com/api/?key=33256265-9311bbeda59bd85787262c6fb`;

export const API_URL = commonUrl + "/api";
const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config; 
})

export default $api;