import axios from "axios";

const url_local = "127.0.0.1:8000";
const user = localStorage.getItem("user-token")
  ? JSON.parse(localStorage.getItem("user-token"))
  : {};
const Api = {
    
    signin: function(payload) {
        return (
            axios.post(`${url_local}login`, payload)
            .then(function(response) {
                return response.data;
            })
        );
    },
    signup: function(payload) {
        return (
            axios.post(`${url_local}register`, payload)
            .then(function(response) {
                return response.data;
            })
        );
    },

    auth: function() {
            const userToken = localStorage.getItem("user-token")
            ? JSON.parse(localStorage.getItem("user-token"))
            : {};
        return (
            axios.get(`${url_local}auth`, {headers: { 'Authorization': userToken.tokenType+" "+userToken.accessToken }})
            .then(function(response) {
                return response.data;
            })
        );
    },
}

export default Api;