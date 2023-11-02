import moment from "moment/moment";

const Footer = () => {
  return (
    <div className="text-center text-white bg-[#ffffff0d] rounded-xl container mx-auto py-5">
      <p> @ {moment().format("YYYY")} Workeasy. All rights reserved.</p>
    </div>
  );
};

export default Footer;
