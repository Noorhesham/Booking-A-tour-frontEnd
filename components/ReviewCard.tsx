import { reviewProp } from "@/types/types";
const ReviewCard = ({ review }: { review: reviewProp }) => {
  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img src={`/img/users/${review.user.photo}`} alt={review.user.name} className="reviews__avatar-img" />
        <h6 className="reviews__user">{review.user.name}</h6>
      </div>
      <p className="reviews__text">{review.review}</p>
      <div className="reviews__rating">
        {Array.from(Array(5).keys()).map((star) => (
          <svg className={`reviews__star reviews__star--${star < review.rating ? "active" : "inactive"}`}>
            <use href="/img/icons.svg#icon-star"></use>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
