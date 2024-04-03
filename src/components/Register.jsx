import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase.config";

const Register = () => {
  const [createUserError, setCreateUserError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(createUserError);
    setCreateUserError("");
    console.log(createUserError);
    console.log(displayName, email, password, confirmPassword);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        setCreateUserError(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ED765E] to-[#FEA858]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-4/5 lg:w-1/3 rounded-lg mx-auto p-10 h-5/6 ">
          <h3 className="text-center font-bold text-4xl mb-10 ">Register</h3>
          <form onSubmit={handleRegister}>
            <label htmlFor="text" className="block mt-6">
              Username
            </label>
            <input className="block px-5 py-2  border-b-2 w-full mt-2 " name="username" type="text" placeholder="Type username" />

            <label htmlFor="email" className="block mt-6">
              Email
            </label>
            <input className="block px-5 py-2  border-b-2 w-full mt-2 " name="email" type="email" placeholder="Type email address" />

            <label htmlFor="email" className="block mt-6">
              Password
            </label>
            <input className="block px-5 py-2 border-b-2 w-full mt-2" name="password" type="password" placeholder="Type password" />

            <label htmlFor="email" className="block mt-6">
              Confirm Password
            </label>
            <input className="block px-5 py-2 border-b-2 w-full mt-2" name="confirmPassword" type="password" placeholder="Type password again" />

            <div className="flex mt-4 justify-center">
              <input type="submit" value="REGISTER" className="bg-gradient-to-r from-[#ED765E] to-[#FEA858] w-3/4 py-2 rounded-xl font-bold text-white" />
            </div>
          </form>
          <div className="flex flex-col items-center justify-center  mt-6">
            <p className="mt-4">
              Are have an account?{" "}
              <span className="text-sky-700">
                <Link to="/">Login.</Link>
              </span>
            </p>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
