import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();
  const { createUser, updateUserProfile, googleLogin } = useAuth();
  const navigate = useNavigate();
  const password = watch("password", "");

  const onSubmit = async (data) => {
  try {
    const { email, password, name } = data;
    const userCredential = await createUser(email, password);
    
    await updateUserProfile({
      displayName: name,
    });

    toast.success("Account created successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setTimeout(() => navigate("/"), 1000);
  } catch (error) {
    console.error("Registration error:", error); // Add this for debugging
    toast.error(error.message || "Registration failed. Please try again.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

const handleGoogleLogin = async () => {
  try {
    await googleLogin();
    toast.success("Logged in with Google successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/");
  } catch (error) {
    console.error("Google login error:", error); // Add this for debugging
    toast.error(error.message || "Google login failed. Please try again.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};


  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Create an Account
      </h1>
      <p className="text-gray-600 mb-8">Register with Profast</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text font-medium">Name</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            className={`input input-bordered w-full ${
              errors.name ? "input-error" : ""
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-error text-sm mt-1">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`input input-bordered w-full ${
              errors.email ? "input-error" : ""
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-error text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password Field */}
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text font-medium">Password</span>
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              validate: {
                hasUpperCase: value =>
                  /[A-Z]/.test(value) || "Must contain uppercase letter",
                hasLowerCase: value =>
                  /[a-z]/.test(value) || "Must contain lowercase letter",
                hasNumber: value =>
                  /[0-9]/.test(value) || "Must contain number",
              },
            })}
            className={`input input-bordered w-full ${
              errors.password ? "input-error" : ""
            }`}
            placeholder="Create a password"
          />
          {errors.password && (
            <span className="text-error text-sm mt-1">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="form-control">
          <label htmlFor="confirmPassword" className="label">
            <span className="label-text font-medium">Confirm Password</span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: value =>
                value === password || "Passwords don't match",
            })}
            className={`input input-bordered w-full ${
              errors.confirmPassword ? "input-error" : ""
            }`}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <span className="text-error text-sm mt-1">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn w-full mt-6 text-gray-800 font-medium hover:bg-[#c0e05c] transition-colors"
          style={{
            backgroundColor: "#CAEB66",
            borderColor: "#CAEB66",
            opacity: isSubmitting ? 0.8 : 1,
          }}
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner"></span>
              Creating account...
            </>
          ) : (
            "Continue"
          )}
        </button>

        {/* Login Link */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
          </span>
          <Link
            to="/login"
            className="text-sm font-medium link hover:text-[#CAEB66] transition-colors"
          >
            Login
          </Link>
        </div>

        <div className="divider my-6">Or</div>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isSubmitting}
          className="btn bg-white text-black border-gray-300 w-full hover:bg-gray-50 flex items-center justify-center gap-2"
        >
          <FaGoogle className="text-lg" />
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Register;