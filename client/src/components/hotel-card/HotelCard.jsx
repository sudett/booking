import React from "react";

import { useNavigate } from "react-router-dom";

import "./HotelCard.css";

const HotelCard = ({
  img,
  name,
  location,
  distance,
  text,
  desc,
  reviews,
  rate,
  price,
  cancellation,
  airportTaxi,
  hotelId,
}) => {
  const navigate = useNavigate();

  return (
    <li>
      <div className="hotel">
        <img className="hotel__img" src={img} alt="hotel" />
        <div className="hotel__info">
          <div className="hotel__info-left">
            <div>
              <h3 className="hotel__title">
                Academy Plaza HotelOpens in new window
              </h3>
              <p>
                <span className="hotel__location">
                  Parnell Square, Dublin .{" "}
                </span>
                <span>300 m from center</span>
              </p>

              <span className="hotel__airport-taxi">Free airport taxi</span>
            </div>
            <div>
              <p>
                Just off O'Connell Street, Academy Plaza Hotel is a 5-minute
                walk from Connolly Train Station. The hotel features stylish,
                air-conditioned rooms with free WiFi, an on-site restaurant.
              </p>

              <p className="hotel__cancellation">Free cancellation</p>
            </div>
          </div>

          <div className="hotel__info-right">
            <div className="hotel__detail">
              <div>
                <span>Very Good</span>
                <p className="hotel__review">4,267 reviews</p>
              </div>
              <span className="favorite__rate hotel__rate">8.1</span>
            </div>
            <div className="hotel__availability">
              <span className="hotel__price">$110</span>
              <button
                className="btn btn--available"
                onClick={() => navigate(`/hotels/${hotelId}`)}
              >
                See availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HotelCard;
