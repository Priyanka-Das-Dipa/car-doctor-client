import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-8 pt-8">
          <img src={img} alt="image" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex justify-between items-center gap-10">
            <div className="text-left">
              <h2 className="card-title">{title}</h2>
              <p className="font-bold text-orange-600">Price: ${price}</p>
            </div>
            <div className="card-actions">
              <button className="text-orange-600 "><FaArrowRight></FaArrowRight></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
