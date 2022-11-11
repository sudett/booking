import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Gallery from "../../components/gallery/Gallery";

import { useGeneralContext } from "../../contexts/general-context/GeneralContext";

import { MdLocationOn } from "react-icons/md";

import "./SingleHotel.css";

const hotelImages = [
  "https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  "https://images.unsplash.com/photo-1554009975-d74653b879f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1630582837298-49d1927726e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  "https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80",
  "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
];

const SingleHotel = () => {
  const { hotelId } = useParams();
  const { dispatch } = useGeneralContext();
  const [galleryIsOpen, setGalleryIsOpen] = useState(false);

  useEffect(() => {
    dispatch({ type: "setPage", payload: "single-hotel" });
  });

  const identifyClasses = (idx) => {
    if (idx === 0) return "gallery__img0";
    if (idx === 1) return "gallery__img1";
  };

  return (
    <>
      <div className="single-hotel">
        <div className="single-hotel__top">
          <div>
            <h2 className="single-hotel__title">
              Academy Plaza HotelOpens in new window
            </h2>
            <p className="single-hotel__location">
              <MdLocationOn className="icon icon--location" />
              Parnell Square, Dublin
            </p>
            <p>300 m from center . Very Good</p>
          </div>
          <button className="btn btn--book">Book now</button>
        </div>
        <div className="single-hotel__gallery">
          {hotelImages
            .filter((img, idx) => idx < 5)
            .map((img, idx) => (
              <img
                onClick={() => setGalleryIsOpen(true)}
                key={idx}
                className={`${identifyClasses(idx)} single-hotel__gallery-img`}
                src={img}
                alt="hotel"
              />
            ))}
        </div>

        <div className="single-hotel__info">
          <div>
            <h3 className="single-hotel__info-title">
              Stay in the heart of Dublin
            </h3>
            <p>
              Just off O'Connell Street, Academy Plaza Hotel is a 5-minute walk
              from Connolly Train Station. The hotel features stylish,
              air-conditioned rooms with free WiFi, an on-site restaurant. The
              modern bedrooms at the Academy Plaza Hotel are decorated in rich
              colors. Rooms feature flat-screen TVs, work desks and
              marble-finished bathrooms. Plaza Bar & Grill serves traditional
              dishes using fresh local produce. Plaza Bar and Grill offers a
              variety of teas and coffees. Guests can enjoy traditional full
              Irish and continental breakfast in Oscars Restaurant, which is
              located within the hotel.
            </p>
          </div>
          <div className="single-hotel__info-box">
            <div>
              <h4 className="single-hotel__info-box-title">
                Property Highlights
              </h4>
              <p>
                Located in the heart of Dublin, this hotel has an excellent
                location score of 9.3
              </p>
            </div>
            <div>
              <h4 className="single-hotel__info-box-title">Breakfast Info</h4>
              <p>Full English/Irish, Vegetarian, Gluten-free, Buffet</p>
            </div>
            <button className="btn btn--reserve">Reserve</button>
          </div>
        </div>
      </div>
      {galleryIsOpen && (
        <Gallery images={hotelImages} setGalleryIsOpen={setGalleryIsOpen} />
      )}
    </>
  );
};

export default SingleHotel;
