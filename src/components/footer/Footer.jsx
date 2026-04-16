import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        This project was developed by{" "}
        <a
          href="https://github.com/punSavitri"
          target="_blank"
          rel="noreferrer"
        >
          Savitri Pun
        </a>{" "}
        available on{" "}
        <a
          href="https://github.com/punSavitri/recipeapp-react.git"
          target="_blank"
          rel="noreferrer"
        >
          as open-source on GitHub repository
        </a>{" "}
        and deployed using{" "}
        <a
          href="https://recipe-app-react.savitripun.co.uk/"
          target="_blank"
          rel="noreferrer"
        >
          Hostinger platform
        </a>
      </p>
    </div>
  );
};

export default Footer;
