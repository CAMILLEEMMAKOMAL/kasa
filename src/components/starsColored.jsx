import React from "react";

export default function StarsColored(props) {
  let nbStars = props.rating;

  const maxStar = 5;

  return (
    <>
      {Array.from({ length: maxStar }, (_, i) => (
        <svg key={i} className={i < nbStars ? "active-star" : ""} xmlns="http://www.w3.org/2000/svg">
          <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
        </svg>
      ))}
    </>
  );
}