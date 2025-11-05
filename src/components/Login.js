import { useState } from "react";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-slate-200 p-10">
        <div className="mb-10">
          <h1 className="text-2xl font-light text-slate-800 tracking-wide mb-2">
            wrapstore
          </h1>
          <p className="text-slate-500 text-sm font-light">
            Sign in to continue
          </p>
        </div>

        <div className="mb-8">
          <label className="block text-slate-700 font-normal mb-3 text-sm">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full border px-4 py-3 rounded outline-none text-slate-800 placeholder-slate-400 text-sm transition-colors duration-200 ${
              isFocused ? "border-slate-400" : "border-slate-300"
            }`}
          />
        </div>

        <button className="w-full bg-slate-800 hover:bg-slate-900 text-white font-normal py-3 rounded transition-colors duration-200 text-sm tracking-wide">
          Sign In
        </button>

        <div className="flex items-center my-8">
          <hr className="flex-1 border-slate-200" />
          <span className="px-4 text-slate-400 text-xs uppercase tracking-wider">
            or
          </span>
          <hr className="flex-1 border-slate-200" />
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center border border-slate-300 rounded py-3 text-slate-700 hover:bg-slate-50 transition-colors duration-200 text-sm">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-4 h-4 mr-3"
            />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border border-slate-300 rounded py-3 text-slate-700 hover:bg-slate-50 transition-colors duration-200 text-sm">
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook"
              className="w-4 h-4 mr-3"
            />
            Continue with Facebook
          </button>
        </div>

        <p className="text-center text-sm text-slate-600 mt-8 font-light">
          Don't have an account?{" "}
          <button className="text-slate-800 font-normal hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
