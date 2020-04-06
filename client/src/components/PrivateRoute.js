/* 
Nous devons donc créer un composant Privateroute 
jouant le rôle d’un middleware pour les routes sécurisées.
Puis au sein du fichier /client/src/App.js on défini nos routes
*/

import React from "react";
import API from "../utils/API.js";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (API.isAuth() === false) {
        return <Redirect to="/" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);
