import React from "react";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import style from "./Comp.module.css";

const Comp = ({ countries }) => {
  const { cases, country } = countries;
  return (
    <NavLink to={`/country/${country}`} className={style.navlink}>
      <div className={style.container}>
        <h4 className={style.heading}>{country}</h4>
        <h2 className={style.number}>
          <span className={style.total}>Total</span>
          <CountUp start={0} end={cases} separator="," duration={1} />
          <span className={style.case}>cases</span>
        </h2>
      </div>
    </NavLink>
  );
};

export default Comp;
