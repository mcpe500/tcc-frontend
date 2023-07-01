import axios from "axios";
import { serverURL } from "../config/env";

export const storeToken = (token) => {
    localStorage.setItem("tcc-auth-token", token);
};

export const getToken = () => {
    return localStorage.getItem("tcc-auth-token");
};

export const logout = () => {
    localStorage.removeItem('tcc-auth-token');
}

export const authenticated = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
    const { data } = await axios.get(`${serverURL}/api/authenticate`);
    return data.authenticated;
}
