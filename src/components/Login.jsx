import {FaGithub} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ED765E] to-[#FEA858]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-4/5 lg:w-1/3 rounded-lg mx-auto p-10 h-5/6 ">
          <h3 className="text-center font-bold text-4xl mb-10 ">Login</h3>
          <label htmlFor="email" className="block mt-6">
            Email
          </label>
          <input className="block px-5 py-2  border-b-2 w-full mt-2 " type="email" placeholder="Type email address" />

          <label htmlFor="email" className="block mt-6">
            Password
          </label>
          <input className="block px-5 py-2 border-b-2 w-full mt-2" type="password" placeholder="Type password" />
          <p className="text-right mt-2">Forgot Password?</p>
          <div className="flex mt-4 justify-center">
            <input type="submit" value="LOGIN" className="bg-gradient-to-r from-[#ED765E] to-[#FEA858] w-3/4 py-2 rounded-xl font-bold text-white" />
          </div>
          <div className="flex flex-col items-center justify-center  mt-6">
            <p>Or</p>
            <p className="my-1">Login using social networks</p>
            <div className="flex gap-4 mt-4">
              <FcGoogle className="text-4xl"></FcGoogle>
              <FaGithub className="text-4xl"></FaGithub>
              <FaFacebook className="text-4xl text-sky-700"></FaFacebook>
            </div>
            <p className="mt-4">
              Are you new here?{" "}
              <span className="text-sky-700">
                <Link to="/register">Create an account.</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
