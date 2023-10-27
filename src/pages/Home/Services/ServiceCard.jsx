import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-8 pt-8">
          <img src={img} alt="image" className="rounded-xl" />
        </figure>
        <div className="card-body text-center">
          <div className="flex justify-between items-center gap-10">
            <div className="text-left">
              <h2 className="card-title">{title}</h2>
              <p className="font-bold text-orange-600">Price: ${price}</p>
            </div>
            <div className="card-actions">
              <Link to={`/checkOut/${_id}`}>
              <button className="text-orange-600 "><FaArrowRight></FaArrowRight></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
