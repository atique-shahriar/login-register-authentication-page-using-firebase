import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ED765E] to-[#FEA858]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-4/5 lg:w-1/3 rounded-lg mx-auto p-10 h-5/6 ">
          <h3 className="text-center font-bold text-4xl mb-10 ">Register</h3>
          <label htmlFor="text" className="block mt-6">
            Username
          </label>
          <input className="block px-5 py-2  border-b-2 w-full mt-2 " type="email" placeholder="Type username" />

          <label htmlFor="email" className="block mt-6">
            Email
          </label>
          <input className="block px-5 py-2  border-b-2 w-full mt-2 " type="email" placeholder="Type email address" />

          <label htmlFor="email" className="block mt-6">
            Password
          </label>
          <input className="block px-5 py-2 border-b-2 w-full mt-2" type="password" placeholder="Type password" />

          <label htmlFor="email" className="block mt-6">
            Confirm Password
          </label>
          <input className="block px-5 py-2 border-b-2 w-full mt-2" type="password" placeholder="Type password again" />

          <div className="flex mt-4 justify-center">
            <input type="submit" value="REGISTER" className="bg-gradient-to-r from-[#ED765E] to-[#FEA858] w-3/4 py-2 rounded-xl font-bold text-white" />
          </div>
          <div className="flex flex-col items-center justify-center  mt-6">
            <p className="mt-4">
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
