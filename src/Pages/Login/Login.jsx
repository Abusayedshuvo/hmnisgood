import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa6";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { googleLogin, githubLogin, facebookLogin, loginUser } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire("Google Login Success!", "", "success");
        setError("");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGithub = () => {
    githubLogin()
      .then(() => {
        Swal.fire("Github Login Success!", "", "success");
        setError("");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleFacebook = () => {
    facebookLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire("Facebook Login Success!", "", "success");
        setError("");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then(() => {
        Swal.fire("Log In Success!", "", "success");
        event.target.reset();
        setError("");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="max-w-3xl mx-auto text-white bg-[#34055B] rounded-xl m-20 p-14">
      <h2 className="text-4xl text-center mb-10">Login</h2>
      <form className="text-black" onSubmit={handleUserLogin}>
        <input
          className="p-4 w-full mb-5 rounded-md"
          placeholder="Email"
          type="email"
          name="email"
          id=""
        />
        <input
          className="p-4 w-full mb-5 rounded-md"
          type="password"
          placeholder="Password"
          name="password"
          id=""
        />
        <div className="text-center">
          <input
            className="p-4 w-1/2 mb-5 rounded-md bg-[#48e9d1] mt-10"
            type="submit"
            value="Login"
          />
        </div>
      </form>

      <div className="text-center">
        {error && <p className="text-red-500 mt-5 font-semibold"> {error} </p>}

        <p className="mt-5">
          {`Don't have an account?`}
          <Link className="text-yellow font-semibold" to="/registration">
            <span className="pl-2"> Register here</span>
          </Link>
        </p>

        <p className="my-5">Or Login With</p>

        <div className="space-x-4">
          <button
            onClick={handleGoogle}
            className="btn bg-[#EA4335] hover:text-[#EA4335] text-white capitalize border-0"
          >
            <FaGoogle /> Google
          </button>
          <button
            onClick={handleGithub}
            className="btn bg-[#333] hover:text-[#333] text-white capitalize border-0"
          >
            <FaGithub /> Github
          </button>
          <button
            onClick={handleFacebook}
            className="btn bg-[#3b5998] hover:text-[#3b5998] text-white capitalize border-0"
          >
            <FaFacebookF /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
