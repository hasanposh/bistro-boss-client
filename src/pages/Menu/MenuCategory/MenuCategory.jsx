import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverTitle, coverimage }) => {
  return (
    <div>
      {coverTitle && <Cover coverimage={coverimage} coverTitle={"our menu"} />}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-10">
        {items.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      <Link to={`/order/${coverTitle}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
    </div>
  );
};

export default MenuCategory;
