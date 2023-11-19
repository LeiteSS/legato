import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = () => {
    const [rating, setRating] = useState<number>(5);
    const [hover, setHover] = useState<number>(0);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            className="star"
                            size={100}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#d4d5d9"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)} />
                    </label>
                )
            })}
        </div>
    );
};

export default StarRating;