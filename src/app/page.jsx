import "./main.css";
import Item from "../components/item/item";
import { products } from "../data/products";
import Blog from "../components/blog/blog";
import { blogs } from "../data/blogs";

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="home__section home__section--hero">
        <div className="home__hero">
          <div className="home__hero-left">
            <div className="home__hero-products"></div>

            <div className="home__hero-overlay home__desctop-element">
              <h1 className="home__hero-title">Знижка -20%</h1>
              <p className="home__hero-text">
                На весь асортимент бренду rejuran
              </p>
              <button className="home__hero-btn">з 14.11 по 28.11</button>
            </div>

            <div className="home__hero-overlay-tablet home__tablet-element">
              <p className="home__hero-title">Some big header with words</p>

              <button className="home__hero-btn-tablet">
                до каталогу
                <img src="icons/arrov.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="home__hero-right">
            <div className="home__hero-promo-content home__tablet-element">
              <div className="home__hero-promo-title">обличчя</div>
              <div className="home__hero-promo-info">
                <div className="home__hero-promo-info-top">
                  <p>100$</p>
                  <img src="icons/arrov_circle.svg" alt="" />
                </div>
                <p className="home__hero-promo-name">name of the product</p>
                <div className="home__hero-promo-img">
                  <img src="/images/hero_tblt-promo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="home__section home__section--bestsellers">
        <div className="home__section-top">
          <h2 className="home__section-title">Бестселери</h2>

          <nav className="home__categories">
            <ul className="home__categories-list home__tablet-element">
              <li className="home__categories-item">Обличчя</li>
              <li className="home__categories-item">Губи</li>
              <li className="home__categories-item">Тіло</li>
            </ul>

            <button className="home__section-link">
              дивитись всі
              <img src="icons/arrov.svg" alt="" />
            </button>
          </nav>
        </div>
        <ul className="home__categories-list home__tablet-element home__mobile-element ">
          <li className="home__categories-item">Обличчя</li>
          <li className="home__categories-item">Губи</li>
          <li className="home__categories-item">Тіло</li>
        </ul>

        <ul className="home__products">
          {products.map((product) => (
            <Item
              key={product.id}
              product={product}
              badges={[{ type: "best", label: "BEST!" }]}
            />
          ))}
        </ul>
        <div className="home__slider">
          <img src="icons/slider.svg" alt="slider" />
        </div>
      </section>

      {/* INFO + FAQ */}
      <section className="home__section home__section--info">
        <div className="home__info">
          <div className="home__info-left">
            <div className="home__info-cta">
              <span className="home__info-label">Документи</span>

              <button className="home__info-btn">
                <span className="home__info-btn-icon">
                  <img src="icons/arrov_circle.svg" alt="" />
                </span>

                <div className="home__info-btn-text">
                  <h3>Хочете дізнатись більше?</h3>
                  <p>
                    Прочитайте усі наші правила та дізнайтесь про політики тут
                  </p>
                </div>
              </button>
            </div>
          </div>

          <div className="home__faq">
            <details className="home__faq-item">
              <summary className="home__faq-question">
                <span className="home__faq-title">Коли буде доставка?</span>
                <span className="home__faq-toggle"></span>
              </summary>
              <p className="home__faq-answer">
                Ми здійснюємо доставку Новою Поштою, строки доставки 3–5 днів.
              </p>
            </details>

            <details className="home__faq-item">
              <summary className="home__faq-question">
                <span className="home__faq-title">Як повернути товар?</span>
                <span className="home__faq-toggle"></span>
              </summary>
              <p className="home__faq-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </details>

            <details className="home__faq-item">
              <summary className="home__faq-question">
                <span className="home__faq-title">Як здійснюється оплата?</span>
                <span className="home__faq-toggle"></span>
              </summary>
              <p className="home__faq-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </details>

            <details className="home__faq-item">
              <summary className="home__faq-question">
                <span className="home__faq-title"> Чому ми такі класні?</span>
                <span className="home__faq-toggle"></span>
              </summary>
              <p className="home__faq-answer">
                Бо робимо нормально, а не абияк.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* NEW */}
      <section className="home__section home__section--new">
        <div className="home__section-top">
          <h2 className="home__section-title">Нове!</h2>
          <button className="home__section-link">
            дивитись всі <img src="icons/arrov.svg" alt="" />
          </button>
        </div>

        <ul className="home__products">
          {products.map((product) => (
            <Item
              key={product.id}
              product={product}
              badges={[{ type: "new", label: "NEW" }]}
            />
          ))}
        </ul>
        <div className="home__slider">
          <img src="icons/slider.svg" alt="slider" />
        </div>
      </section>

      {/* SALE */}
      <section className="home__section home__section--sale">
        <div className="home__sale">
          <div className="home__sale-content">
            <div className="home__sale-info">
              <p>Акція -20% </p>
              <p className="home__sale-text">на засоби для засмаги</p>
            </div>
            <div className="home__sale-actions">
              <button className="home__sale-btn">все для засмаги</button>

              <button className="home__sale-link">
                до каталогу <img src="icons/arrov.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONS */}
      <section className="home__section home__section--promotions">
        <div className="home__section-top">
          <h2 className="home__section-title">Акції</h2>
          <button className="home__section-link">
            дивитись всі <img src="icons/arrov.svg" alt="" />
          </button>
        </div>

        <ul className="home__products">
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </ul>
        <div className="home__slider">
          <img src="icons/slider.svg" alt="slider" />
        </div>
      </section>

      {/* BLOG */}
      <section className="home__section home__section--blog">
        <div className="home__section-top">
          <h2 className="home__section-title">Блог</h2>
          <button className="home__section-link">
            дивитись всі <img src="icons/arrov.svg" alt="" />
          </button>
        </div>

        <ul className="home__blogs">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </ul>
      </section>
    </main>
  );
}
