import React, { useState } from "react";
import bestSell from "../../assets/banner/best-sell-main.png";
import buySell1 from "../../assets/banner/buy-sell-1.jpg";
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
      tag: "Save 55%",
      name: "All Natural Italian-Style Chicken Meatballs",
      price: 238.85,
      oldPrice: 245.8,
      sale: "Sold: 90/120",
      img: `${buySell1}`,
    },
    {
      id: 2,
      tag: "Sale",
      name: "Angie’s Boomchickapop Sweet and womnies",
      price: 238.85,
      oldPrice: 245.8,
      sale: "Sold: 90/120",
      img: "https://i.ibb.co/wRDBr2x/product2.png",
    },
    {
      id: 3,
      tag: "Best sale",
      name: "Foster Farms Takeout Crispy Classic",
      price: 238.85,
      oldPrice: 245.8,
      sale: "Sold: 90/120",
      img: "https://i.ibb.co/hZ6qdwc/product3.png",
    },
    {
      id: 4,
      tag: "Save 32%",
      name: "Blue Diamond Almonds Lightly Salted",
      price: 238.85,
      oldPrice: 245.8,
      sale: "Sold: 90/120",
      img: "https://i.ibb.co/1G6Ns7H/product4.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Daily Best Sells</h2>

        {/* Tabs */}
        <div className="flex space-x-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeTab === tab.key
                  ? "bg-green-500 text-white"
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
      <div className="flex w-full gap-8">
        {/* Left Banner */}
        <div
          className="w-7/12  col-span-1 bg-cover bg-center rounded-2xl flex flex-col justify-center p-6 text-white"
          style={{ backgroundImage: `url(${bestSell})` }}
        >
          <h3 className="text-2xl font-semibold leading-snug">
            Bring nature into your home
          </h3>
          <button className="btn bg-[#F53E32] outline-none mt-4 w-fit">
            Shop Now
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {products.map((p) => (
            <div
              key={p.id}
              className="card bg-base-100 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <figure className="px-4 pt-4">
                <img
                  src={p.img}
                  alt={p.name}
                  className="rounded-xl w-32 h-32 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <span className="badge badge-success mb-2">{p.tag}</span>
                <h2 className="card-title text-sm font-semibold">{p.name}</h2>
                <p className="text-green-500 font-semibold">${p.price}</p>
                <p className="text-gray-400 line-through text-sm">
                  ${p.oldPrice}
                </p>
                <p className="text-xs text-gray-500">{p.sale}</p>
                <button className="btn btn-error w-full mt-2">
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
