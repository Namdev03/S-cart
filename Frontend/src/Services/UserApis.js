import axiosInstance from "./Axios";
import endPoits from "../Routes/ApiEndpoinst";
async function register(payload) {
    try {
        const response = await axiosInstance.post(endPoits.REGISTER,payload)
        return response?.data
    } catch (error) {
        return(error?.response?.data?.message)
    }
}
async function login(payload) {
    try {
        const response = await axiosInstance.post(endPoits.LOGIN,payload)
        return response?.data
    } catch (error) {
        return(error?.response?.data?.message)
    }
}
async function logout(payload) {
    try {
        const response = await axiosInstance.get(endPoits.LOGOUT,payload)
        return response?.data
    } catch (error) {
        return(error?.response?.data?.message)
    }
}
async function verify(payload) {
    try {
        const response = await axiosInstance.get(endPoits.VERIFY,payload)
        return response?.data
    } catch (error) {
        return(error?.response?.data?.message)
    }
}
export {register,login,logout,verify}