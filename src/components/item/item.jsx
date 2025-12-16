import "./item.css";

export default function Item({ product, badges = [] }) {
  return (
    <li className="product-card">
      <div className="product-card__media">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />

        <div className="product-card__badges">
          {product.oldPrice && (
            <div className="product-card__badge product-card__badge--discount">
              -10%
            </div>
          )}

          {badges.map((badge) => (
            <div
              key={badge.type}
              className={`product-card__badge product-card__badge--${badge.type}`}
            >
              {badge.label}
            </div>
          ))}
        </div>

        <button className="product-card__add-btn">
          <img src="icons/plus_circle.svg" alt="add" />
        </button>
      </div>

      <div className="product-card__content">
        <div className="product-card__meta">
          <div className="product-card__rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={
                  star <= product.rating
                    ? "icons/star-fool.svg"
                    : "icons/star-empty.svg"
                }
                alt=""
              />
            ))}
            <span>({product.reviews})</span>
          </div>

          <div className="product-card__price">
            <span className="product-card__price-current">
              {product.price.toLocaleString()}₴
            </span>

            {product.oldPrice && (
              <span className="product-card__price-old">
                {product.oldPrice.toLocaleString()}₴
              </span>
            )}
          </div>
        </div>

        <p className="product-card__title">{product.title}</p>
      </div>
    </li>
  );
}
