import { Star } from "lucide-react";

type Props = {
  rating: number;
  reviews?: number;
};

const StarRating = ({ rating, reviews }: Props) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            size={16}
            className="fill-[#FFAD33] text-[#FFAD33]"
          />
        ))}

        {halfStars && (
          <div className="relative w-4 h-4">
            <Star size={16} className="absolute inset-0 fill-[#d6d3d3] text-[#d6d3d3]" />

            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star size={16} className="fill-[#FFAD33] text-[#FFAD33]" />
            </div>
          </div>
        )}

        {[...Array(emptyStars)].map((_, j) => (
          <Star key={`empty-${j}`} size={16} className="fill-[#d6d3d3] text-[#d6d3d3]" />
        ))}
      </div>

      <span className="text-sm text-gray-500">{rating}</span>

      {reviews !== undefined && (
        <span className="text-sm text-gray-500">({reviews})</span>
      )}
    </div>
  );
};

export default StarRating;
