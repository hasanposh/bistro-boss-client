import PropTypes from "prop-types";
const FoodCard = ({ item }) => {
  const { recipe, image, price, name } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative ">
        <img src={image} alt="Shoes" className="w-full" />
      </figure>
      <p className="p-3 rounded-lg bg-gray-900 text-white absolute top-4 right-4">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
        <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-600 border-yellow-600 hover:text-yellow-600 hover:border-yellow-600">
          Order Now
        </button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
};

export default FoodCard;
