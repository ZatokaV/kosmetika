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
              <li className="header__menu-item">
                <a href="/catalog" className="header__menu-link">
                  Каталог
                </a>
              </li>
              <li className="header__menu-item">
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
            <div className="header__promo-buttons">
              <button className="header__promo-button">Новинки</button>
              <div className="header__promo-separator"></div>
              <button className="header__promo-button">Акції</button>
            </div>

            <div className="header__contact-button">
              <button className="header__contact-button-inner">Контакти</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
