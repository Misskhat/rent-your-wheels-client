import axios from "axios";
import {use, useEffect} from "react";
import useAuth from "./useAuth";

const instance = axios.create({
    baseURL: "http://localhost:3000/",
});

const useAxiosSecure = () => {
    const {user} = useAuth();
    useEffect(() => {
        const requestInstance = instance.interceptors.request.use((config) => {
            config.headers.authorization = `Bearer ${user.token}`;
            return config;
        });
        const responseInstance = instance.interceptors.response.use((res) => {
            return res;
        });

        return () => {
            instance.interceptors.request.eject(requestInstance);
            instance.interceptors.response.eject(responseInstance);
        };
    }, []);
    return instance;
};

export default useAxiosSecure;
