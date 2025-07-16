import "./reviewCard.scss";

const ReviewCard = () => {
  return (
    <div className="review-card">
      <div className="review-card__image"></div>
      <div className="review-text">
        {/* <p className="review-text__text">
          Sales Fortuna made managing sales easier and helped us focus on
          customers. Its tools have been crucial for our growth and client
          satisfaction.
        </p> */}
        <p className="review-text__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          cupiditate ut voluptatibus voluptatem inventore ea deleniti debitis
          qui maxime iusto tempora, accusamus voluptatum, magni a quaerat ipsum
          unde amet veniam! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ratione cupiditate ut voluptatibus voluptatem inventore ea
          deleniti debitis qui maxime iusto tempora, accusamus voluptatum, magni
          a quaerat ipsum unde amet veniam!
        </p>
      </div>
      <div className="reviewer-section">
        <div className="reviewer_section__reviewer-photo"></div>
        <div className="reviewer__info reviewer">
          <p className="reviewer__name">Ethan Morgan</p>
          <p className="reviewer__position">
            Founder and CEO, Serene Living Products
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
