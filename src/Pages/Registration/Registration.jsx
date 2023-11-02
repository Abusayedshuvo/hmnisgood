import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Password at least 6 charter");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(password)) {
      setError("Password need a capital letter and a special character");
      return;
    }
    setError("");
    createUser(email, password)
      .then((result) => {
        Swal.fire("Registration Success!", "", "success");
        event.target.reset();
        updateProfile(result.user, {
          displayName: name,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="max-w-3xl mx-auto text-whit bg-white/80 rounded-xl m-20 p-14">
        <h2 className="text-4xl text-center mb-10">Registration</h2>

        <form className="text-black" onSubmit={handleRegistration}>
          <input
            className="w-full block p-4 mb-4 bg-slate-100"
            type="text"
            name="name"
            placeholder="Name"
            id=""
          />
          <input
            className="w-full block p-4 mb-4 bg-slate-100"
            type="email"
            name="email"
            placeholder="Email Address"
            id=""
          />
          <input
            className="w-full block p-4 mb-10 bg-slate-100"
            type="password"
            name="password"
            placeholder="Password"
            id=""
          />
          <div className="text-center">
            <input
              className="p-4 w-1/2 mb-5 rounded-md bg-[#FFD302] mt-10"
              type="submit"
              value="Register"
            />
          </div>
        </form>

        {error && (
          <p className="text-red-500 mt-5 font-semibold text-center">{error}</p>
        )}

        <p className="mt-5 text-center">
          Already a member?
          <Link className="text-yellow font-semibold" to="/login">
            <span className="pl-2"> Login here </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
