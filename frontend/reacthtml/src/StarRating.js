// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const StarRating = () => {
    

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (

        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <button
                    type="button"
                    key={index}
                    className={index + 1 <= (hover || rating) ? "on" : "off"}
                    onClick={() => setRating(index + 1)}
                    onMouseEnter={() => setHover(index + 1)}
                    onMouseLeave={() => setHover(rating)}
                >
                    <span className="star">&#9733;</span>
                </button>
            ))}
        </div>
    );
};

export default StarRating;