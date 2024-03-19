import { GuideProp, TourDetailsProp } from "@/types/types";
import React from "react";
import TourHeader from "./TourHeader";
import Person from "./Person";
import OverViewBox from "./OverViewBox";
import Heading from "./Heading";
import Picture from "./Picture";
import ReviewCard from "./ReviewCard";
import MapComponent from "./Map";

const Tour = ({ tour }: { tour: TourDetailsProp }) => {
  const {
    name,
    summary,
    startLocation,
    difficulty,
    duration,
    imageCover,
    startDates,
    locations,
    maxGroupSize,
    price,
    ratingsAverage,
    ratingsQuantity,
    slug,
    guides,
    images,
    reviews,
    description,
  } = tour;
  console.log(tour.reviews, tour.reviews.length);
  return (
    <>
      <TourHeader tour={tour} />
      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <Heading text="Quick facts" />
              <OverViewBox
                description="Next date"
                icon="icon-calendar"
                info={new Date(startDates[0]).toLocaleString("en-us", { month: "long", year: "numeric" })}
              />
              <OverViewBox description="Difficulty" icon="icon-trending-up" info={difficulty} />
              <OverViewBox description="Participants" icon="icon-user" info={`${maxGroupSize} people`} />
              <OverViewBox description="Rating" icon="icon-star" info={`${ratingsAverage} / 5`} />
            </div>

            <div className="overview-box__group">
              <Heading text="Your tour guides" />
              {tour.guides.map((guide: GuideProp, i: number) => (
                <Person key={i} guide={guide} />
              ))}
            </div>
          </div>
        </div>

        <div className="description-box">
          <Heading text={`About ${name}`} />
          {description.split("\n").map((desc) => (
            <p className="description__text">{desc}</p>
          ))}
        </div>
      </section>

      <section className="section-pictures">
        {images.map((image, i) => (
          <Picture key={i} img={image} index={i} name={name} />
        ))}
      </section>

      <section className="section-map">
        <MapComponent locations={locations} />
      </section>

      <section className="section-reviews">
        <div className="reviews">
          {reviews?.map((review) => (
            <ReviewCard review={review} />
          ))}
        </div>
      </section>

      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img src="/img/logo-white.png" alt="Natours logo" className="" />
          </div>
          <img src={`/img/tours/${tour.images[0]}`} alt="Tour Picture" className="cta__img cta__img--1" />
          <img src={`/img/tours/${tour.images[1]}`} alt="Tour Picture" className="cta__img cta__img--2" />

          <div className="cta__content">
            <h2 className="heading-secondary">What are you waiting for?</h2>
            <p className="cta__text">{`${duration} days. 1 adventure. Infinite memories. Make it yours today!`}</p>
            <button className="btn btn--green span-all-rows">Book tour now!</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tour;
