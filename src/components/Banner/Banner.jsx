const Banner = () => {
  return (
    <div className="container mx-auto items-center justify-center ">
      <div className="max-w-5xl mx-auto my-24">
        <h1 className="text-7xl text-[#FFD302] mb-14 font-semibold text-center">
          We Make Tax WorkEasy
        </h1>
        <div className="flex gap-10">
          <div className=" p-8 bg-white/80 text-whit rounded-xl flex-1">
            <h2 className="text-4xl font-semibold mb-4">Mission</h2>
            <p className="text-lg">
              We empower tax professionals worldwide to streamline data
              management and reduce the most time-consuming aspects of their
              work.
            </p>
          </div>
          <div className=" p-8 bg-white/80 text-whit rounded-xl flex-1">
            <h2 className="text-4xl font-semibold mb-4">Vision</h2>
            <p className="text-lg">
              We are leading the charge in revolutionizing tax workflows making
              data management seamless and intuitive.
            </p>
          </div>
        </div>
        <div className="text-center mt-20">
          <a
            className="py-4 px-6 w-1/2 mb-5 rounded-md bg-[#FFD302] font-semibold "
            href="#contact"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
