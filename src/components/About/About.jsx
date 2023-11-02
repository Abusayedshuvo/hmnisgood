import checkIcon from "../../assets/check.png";
import Contact from "../Contact/Contact";

const About = () => {
  return (
    <>
      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-2 items-center gap-16 ">
          <div className="p-8 bg-white/80 rounded-xl h-full">
            <h2 className="text-4xl font-semibold mb-10">Problem statement</h2>
            <p className="text-lg">
              {`About 80% of a tax professional’s time is consumed by siHing through
          data sources, classifying, and preparing for it for various compliance
          matters.`}
            </p>
          </div>

          <div className="p-8 bg-white/80 rounded-xl h-full">
            <h2 className="text-4xl font-semibold mb-10">Solution </h2>
            <p className="text-lg">
              {`WorkEasy uses enterprise AI models to automate data gathering and labeling and to group and
classify data points for various tax compliance purposes. We aim to reduce drudgery so tax
professionals can take on more clients and provide beJer service.
`}
            </p>
          </div>
          <div className="p-8 bg-white/80 rounded-xl h-full">
            <h2 className="text-4xl mb-8 font-semibold">
              Unique Selling Proposition
            </h2>
            <p>
              We are building TaxOS that will enhance the efficiency and
              productivity of tax professionals. We concentrate on the most
              challenging phase of any tax service – data acquisition and
              processing.
            </p>
          </div>
          <div className="p-8 bg-white/80 rounded-xl h-full ">
            <h2 className="text-4xl mb-8 font-semibold">Value Proposition</h2>
            <p>
              Reduce 50% of the workload, freeing up tax professionals to
              complete their tasks more efficiently and enjoyably.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-2 items-center gap-16 ">
          <div className="p-8 bg-white/80 rounded-xl">
            <h2 className="text-4xl font-semibold mb-6">
              Product/Service Features
            </h2>
            <p className="text-lg mb-10">
              WorkEasy can assist tax professionals in various areas, including
              but not limited to:
            </p>
            <div className="flex items-center mb-6">
              <img src={checkIcon} alt="" />
              <span className="ps-5">Sales and Use Tax</span>
            </div>
            <div className="flex items-center mb-6">
              <img src={checkIcon} alt="" />
              <span className="ps-5">State and Local Tax</span>
            </div>
            <div className="flex items-center mb-6">
              <img src={checkIcon} alt="" />
              <span className="ps-5">R&D Tax Credit</span>
            </div>
            <div className="flex items-center">
              <img src={checkIcon} alt="" />
              <span className="ps-5">Global Mobility</span>
            </div>
          </div>
          <div>
            <Contact></Contact>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
