import axios from "axios" ;

const API = "http://localhost:8080/api/auth";

export const loginAdmin = async (email, password) => {

    const res = await axios.post(`${API}/login`, {email,password});
    console.log(email);
    return res.data;


};

export const registerAdmin = async (email,password ) => {


    const res = await axios.post(`${API}/register`, {email,password});
    return res.data;
}