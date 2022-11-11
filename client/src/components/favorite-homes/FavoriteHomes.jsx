import React from "react";

import "./FavoriteHomes.css";

const favorites = [
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1539922631499-09155cc609a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];

const FavoriteHomes = () => {
  return (
    <div className="favorites">
      <h2 className="title">Homes guests love</h2>
      <div className="favorites__container">
        {favorites.map((favorite, idx) => (
          <div key={idx}>
            <img className="favorite__img" src={favorite} alt="hotel" />
            <h4 className="favorite__title">Windsor Tower Hotel</h4>
            <span className="favorite__location">Prague</span>
            <p>Starting from $14,678,250</p>
            <p>
              <span className="favorite__rate">8.2</span>
              <span>Excellent .</span>
              <span>689 reviews</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteHomes;
