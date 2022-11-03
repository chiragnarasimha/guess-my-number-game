import "./Header.scss";

import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__top-section">
        <button className="header__top-section__button">Again!</button>
        <span className="header__top-section__span">{`(Between 1 and 20)`}</span>
      </div>
      <div className="header__bottom-section">
        <div className="header__bottom-section__heading">
          <h1>Guess My Number</h1>
        </div>
        <div className="header__bottom-section__logo">
          <div className="header__bottom-section__logo__line" />
          <div className="header__bottom-section__logo__question-mark">?</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
