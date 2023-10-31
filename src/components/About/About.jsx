import Lottie from "lottie-react";
import problem from "../../assets/problem.json";
import solution from "../../assets/solution.json";

const About = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="grid lg:grid-cols-2 items-center gap-16">
        <div>
          <h2 className="text-4xl font-semibold mb-10">Problem statement</h2>
          <p className="text-lg">
            {`About 80% of a tax professional’s time is consumed by siHing through
          data sources, classifying, and preparing for it for various compliance
          matters.`}
          </p>
        </div>
        <div>
          <Lottie className="ml-10" animationData={problem} loop={true} />;
        </div>

        <div>
          <Lottie className="ml-10" animationData={solution} loop={true} />;
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-10">Solution </h2>
          <p className="text-lg">
            {`WorkEasy uses enterprise AI models to automate data gathering and labeling and to group and
classify data points for various tax compliance purposes. We aim to reduce drudgery so tax
professionals can take on more clients and provide beJer service.
`}
          </p>
        </div>
        <div className="shadow-2xl rounded-md p-6 h-full mx-14">
          <h2 className="text-4xl mb-8 font-semibold">
            Unique Selling Proposition (USP)
          </h2>
          <p>
            We are building TaxOS that will enhance the efficiency and
            productivity of tax professionals. We concentrate on the most
            challenging phase of any tax service – data acquisition and
            processing.
          </p>
        </div>
        <div className="shadow-2xl rounded-md p-6 h-full mx-14">
          <h2 className="text-4xl mb-8 font-semibold">Value Proposition</h2>
          <p>
            Reduce 50% of the workload, freeing up tax professionals to complete
            their tasks more efficiently and enjoyably.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
