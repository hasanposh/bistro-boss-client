import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section>
      <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
      <h3>menu {menu.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-10">
        {
            menu.map((item) => <MenuItem item={item} key={item._id} />)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
