import Lottie from "lottie-react";
import tax1 from "../../assets/tax1.json";

const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-5 items-center">
      <div className="col-span-3">
        <h1 className="text-7xl text-white mb-14 font-semibold">
          We Make Tax WorkEasy
        </h1>
        <div className="flex gap-10">
          <div className="shadow-lg p-6 bg-white rounded-md flex-1">
            <h2 className="text-4xl font-semibold mb-4">Mission</h2>
            <p className="text-lg">
              We empower tax professionals worldwide to streamline data
              management and reduce the most time-consuming aspects of their
              work.
            </p>
          </div>
          <div className="shadow-lg p-6 bg-white rounded-md flex-1">
            <h2 className="text-4xl font-semibold mb-4">Vision</h2>
            <p className="text-lg">
              We are leading the charge in revolutionizing tax workflows making
              data management seamless and intuitive.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <Lottie className="ml-10" animationData={tax1} loop={true} />;
      </div>
    </div>
  );
};

export default Banner;
