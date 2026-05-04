import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { Link } from "react-router";
import pagepath from "../Routes/pagepath";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const onSubmit = async (data) => {
    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

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
                placeholder="Enter your password"
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
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to={pagepath.REGISTER} className="text-blue-600 cursor-pointer hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  ); 
}