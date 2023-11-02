const Contact = () => {
  return (
    <>
      <div className="p-8 bg-white/80 rounded-xl">
        <h2 className="text-4xl font-semibold mb-6">Wait-List-Subscription</h2>
        <form className="text-black">
          <p className="mb-3 ">
            First Name <span className="text-red-600">*</span>
          </p>
          <input
            className="p-4 w-full mb-5 rounded-md bg-slate-100"
            placeholder="First Name"
            type="text"
            name="firstName"
            id=""
          />

          <p className="mb-3 ">
            Last Name <span className="text-red-600">*</span>
          </p>
          <input
            className="p-4 w-full mb-5 rounded-md bg-slate-100"
            placeholder="Last Name"
            type="text"
            name="firstName"
            id=""
          />
          <p className="mb-3 ">Position</p>
          <input
            className="p-4 w-full mb-5 rounded-md bg-slate-100"
            placeholder="Position"
            type="text"
            name="firstName"
            id=""
          />
          <p className="mb-3 ">Company</p>
          <input
            className="p-4 w-full mb-5 rounded-md bg-slate-100"
            placeholder="Company"
            type="text"
            name="firstName"
            id=""
          />
          <p className="mb-3 ">Phone number</p>
          <input
            className="p-4 w-full mb-5 rounded-md bg-slate-100"
            placeholder="Phone number"
            type="text"
            name="firstName"
            id=""
          />
          <p className="mb-3 ">
            Email address <span className="text-red-600">*</span>
          </p>
          <input
            className="p-4 w-full mb-5 rounded-md bg-slate-100"
            placeholder="Email"
            type="email"
            name="email"
            id=""
          />
          <div className="text-center">
            <input
              className="p-4 w-1/2 mb-5 rounded-md bg-[#FFD302] mt-10"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
