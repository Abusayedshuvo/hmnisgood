import moment from "moment/moment";

const Footer = () => {
  return (
    <div className="text-center text-white bg-[#34055B] rounded-xl container mx-auto py-5">
      <p>Copyright @ {moment().format("YYYY")} Workeasy</p>
    </div>
  );
};

export default Footer;
