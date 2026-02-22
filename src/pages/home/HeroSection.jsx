import banner from "../../assets/banner/green-plate-full-omelet-white-bread-with-pepper.jpg";
const HeroSection = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <img src={banner} alt="" />
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">my pc is stop because of power problem.</p>
            <button className="btn btn-primary">Get Started to button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
