import axios from "axios";

export default {
    registerUser: function(user){
        return axios.post("/api/auth/register", user);
    },
    signInUser: function(user){
        return axios.post("/api/auth/signIn", user);
    },
    getUsers: function(){
        return axios.get("/api/users/all");
    },
    checkAuth: function(token){
        return axios.get("api/auth/verify", token);
    },
    createProp: function(token){
        return axios.post("api/auth/properties", token);
    }
};