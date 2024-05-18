import FoodCard from "../../../components/FoodCard/FoodCard";
import PropTypes from "prop-types";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ itemName }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {itemName.map((item) => (
            <FoodCard item={item} key={item._id} />
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

OrderTab.propTypes = {
  itemName: PropTypes.object,
};

export default OrderTab;
