import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "./firebase.config";

const Register = () => {
  const [createUserError, setCreateUserError] = useState("");
  const [createUserSuccess, setCreateUserSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const isChecked = e.target.termsConditions.checked;
    console.log(name, email, password, confirmPassword, isChecked);

    setCreateUserError("");
    setCreateUserSuccess("");

    if (password.length < 6) {
      setCreateUserError("Your password should be minimum 6 character.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setCreateUserError("Password should contains minimum 1 uppercase, 1 lowercase, 1 number, 1 special character (! , @ $ %)");
      return;
    } else if (!isChecked) {
      setCreateUserError("Please accept our terms and conditions.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {displayName: name})
          .then(() => {
            console.log("Profile Update Successfully");
          })
          .catch((error) => {
            console.log(error.message);
          });

        sendEmailVerification(result.user).then(() => {
          alert("Please check email for verification");
          setCreateUserSuccess("User created successfully...");
        });
      })
      .catch((error) => {
        setCreateUserError("Already added this email.");
        console.log(error.message);
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
            <input className="block px-5 py-2  border-b-2 w-full mt-2 " name="email" type="email" placeholder="Type email address" required />

            <label htmlFor="email" className="block mt-6">
              Password
            </label>
            <div className="flex relative">
              <input className="block px-5 py-2 border-b-2 w-full mt-2" name="password" type={showPassword ? "text" : "password"} placeholder="Type password" required />
              <span onClick={() => setShowPassword(!showPassword)} className="hover:cursor-pointer absolute right-3 top-5 text-gray-500">
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>

            <label htmlFor="email" className="block mt-6">
              Confirm Password
            </label>
            <div className="flex relative">
              <input className="block px-5 py-2 border-b-2 w-full mt-2" name="confirmPassword" type={showPassword ? "text" : "password"} placeholder="Type password again" required />
              <span onClick={() => setShowPassword(!showPassword)} className="hover:cursor-pointer absolute right-3 top-5 text-gray-500">
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>

            <div className="flex items-center gap-2 mt-2 font-semibold">
              <input type="checkbox" name="termsConditions" id="" />
              <label htmlFor="termsConditions">Accept our terms and conditions.</label>
            </div>

            <div className="flex mt-4 justify-center">
              <input type="submit" value="REGISTER" className="bg-gradient-to-r from-[#ED765E] to-[#FEA858] w-3/4 py-2 rounded-xl font-bold text-white" />
            </div>
            <div>{createUserError && <p className="mt-1 text-red-600 text-center">{createUserError}</p>}</div>
            <div>{createUserSuccess && <p className="mt-1 text-green-600 text-center">{createUserSuccess}</p>}</div>
          </form>
          <div className="flex flex-col items-center justify-center  mt-6">
            <p className="mt-2">
              Are have an account?{" "}
              <span className="text-sky-700">
                <Link to="/">Login.</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
