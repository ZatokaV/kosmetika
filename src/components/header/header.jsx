import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="/icons/logo.svg" alt="Beauty Store logo" />
        </div>

        <nav className="header__nav" aria-label="Головна навігація">
          <div className="header__nav-left">
            <button className="header__search" aria-label="Пошук">
              <img src="/icons/lupa.svg" alt="" />
            </button>

            <ul className="header__menu">
              <li className="header__menu-item header__desctop-element">
                <a href="/catalog" className="header__menu-link">
                  Каталог
                </a>
              </li>
              <li className="header__menu-item header__tablet-element">
                <a href="/login" className="header__menu-link">
                  Увійти
                </a>
              </li>
              <li className="header__menu-item">
                <a href="/cart" className="header__menu-link">
                  Кошик (0)
                </a>
              </li>
            </ul>
          </div>

          <div className="header__nav-right">
            <div className="header__promo-buttons header__tablet-element">
              <button className="header__promo-button">Новинки</button>
              <div className="header__promo-separator"></div>
              <button className="header__promo-button">Акції</button>
            </div>

            <div className="header__contact-button header__tablet-element">
              <button className="header__contact-button-inner">Контакти</button>
            </div>

            <div className="header__burger">
              <input
                type="checkbox"
                id="burger-checkbox"
                class="burger-checkbox"
              ></input>
              <label for="burger-checkbox" class="burger">
                <span className="burger_border-line"></span>
                <span className="burger_centr-line"></span>
                <span className="burger_border-line"></span>
              </label>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
