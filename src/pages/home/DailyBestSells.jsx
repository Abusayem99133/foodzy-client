import React, { useState } from "react";
import bestSell from "../../assets/bestSeller/daily/best-sell-main.png";
import buySell1 from "../../assets/bestSeller/daily/buy-sell-1.jpg";
import buySell2 from "../../assets/bestSeller/daily/→ product-2-1.jpg.png";
import buySell3 from "../../assets/bestSeller/daily/→ product-3-1.jpg.png";
import buySell4 from "../../assets/bestSeller/daily/→ product-4-1.jpg.png";
const DailyBestSells = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const tabs = [
    { key: "featured", label: "Featured" },
    { key: "popular", label: "Popular" },
    { key: "new", label: "New added" },
  ];

  const products = [
    {
      id: 1,
      status: "Save 55%",
      subName: "Hodo Foods",
      name: "All Natural Italian Chicken Meatballs",
      price: 238.85,
      oldPrice: 245.8,
      sale: "Sold: 90/120",
      img: `${buySell1}`,
      rating: "2",
    },
    {
      id: 2,
      status: "Sale",
      subName: "Hodo Foods",
      name: "Angie’s Boom chicka pop, sweet & yummy",
      price: 238.85,
      oldPrice: 245.8,
      sale: "Sold: 90/120",
      img: `${buySell2}`,
      rating: "5",
    },
    {
      id: 3,
      status: "Best sale",
      subName: "Hodo Foods",
      name: "Foster Farms Takeout Crispy Classic",
      price: 238.85,
      oldPrice: 245.8,
      sale: "Sold: 90/120",
      img: `${buySell3}`,
      rating: "2",
    },
    {
      id: 4,
      status: "Save 32%",
      subName: "Hodo Foods",
      name: "Blue Diamond Almonds Lightly Salted",
      price: 238.85,
      oldPrice: 245.8,
      sale: "Sold: 90/120",
      img: `${buySell4}`,
      rating: "4",
    },
  ];
  const getPercentage = (status) => {
    const match = status.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };
  const getBadgeColor = (status) => {
    const percentage = getPercentage(status);

    if (status.toLowerCase() === "best sale") {
      return "bg-purple-600 text-white";
    }

    if (percentage >= 50) {
      return "bg-green-600 text-white";
    }

    if (percentage >= 30) {
      return "bg-yellow-500 text-black";
    }

    if (status.toLowerCase() === "sale") {
      return "bg-red-500 text-white";
    }

    return "bg-gray-400 text-black";
  };
  return (
    <div className="max-w-[1610px] mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Daily Best Sells
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition ${
                activeTab === tab.key
                  ? "bg-green-500 text-white shadow"
                  : "bg-base-200 text-gray-600 hover:bg-green-100"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* Left Banner */}
        <div
          className="w-full lg:w-4/12 bg-cover bg-center rounded-2xl p-6 text-white min-h-[300px] flex flex-col justify-center"
          style={{ backgroundImage: `url(${bestSell})` }}
        >
          <h3 className="text-xl md:text-2xl font-semibold leading-snug">
            Bring nature into your homes
          </h3>
          <button className="btn bg-[#F53E32] outline-none mt-4 w-fit">
            Shop Now
          </button>
        </div>

        {/* Product Cards */}
        <div className="w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="relative card bg-base-100 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
            >
              <span
                className={`bg-green-500 text-white px-3 py-1 rounded-tl-3xl rounded-br-4xl w-24 -mt-3.5 -ml-4 ${getBadgeColor(p?.status)}`}
              >
                {p?.status}
              </span>

              {/* Image */}
              <figure className="flex justify-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="rounded-xl w-28 h-28 md:w-32 md:h-32 object-contain"
                />
              </figure>

              {/* Subname */}
              <span className="text-gray-400 font-normal text-xs mt-3">
                {p?.subName}
              </span>

              {/* Main content */}
              <div className="flex-1 flex flex-col justify-between mt-2">
                <div>
                  <h2 className="card-title text-sm md:text-base font-bold">
                    {p?.name}
                  </h2>
                  <span>{p?.rating}</span>

                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-green-500 font-bold text-[18px]">
                      ${p?.price}
                    </p>
                    {p.oldPrice && (
                      <p className="text-gray-400 line-through font-bold text-sm">
                        ${p.oldPrice}
                      </p>
                    )}
                  </div>
                  {/* <progress
                    className="progress progress-error w-full mt-4"
                    value={p?.sale}
                    max="
                    100"
                  ></progress> */}
                  <p className="text-xs text-gray-500">{p.sale}</p>
                </div>

                {/* Button always at bottom */}
                <button className="py-1 md:py-2 px-3 cursor-pointer bg-[#F53E32] rounded-md  font-bold text-[#FFFFFF] w-full mt-4">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyBestSells;
