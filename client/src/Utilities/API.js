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
    getUserByEmail: function(email){
        return axios.post("/api/users/byEmail", email);
    },
    getManagers: function(){
        return axios.get("/api/users/managers");
    },
    checkAuth: function(token){
        return axios.get("/api/auth/verify", token);
    },
    createTicket: function(ticket){

        return axios.post("/api/tickets", ticket);
    }, 
    createProp: function(property){
        return axios.post("/api/properties", property);
    },
    createLease: function(token){
        console.log(`Util/API: ${token}`)
        return axios.post("api/leases", token);
    }, 
    createAnnounce: function(token){
        return axios.post("api/announcements", token);
    },

    createBill: function(token){
        return axios.post("api/bills", token);
    }
};