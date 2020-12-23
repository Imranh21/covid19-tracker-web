import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        Designed & Built by{" "}
        <a href="https://muhammadimran.netlify.com" target="_blank">
          Muhammad Imran
        </a>
      </p>
    </footer>
  );
}

export default Footer;
