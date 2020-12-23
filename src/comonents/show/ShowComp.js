import React from "react";

import NumberFormat from "react-number-format";
import style from "./ShowComp.module.css";

const ShowComp = ({ countryData }) => {
  const {
    country,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    active,
    critical,
    casesPerOneMillion,
    totalTests,
    testsPerOneMillion
  } = countryData;
  return (
    <div>
      <h2 className={style.date}>{new Date().toDateString()}</h2>
      <div className={style.firstRow}>
        <div className={style.heading}>
          <p>{country}</p>
        </div>

        <div className={style.headerBox}>
          <div className={style.box}>
            <p>Total cases</p>
            <NumberFormat
              className={style.number}
              value={cases}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>

          <div className={style.box}>
            <p>Recovered</p>
            <NumberFormat
              className={style.number}
              value={recovered}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
        </div>
      </div>

      <div className={style.secondRow}>
        <div className={style.box}>
          <p>New Cases</p>
          <NumberFormat
            className={style.number}
            value={todayCases}
            displayType={"text"}
            thousandSeparator={true}
          />
        </div>

        <div className={style.box}>
          <p>Today Deaths</p>
          <NumberFormat
            className={style.number}
            value={todayDeaths}
            displayType={"text"}
            thousandSeparator={true}
          />
        </div>

        <div className={style.box}>
          <p>Critical</p>
          <NumberFormat
            className={style.number}
            value={critical}
            displayType={"text"}
            thousandSeparator={true}
          />
        </div>

        <div className={style.box}>
          <p>Active</p>
          <NumberFormat
            className={style.number}
            value={active}
            displayType={"text"}
            thousandSeparator={true}
          />
        </div>
      </div>

      <div className={style.thirdRow}>
        <div className={style.box}>
          <p>Total Deaths</p>
          <NumberFormat
            className={style.number}
            value={deaths}
            displayType={"text"}
            thousandSeparator={true}
          />
        </div>

        <div className={style.box}>
          <p>Total Tests</p>
          <NumberFormat
            className={style.number}
            value={totalTests}
            displayType={"text"}
            thousandSeparator={true}
          />
        </div>

        <div className={style.box}>
          <p>Cases per million</p>
          <NumberFormat
            className={style.number}
            value={casesPerOneMillion}
            displayType={"text"}
            thousandSeparator={true}
          />
          /M
        </div>

        <div className={style.box}>
          <p>Tests per million</p>
          <NumberFormat
            className={style.number}
            value={testsPerOneMillion}
            displayType={"text"}
            thousandSeparator={true}
          />
          /M
        </div>
      </div>
    </div>
  );
};

export default ShowComp;
