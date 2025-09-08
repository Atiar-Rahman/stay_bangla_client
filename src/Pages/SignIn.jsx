import Lottie from "lottie-react";
import loginAnimation from "../data/Login.json";
import { SiWelcometothejungle } from "react-icons/si";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-10 shadow-xl rounded-3xl overflow-hidden bg-white">
        {/* Animation Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-blue-50 p-8">
          <Lottie
            animationData={loginAnimation}
            loop={true}
            className="w-[80%] h-[80%]"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="text-4xl flex gap-5 font-extrabold text-gray-800 mb-2">
            Welcome Back (<SiWelcometothejungle />)
          </h1>
          <p className="text-gray-500 mb-6">
            Please sign in to continue to your account
          </p>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <div className="flex justify-end mt-1">
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-200 shadow-md"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
