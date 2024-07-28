import {Link} from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://dragon2000-multisite.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/203/2021/05/19110448/Car-Station-Home-page-hero-2_result.jpg)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-semibold">Your journey begins here</h1>
          <p className="mb-5">Innovations that move forward. Discover our latest models.</p>
          <Link className="btnCustom p-[14px] w-[144px]" to="/catalog">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
