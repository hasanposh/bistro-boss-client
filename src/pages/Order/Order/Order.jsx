import { useState } from "react";
import orderCover from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <div>
        <Cover coverimage={orderCover} coverTitle={"order food"} />
      </div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="py-8">
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <OrderTab itemName={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab itemName={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab itemName={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab itemName={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTab itemName={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Order;
