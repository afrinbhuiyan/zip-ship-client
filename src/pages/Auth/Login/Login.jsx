import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { signInUser, googleLogin } = useAuth();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoginError("");
      await signInUser(data.email, data.password);
      
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
      navigate("/"); // Redirect to home or dashboard after login
    } catch (error) {
      console.error("Login error:", error);
      setLoginError(error.message || "Login failed. Please try again.");
      
      toast.error(error.message || "Login failed. Please try again.", {
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
      
      toast.success("Google login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
      navigate("/"); // Redirect to home or dashboard after login
    } catch (error) {
      console.error("Google login error:", error);
      
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
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Login to Your Account
      </h1>
      
      {loginError && (
        <div className="alert alert-error mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{loginError}</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="input input-bordered w-full"
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span role="alert" className="text-error text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="input input-bordered w-full"
            placeholder="Enter your password"
            disabled={isSubmitting}
          />
          {errors.password && (
            <span role="alert" className="text-error text-sm mt-1">
              {errors.password.message}
            </span>
          )}
          <label className="label">
            <Link
              to="/forgot-password"
              className="label-text-alt link hover:text-[#CAEB66]"
            >
              Forgot password?
            </Link>
          </label>
        </div>

        <button
          type="submit"
          className="btn w-full mt-6"
          style={{ backgroundColor: "#CAEB66", borderColor: "#CAEB66" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner"></span>
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>

        <div className="divider">OR</div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn w-full bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
          disabled={isSubmitting}
        >
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>

        <div className="text-center mt-4">
          <span className="text-sm">Don't have an account? </span>
          <Link
            to="/register"
            className="text-sm font-medium link hover:text-[#CAEB66]"
          >
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;