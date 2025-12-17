import React, { useState } from "react";
import AuthInput from "./AuthInput";
import "./auth.css";

export default function AuthModal({ onClose }) {
  const [authType, setAuthType] = useState("register");
  const [isSuccess, setIsSuccess] = useState(false);

  const isRegister = authType === "register";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Зібрані дані форми:", data);

    if (isRegister) {
      setIsSuccess(true);
    } else {
      console.log("Логін успішний");
      onClose();
    }
  };

  return (
    <div className="auth__overlay" onClick={onClose}>
      <div className="auth__modal" onClick={(e) => e.stopPropagation()}>
        {isSuccess ? (
          <div className="auth__success">
            <h3 className="auth__success-title">РЕЄСТРАЦІЯ УСПІШНА!</h3>

            <p className="auth__success-text">
              Ми здійснюємо доставку Новою Поштою, строки доставки приблизно 3–5
              днів по всій Україні.
            </p>

            <button className="auth__submit-btn" onClick={onClose}>
              Продовжити
            </button>
          </div>
        ) : (
          <>
            <div className="auth__tabs">
              <button
                className={`auth__tab ${
                  !isRegister ? "auth__tab--active" : ""
                }`}
                onClick={() => setAuthType("login")}
              >
                Вхід
              </button>
              <button
                className={`auth__tab ${isRegister ? "auth__tab--active" : ""}`}
                onClick={() => setAuthType("register")}
              >
                Реєстрація
              </button>
            </div>

            <form className="auth__form" onSubmit={handleSubmit}>
              {isRegister ? (
                <>
                  <AuthInput name="firstName" label="Ваше Ім'я" required />
                  <AuthInput name="lastName" label="Ваше Прізвище" required />
                  <AuthInput name="phone" label="Телефон" type="tel" required />
                  <AuthInput
                    name="password"
                    label="Пароль"
                    type="password"
                    required
                  />

                  <div className="auth__checkbox-wrapper">
                    <input
                      type="checkbox"
                      id="rules"
                      name="rules"
                      className="auth__checkbox"
                      required
                    />
                    <label htmlFor="rules" className="auth__checkbox-label">
                      Я приймаю <a href="#">Положення</a> та{" "}
                      <a href="#">Правила...</a>
                    </label>
                  </div>

                  <button type="submit" className="auth__submit-btn">
                    Зареєструватись
                  </button>
                </>
              ) : (
                <>
                  <AuthInput name="phone" label="Телефон" type="tel" required />
                  <AuthInput
                    name="password"
                    label="Пароль"
                    type="password"
                    required
                  />

                  <button type="submit" className="auth__submit-btn">
                    Увійти
                  </button>

                  <button type="button" className="auth__google-btn">
                    <img src="/icons/google.svg" alt="G" />
                    Увійти за допомогою Google
                  </button>
                </>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
