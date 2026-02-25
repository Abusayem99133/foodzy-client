import React from "react";
import png1 from "../../assets/bestSeller/pngwing.png";
import png2 from "../../assets/bestSeller/pngwing 2.png";
import png3 from "../../assets/bestSeller/pngwing 3.png";
import png4 from "../../assets/bestSeller/pngwing 4.png";
import png5 from "../../assets/bestSeller/pngwing 5.png";
const categories = [
  {
    name: "Main Dish",
    count: "86 dishes",
    img: `${png1}`,
  },
  {
    name: "Break Fast",
    count: "15 break fast",
    img: `${png2}`,
  },
  {
    name: "Dessert",
    count: "48 dessert",
    img: `${png3}`,
  },
  {
    name: "Browse All",
    count: "255 Items",
    img: `${png4}`,
  },
  {
    name: "Breakfast Food",
    count: "205 Items",
    img: `${png5}`,
  },
];

const Category = () => {
  return (
    <section className="py-16 text-center bg-white">
      <h4 className="text-red-500 font-semibold uppercase tracking-widest mb-2">
        Customer Favorites
      </h4>
      <h2 className="text-3xl font-bold mb-10">Popular Categories</h2>

      <div className="flex justify-center gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="card w-60 md:w-44 bg-base-100 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <figure className="px-6 pt-6">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-16 h-16 object-contain"
              />
            </figure>
            <div className="card-body p-4 text-center">
              <h3 className="text-lg font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-500">({cat.count})</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
