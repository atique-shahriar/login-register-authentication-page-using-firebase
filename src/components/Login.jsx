import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { auth } from "./firebase.config";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [createUserError, setCreateUserError] = useState("");
  const [createUserSuccess, setCreateUserSuccess] = useState("");
  const emailRef = useRef();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please provide email address");
      return;
    } else if (!emailRegex.test(email)) {
      alert("Please provide valid email address");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email to reset password.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setCreateUserError("");
    setCreateUserSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user.emailVerified) {
          setCreateUserSuccess("Logged in successfully...");
        } else {
          sendEmailVerification(result.user).then(() => {
            setCreateUserSuccess("Please check email for verification");
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
        setCreateUserError("Password Error or Don't exist any account!!");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ED765E] to-[#FEA858]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-4/5 lg:w-1/3 rounded-lg mx-auto p-10 h-5/6 ">
          <h3 className="text-center font-bold text-4xl mb-10 ">Login</h3>
          <form onSubmit={handleLogin}>
            <label htmlFor="email" className="block mt-6">
              Email
            </label>
            <input className="block px-5 py-2  border-b-2 w-full mt-2 " name="email" type="email" ref={emailRef} placeholder="Type email address" required />

            <label htmlFor="password" className="block mt-6">
              Password
            </label>
            <div className="flex relative">
              <input className="block px-5 py-2 border-b-2 w-full mt-2" name="password" type={showPassword ? "text" : "password"} placeholder="Type password" required />
              <span onClick={() => setShowPassword(!showPassword)} className="hover:cursor-pointer absolute right-3 top-5 text-gray-500">
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>
            <a className="text-right mt-2 hover:cursor-pointer hover:underline hover:text-blue-600" onClick={handleForgotPassword}>
              Forgot Password?
            </a>
            <div className="flex mt-4 justify-center">
              <input type="submit" value="LOGIN" className="bg-gradient-to-r from-[#ED765E] to-[#FEA858] w-3/4 py-2 rounded-xl font-bold text-white" />
            </div>
          </form>
          <div>{createUserError && <p className="mt-1 text-red-600 text-center">{createUserError}</p>}</div>
          <div>{createUserSuccess && <p className="mt-1 text-green-600 text-center">{createUserSuccess}</p>}</div>
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
