import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropTypes from "prop-types";

const MenuCategory = ({ items, coverTitle, coverImage }) => {
  return (
    <div>
      {coverTitle && <Cover coverimage={coverImage} coverTitle={coverTitle} />}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-10">
        {items.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      <Link to={`/order/${coverTitle}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

MenuCategory.propTypes = {
  coverTitle: PropTypes.string,
  coverImage: PropTypes.any,
  items: PropTypes.object,
};

export default MenuCategory;
