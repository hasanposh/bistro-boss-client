import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'


const OurMneu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover coverimage={menuImg} coverTitle={"Our Menu"} />
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"} />
       {/* offered menu items */}
       <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={dessert} coverTitle="dessert" coverimage={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} coverTitle={"pizza"} coverimage={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} coverTitle={"salad"} coverimage={saladImg}></MenuCategory>
            <MenuCategory items={soup} coverTitle={"soup"} coverimage={soupImg}></MenuCategory>
    </div>
  );
};

export default OurMneu;
