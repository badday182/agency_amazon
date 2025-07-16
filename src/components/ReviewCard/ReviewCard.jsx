import "./reviewCard.scss";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-card__image">
        <img src={review.companyLogo} alt="Company logo" />
      </div>
      <div className="review-text">
        <p className="review-text__text">{review.reviewText}</p>
      </div>
      <div className="reviewer-section">
        <div className="reviewer_section__reviewer-photo">
          <img src={review.reviewer.photo} alt={review.reviewer.name} />
        </div>
        <div className="reviewer__info reviewer">
          <p className="reviewer__name">{review.reviewer.name}</p>
          <p className="reviewer__position">{review.reviewer.position}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
