import Lottie from "lottie-react";
import signupAnimation from "../data/signup.json";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 via-white to-green-100 px-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-10 shadow-xl rounded-3xl overflow-hidden bg-white">
        {/* Animation Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-green-50 p-8">
          <Lottie
            animationData={signupAnimation}
            loop={true}
            className="w-[80%] h-[80%]"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Create an Account ✨
          </h1>
          <p className="text-gray-500 mb-6">
            Fill in your details to get started
          </p>

          <form className="space-y-5">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  maxLength={30}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  maxLength={30}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                maxLength={254}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password *
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="123 Street, City"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                maxLength={15}
                placeholder="+8801XXXXXXXXX"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition duration-200 shadow-md"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
