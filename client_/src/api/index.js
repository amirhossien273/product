import axios from "axios";

const url_local = "http://127.0.0.1:8000/api/";
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

    storeComment: function(payload) {
        const userToken = localStorage.getItem("user-token")
        ? JSON.parse(localStorage.getItem("user-token"))
        : {};
        return (
            axios.post(`${url_local}comments/store`, payload ,{headers: { 'Authorization': "bearer" +" "+userToken.access_token }})
            .then(function(response) {
                return response.data;
            })
        );
    },
    products: function() {
            const userToken = localStorage.getItem("user-token")
            ? JSON.parse(localStorage.getItem("user-token"))
            : {};

        return (
            axios.get(`${url_local}products`, {headers: { 'Authorization': "bearer" +" "+userToken.access_token }})
            .then(function(response) {
                return response.data;
            })
        );
    },
}

export default Api;