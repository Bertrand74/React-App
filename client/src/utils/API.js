/*
  Ce fichier permet de lancer une requête d’authentification, d’enregistrement et
  comporte aussi deux méthodes permettant de vérifier si l’utilisateur 
  est connecté à partir du localStorage.
  */

import axios from "axios";
const headers = {
  "Content-Type": "application/json",
};
const burl = "http://localhost:8800";

export default {
  login: function (email, password) {
    return axios.post(
      `${burl}/user/login`,
      {
        email,
        password,
      },
      {
        headers: headers,
      }
    );
  },
  signup: function (send) {
    return axios.post(`${burl}/user/signup`, send, { headers: headers });
  },

  isAuth: function () {
    return localStorage.getItem("token") !== null;
  },
  logout: function () {
    localStorage.clear();
  },
};
