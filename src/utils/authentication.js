import axios from "axios";
import { serverURL } from "../config/env";

export const storeToken = (token) => {
    localStorage.setItem("tcc-auth-token", token);
};

export const getToken = () => {
    return localStorage.getItem("tcc-auth-token");
};

export const logout = () => {
    localStorage.removeItem("tcc-auth-token");
};

export const isAuthenticated = async () => {
    try {
        axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
        const { data } = await axios.get(`${serverURL}/api/authentication`);
        console.log(data);
        if (data) {
            return true;
        }
        return false;
    } catch (error) {
        console.error("Error verifying authentication:", error);
        return false;
    }
};
