import React from "react";
import "./footer.css";

const footerData = {
  catalog: [
    "Бренди",
    "Обличчя",
    "Губи",
    "Засмага",
    "Чоловікам",
    "Тіло",
    "Волосся",
    "Макіяж",
    "New",
    "Sale",
  ],
  forCustomers: [
    "Privacy Policy",
    "Cookies",
    "Доставка та оплата",
    "Умови акцій",
    "Повернення",
    "Договір та оферта",
    "Документи",
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Верхня частина футера */}
        <div className="footer__top">
          <div className="footer__branding">
            <div className="footer__logo">
              <img src="/icons/Logo-footer.svg" alt="Beauty Store logo" />
            </div>

            <ul className="footer__socials">
              <li>
                <a href="#">
                  <img src="/icons/telegram.svg" alt="Telegram icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/icons/instagram.svg" alt="Instagram icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/icons/watsup.svg" alt="WhatsApp icon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__subscribe">
            <div className="footer__subscribe-text">
              <p className="footer__subscribe-title">
                Підпишіться на наші новини
              </p>
              <p className="footer__subscribe-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <form className="footer__subscribe-form">
              <input
                className="footer__subscribe-form-input"
                type="email"
                placeholder="Введіть свій email"
                required
              />
              <button type="submit" className="footer__subscribe-btn">
                Підписатись
              </button>
            </form>

            <p className="footer__subscribe-policy">
              *By subscribing you agree to with our Privacy Policy
            </p>
          </div>
        </div>

        {/* Нижня частина футера */}
        <div className="footer__links">
          <section className="footer__section">
            <h3 className="footer__section-title">Каталог</h3>
            <ul className="footer__section-list">
              {footerData.catalog.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer__section">
            <h3 className="footer__section-title">Покупцям</h3>
            <ul className="footer__section-list">
              {footerData.forCustomers.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer__section">
            <h3 className="footer__section-title">Про нас</h3>
            <ul>
              <li>
                <a href="#">Контакти</a>
              </li>
              <li>
                <a href="#">Блог</a>
              </li>
            </ul>
          </section>
        </div>

        {/* Підвал */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © 2025 Beauty Store. All rights reserved.
            </p>
            <p className="footer__credits">made by circle</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
