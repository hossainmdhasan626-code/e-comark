"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { signUpSchema } from "./schema/SignUpSchema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignUpMutation } from "@/app/redux/api/auth/AuthApi";

const SignUpFrom = () => {
  const [signUp] = useSignUpMutation();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "info" });

  const showToast = (message, type = "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  };

  const signInFromData = {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const handleSubmit = async (values, actions) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          profile: {
            first_name: values.firstName,
            last_name: values.lastName,
            contact_number: values.number,
          },
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showToast("Account created successfully", "success");
        dispatch(authData(values));
        actions.resetForm();
        setTimeout(() => router.push("/signin"), 1500); // Redirect to sign-in page
      } else {
        showToast(data.message || "Failed to create account. Please check the form fields.", "error");
        if (data.errors) {
          const formikErrors = {};
          for (const key in data.errors) {
            formikErrors[key] = Array.isArray(data.errors[key]) ? data.errors[key].join(" ") : data.errors[key];
          }
          actions.setErrors(formikErrors);
        }
      }
    } catch (error) {
      console.error("Signup error:", error);
      showToast("An error occurred. Please check your connection and try again.", "error");
    } finally {
      actions.setSubmitting(false);
    }
  };

  const onClickGoogle = () => {
    return console.log("SignUp by Google");
  };

  const onClickFaceBook = () => {
    return console.log("SignUp by FaceBook");
  };

  return (
    <>
    <Formik
      initialValues={signInFromData}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ isSubmitting, errors }) => (
        <div className="flex flex-col items-center justify-center w-full relative z-10">
          <div className="w-full max-w-2xl bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 dark:bg-gray-900/80 dark:border-gray-700/50">
            <div className="p-8 sm:p-10 space-y-8">
              {/* Header */}
              <div className="text-center space-y-3">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Create Account
                </h1>
                <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                  Join us today and start your journey
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-gray-700 bg-white/50 border border-gray-200 rounded-xl hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-300 dark:bg-gray-800/50 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                  onClick={onClickGoogle}
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 262" className="h-5 w-5">
                      <path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                      <path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                      <path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" />
                      <path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                    </svg>
                    <span>Google</span>
                  </div>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-gray-700 bg-white/50 border border-gray-200 rounded-xl hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-300 dark:bg-gray-800/50 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                  onClick={onClickFaceBook}
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" className="h-5 w-5">
                      <path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
                    </svg>
                    <span>Facebook</span>
                  </div>
                </button>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-gray-900 text-gray-400 font-medium tracking-wide">
                    OR SIGN UP WITH
                  </span>
                </div>
              </div>

              <Form className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                      First Name
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      className="bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-mainColor/50 focus:border-mainColor block w-full p-4 dark:bg-gray-800/50 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white transition-all duration-300"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="text-red-500 text-xs mt-1 ml-1 font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      className="bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-mainColor/50 focus:border-mainColor block w-full p-4 dark:bg-gray-800/50 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white transition-all duration-300"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="p"
                      className="text-red-500 text-xs mt-1 ml-1 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Email Address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    className="bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-mainColor/50 focus:border-mainColor block w-full p-4 dark:bg-gray-800/50 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white transition-all duration-300"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-xs mt-1 ml-1 font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Phone Number
                  </label>
                  <Field
                    type="tel"
                    name="number"
                    placeholder="+880 123 456 789"
                    className="bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-mainColor/50 focus:border-mainColor block w-full p-4 dark:bg-gray-800/50 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white transition-all duration-300"
                  />
                  <ErrorMessage
                    name="number"
                    component="p"
                    className="text-red-500 text-xs mt-1 ml-1 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                      Password
                    </label>
                    <div className="relative group">
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Create password"
                        className="bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-mainColor/50 focus:border-mainColor block w-full p-4 pr-12 dark:bg-gray-800/50 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white transition-all duration-300"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-mainColor transition-colors duration-200"
                      >
                        {showPassword ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500 text-xs mt-1 ml-1 font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                      Confirm Password
                    </label>
                    <div className="relative group">
                      <Field
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm password"
                        className="bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-mainColor/50 focus:border-mainColor block w-full p-4 pr-12 dark:bg-gray-800/50 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white transition-all duration-300"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-mainColor transition-colors duration-200"
                      >
                        {showConfirmPassword ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name="confirmPassword"
                      component="p"
                      className="text-red-500 text-xs mt-1 ml-1 font-medium"
                    />
                  </div>
                </div>

                <div className="flex items-start pt-2">
                  <div className="flex items-center h-5">
                    <Field
                      id="terms"
                      type="checkbox"
                      name="terms"
                      className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-2 focus:ring-mainColor text-mainColor cursor-pointer dark:bg-gray-700 dark:border-gray-600 transition-colors duration-200"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="text-gray-600 dark:text-gray-300 cursor-pointer font-medium"
                    >
                      I agree to the{" "}
                      <Link
                        className="font-bold text-mainColor hover:text-[#ff7e5f] hover:underline transition-colors duration-200"
                        href="#"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                    <ErrorMessage
                      name="terms"
                      component="p"
                      className="text-red-500 text-xs mt-1 ml-1 font-medium"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white bg-gradient-to-r from-mainColor to-[#ff7e5f] hover:from-[#ff7e5f] hover:to-mainColor focus:ring-4 focus:outline-none focus:ring-mainColor/30 font-bold rounded-xl text-base px-5 py-4 text-center transition-all duration-500 shadow-[0_4px_14px_0_rgba(255,111,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,111,0,0.23)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-8">
                  Already have an account?{" "}
                  <Link
                    href="/signin"
                    className="font-bold text-mainColor hover:text-[#ff7e5f] transition-colors duration-200 ml-1 relative group"
                  >
                    <span>Sign In Instead</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mainColor transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
    {toast.show && (
      <div className="toast toast-top toast-end z-50">
        <div className={`alert ${toast.type === "success" ? "alert-success text-white" : "alert-error text-white"}`}>
          <span>{toast.message}</span>
        </div>
      </div>
    )}
    </>
  );
};

export default SignUpFrom;
