import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2
} from "lucide-react";
import { Link } from "react-router";
import pagepath from "../Routes/pagepath";
import Loadingpage from "./Loadingpage";
import { registerSync } from "../Store/userSlice";
import { logout } from "../Services/UserApis";
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();
  const dispatch = useDispatch()
  // const {isLoading} = useSelector((state)=>state.user)

  const [showPassword, setShowPassword] = React.useState(false);
 async function registerApi(payload) {
  try {
    const response = await dispatch(
      registerSync(payload)
    ).unwrap();

    alert(response);

    console.log(response);
  } catch (error) {
    alert(error);
    console.log(error);
  }
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Join us and start your shopping journey 🚀
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(registerApi)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Full Name
            </label>
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 mt-1">
              <User size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent outline-none px-2 w-full text-sm"
                {...register("name", {
                  required: "Name is required"
                })}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Email
            </label>
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 mt-1">
              <Mail size={18} className="text-gray-500" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none px-2 w-full text-sm"
                {...register("email", {
                  required: "Email is required"
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 mt-1">
              <Lock size={18} className="text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="bg-transparent outline-none px-2 w-full text-sm"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters"
                  }
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={18} className="text-gray-500" />
                ) : (
                  <Eye size={18} className="text-gray-500" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2 py-2 rounded-md text-white transition ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting && (
              <Loader2 className="animate-spin" size={18} />
            )}
            {isSubmitting ? "Creating Account..." : "Register"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-5">
          Already have an account?{" "}
          <Link to={pagepath.LOGIN} className="text-blue-600 cursor-pointer hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}