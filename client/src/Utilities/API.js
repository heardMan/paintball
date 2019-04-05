import axios from "axios";

export default {
    registerUser: function(user){
        return axios.post("/api/auth/register", user);
    },
    signInUser: function(user){
        return axios.post("/api/auth/signIn", user);
    }
};