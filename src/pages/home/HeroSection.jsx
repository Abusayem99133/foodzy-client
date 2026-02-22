import bgHero from "../../assets/banner/cover.png";
import hero from "../../assets/banner/roast_turkey_png_transparent_background__4__by_anavrin_ai_dfoc0ff-pre 1.png";
import cover from "../../assets/banner/coverImage.png";
import { CgArrowTopRight } from "react-icons/cg";
const HeroSection = () => {
  return (
    <div className="w-full">
      <div
        className="hero min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="hero-overlay bg-black/40"></div>
        <div
          className=" hero min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
        <div className=" bg-black/10"></div>

        <div className="hero-content w-full flex flex-col lg:flex-row items-center justify-between text-neutral-content px-4 ">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* <div className="  hero-overlay"></div> */}
            <div className="bg-transparent p-4 ">
              <span className="italic font-bold">Super</span>
              <h2 className="mb-5 text-4xl md:text-5xl font-bold">Delicious</h2>
              <h1 className="mb-5 text-5xl font-bold italic md:text-6xl">
                Roast Turkey
              </h1>

              <button className="btn text-white bg-yellow-700 ">
                <CgArrowTopRight className="" /> Order Now
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img
              src={hero}
              alt="hero"
              className="max-w-xs md:max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
