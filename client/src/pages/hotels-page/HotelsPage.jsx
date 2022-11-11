import React, { useEffect } from "react";

import { useGeneralContext } from "../../contexts/general-context/GeneralContext";

import actionTypes from "../../contexts/general-context/ActionTypes";

import SearchBox from "../../components/search-box/SearchBox";

import "./HotelsPage.css";

const HotelsPage = () => {
  const { dispatch } = useGeneralContext();

  useEffect(() => {
    dispatch({ type: actionTypes.SET_PAGE, payload: "hotels" });
  }, []);

  return (
    <div className="hotels">
      <SearchBox />
      <ul className="hotels__container"></ul>
    </div>
  );
};

export default HotelsPage;
