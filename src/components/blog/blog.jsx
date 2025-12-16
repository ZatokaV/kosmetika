import "./blog.css";

export default function Blog({ blog }) {
  return (
    <li className="blog-card">
      <article className="blog-card__inner">
        <div className="blog-card__media">
          <img
            className="blog-card__image"
            src={blog.image}
            alt={blog.title}
          />

          <button className="blog-card__action" aria-label="Read blog">
            <img src="icons/arrov_circle.svg" alt="" />
          </button>
        </div>

        <div className="blog-card__content">
          <time className="blog-card__date" dateTime="2025-09-01">
            {blog.date}
          </time>

          <div className="blog-card__text">
            <h3 className="blog-card__title">{blog.title}</h3>
            <p className="blog-card__description">{blog.description}</p>
          </div>
        </div>
      </article>
    </li>
  );
}
