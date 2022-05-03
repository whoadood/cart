import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

export default function Rating({ prod }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <ul className="rating-container">
      {stars.map((star) =>
        star < Math.floor(prod.rating.rate) ? (
          <AiFillStar key={prod.id + star} />
        ) : star === Math.floor(prod.rating.rate) ? (
          <BsStarHalf key={prod.id + star} />
        ) : (
          <AiOutlineStar key={prod.id + star} />
        )
      )}
    </ul>
  );
}
