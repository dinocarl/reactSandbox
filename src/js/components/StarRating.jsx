import React from 'react';

const StarRating = ({ ratingPct }) => (
  <span className="rating-unit-display">
    <span className="rating-bg-stars" />
    <span
      className="rating-fg-stars"
      style={
        {
          width: ratingPct
        }
      }
    >
      {ratingPct}
    </span>
  </span>
);

export default StarRating;
