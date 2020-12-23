import React, { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";

import style from "./Global.module.css";
import Loader from "../../loader/Loader";

const GLOBAL_URL = "https://coronavirus-19-api.herokuapp.com/all";
const Global2 = () => {
  const [globalData, setGlobalData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(GLOBAL_URL).then((res) => {
      console.log(res.data);
      setGlobalData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h2 className={style.date}>{new Date().toDateString()}</h2>
      <div className={style.container}>
        <div className={style.cases}>
          <h3>Total cases</h3>
          <h2>
            <NumberFormat
              className={style.number}
              value={globalData.cases}
              displayType={"text"}
              thousandSeparator={true}
            />
          </h2>
        </div>

        <div className={style.recovered}>
          <h3>Total Recoverd</h3>
          <h2>
            <NumberFormat
              className={style.number}
              value={globalData.recovered}
              displayType={"text"}
              thousandSeparator={true}
            />
          </h2>
        </div>

        <div className={style.deaths}>
          <h3>Total Deaths</h3>
          <h2>
            <NumberFormat
              className={style.number}
              value={globalData.deaths}
              displayType={"text"}
              thousandSeparator={true}
            />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Global2;
