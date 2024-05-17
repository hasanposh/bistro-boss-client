import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === "popular")

  return (
    <section>
      <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
      <h3>menu {menu.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-10">
        {
            popular.map((item) => <MenuItem item={item} key={item._id} />)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
