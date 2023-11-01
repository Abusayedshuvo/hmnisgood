const Contact = () => {
  return (
    <>
      <div className="p-8 bg-[#34055B] rounded-xl">
        <h2 className="text-4xl font-semibold mb-6">Wait-List-Subscription</h2>
        <form className="text-black">
          <p className="mb-3 text-white">
            First Name <span className="text-red-600">*</span>
          </p>
          <input
            className="p-4 w-full mb-5 rounded-md"
            placeholder="First Name"
            type="text"
            name="firstName"
            id=""
          />

          <p className="mb-3 text-white">
            Last Name <span className="text-red-600">*</span>
          </p>
          <input
            className="p-4 w-full mb-5 rounded-md"
            placeholder="Last Name"
            type="text"
            name="firstName"
            id=""
          />
          <p className="mb-3 text-white">Position</p>
          <input
            className="p-4 w-full mb-5 rounded-md"
            placeholder="Position"
            type="text"
            name="firstName"
            id=""
          />
          <p className="mb-3 text-white">Company</p>
          <input
            className="p-4 w-full mb-5 rounded-md"
            placeholder="Company"
            type="text"
            name="firstName"
            id=""
          />
          <p className="mb-3 text-white">Phone number</p>
          <input
            className="p-4 w-full mb-5 rounded-md"
            placeholder="Phone number"
            type="text"
            name="firstName"
            id=""
          />
          <p className="mb-3 text-white">
            Email address <span className="text-red-600">*</span>
          </p>
          <input
            className="p-4 w-full mb-5 rounded-md"
            placeholder="Email"
            type="email"
            name="email"
            id=""
          />
          <div className="text-center">
            <input
              className="p-4 w-1/2 mb-5 rounded-md bg-[#48e9d1] mt-10"
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
