import React from "react";

import "./Cities.css";

const cities = [
  "https://images.unsplash.com/photo-1589327934270-659692dd1d28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
];

const Cities = () => {
  return (
    <div className="cities">
      {cities.map((city, idx) => (
        <div key={idx} className="cities__group">
          <img className="cities__image" src={city} alt="city" />
          <div className="title__container">
            <h2>Berlin</h2>
            <h3>250 properties</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cities;
