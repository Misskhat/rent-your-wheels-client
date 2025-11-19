import axios from "axios";
import {useEffect} from "react";

const instance = axios.create({
    baseURL: "http://localhost:3000/",
});

const useAxiosSecure = () => {
    useEffect(() => {
        const requestInstance = instance.interceptors.request.use((config) => {
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
