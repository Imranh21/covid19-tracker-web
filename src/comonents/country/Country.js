import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Comp from "./Comp";
import style from "./Comp.module.css";
import Loader from "../../loader/Loader";

const COUNTRY_URL = "https://coronavirus-19-api.herokuapp.com/countries";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(COUNTRY_URL).then((res) => {
      setCountries(res.data);
      setLoading(false);
    });
  }, []);

  const onChangeHandler = (e) => {
    setSearchField(e.target.value);
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h2 className={style.date}>{new Date().toDateString()}</h2>
      <div className={style.searchBox}>
        <FontAwesomeIcon icon={faSearch} />
        <input
          className={style.input}
          type="text"
          placeholder="Search Country"
          onChange={onChangeHandler}
          value={searchField}
        />
      </div>
      <div className={style.section}>
        {countries
          .filter((value) => {
            if (searchField === "") {
              return value;
            } else if (
              value.country
                .toLowerCase()
                .includes(searchField.toLocaleLowerCase())
            ) {
              return value;
            }
          })
          .map((country) => {
            return <Comp countries={country} />;
          })}
      </div>
    </>
  );
};

export default Country;
