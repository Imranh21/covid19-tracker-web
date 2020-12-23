import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowComp from "./ShowComp";
import style from "./ShowComp.module.css";
import Loader from "../../loader/Loader";

const Show = ({ match }) => {
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://coronavirus-19-api.herokuapp.com/countries/${match.params.name}`
      )
      .then((res) => {
        setCountryData(res.data);
      });
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={style.container}>
      <ShowComp countryData={countryData} />
    </div>
  );
};

export default Show;
