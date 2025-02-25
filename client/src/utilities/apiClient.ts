import axios from "axios";
const baseURL =import.meta.env.VITE_BASEURL;


export default axios.create({
    baseURL: baseURL,
    headers: {
        "x-auth-token" : `${localStorage.getItem("authToken")}`
    }
});