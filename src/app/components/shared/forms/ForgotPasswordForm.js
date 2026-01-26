"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  forgotPasswordEmailSchema,
  forgotPasswordOtpSchema,
  forgotPasswordResetSchema,
} from "./schema/ForgotPasswordSchema";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: Reset Password
  const [userEmail, setUserEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const emailInitialValues = {
    email: "",
  };

  const otpInitialValues = {
    otp: "",
  };

  const resetPasswordInitialValues = {
    password: "",
    confirmPassword: "",
  };

  const handleEmailSubmit = (values, actions) => {
    console.log("Sending OTP to:", values.email);
    setUserEmail(values.email);
    // Simulate sending OTP
    setTimeout(() => {
      setStep(2);
      actions.setSubmitting(false);
    }, 1500);
  };

  const handleOtpSubmit = (values, actions) => {
    console.log("Verifying OTP:", values.otp);
    // Simulate OTP verification
    setTimeout(() => {
      setStep(3);
      actions.setSubmitting(false);
    }, 1500);
  };

  const handleResetPasswordSubmit = (values, actions) => {
    console.log("Resetting password for:", userEmail);
    // Simulate password reset
    setTimeout(() => {
      actions.setSubmitting(false);
      // Redirect to signin page after successful reset
      router.push("/signin");
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-8 space-y-6 sm:p-10">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((i) => (
                <React.Fragment key={i}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                      step === i
                        ? "bg-gradient-to-r from-mainColor to-orange-500 text-white scale-110"
                        : step > i
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                    }`}
                  >
                    {step > i ? (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      i
                    )}
                  </div>
                  {i < 3 && (
                    <div
                      className={`w-12 h-1 rounded transition-all duration-300 ${
                        step > i
                          ? "bg-green-500"
                          : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-mainColor to-orange-500 rounded-full flex items-center justify-center mb-4">
              {step === 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              )}
              {step === 2 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              )}
              {step === 3 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {step === 1 && "Forgot Password?"}
              {step === 2 && "Verify OTP"}
              {step === 3 && "Reset Password"}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {step === 1 && "Enter your email to receive an OTP"}
              {step === 2 && `We sent a code to ${userEmail}`}
              {step === 3 && "Create a new password for your account"}
            </p>
          </div>

          {/* Step 1: Email */}
          {step === 1 && (
            <Formik
              initialValues={emailInitialValues}
              validationSchema={forgotPasswordEmailSchema}
              onSubmit={handleEmailSubmit}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Email Address
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all duration-200"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-xs mt-1.5"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white bg-gradient-to-r from-mainColor to-orange-500 hover:from-orange-600 hover:to-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-bold rounded-lg text-base px-5 py-3.5 text-center transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending OTP...
                      </span>
                    ) : (
                      "Send OTP"
                    )}
                  </button>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        Remember your password?
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    <Link
                      href="/signin"
                      className="font-semibold text-mainColor hover:text-orange-600 hover:underline dark:text-mainColor transition-colors duration-200"
                    >
                      ← Back to Sign In
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          )}

          {/* Step 2: OTP */}
          {step === 2 && (
            <Formik
              initialValues={otpInitialValues}
              validationSchema={forgotPasswordOtpSchema}
              onSubmit={handleOtpSubmit}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Enter 6-Digit OTP
                    </label>
                    <Field
                      type="text"
                      name="otp"
                      placeholder="000000"
                      maxLength="6"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor block w-full p-3.5 text-center tracking-widest text-2xl font-bold dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all duration-200"
                    />
                    <ErrorMessage
                      name="otp"
                      component="p"
                      className="text-red-500 text-xs mt-1.5 text-center"
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => handleEmailSubmit({ email: userEmail }, { setSubmitting: () => {} })}
                      className="text-sm text-mainColor hover:text-orange-600 font-semibold transition-colors duration-200"
                    >
                      Resend OTP
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white bg-gradient-to-r from-mainColor to-orange-500 hover:from-orange-600 hover:to-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-bold rounded-lg text-base px-5 py-3.5 text-center transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Verifying...
                      </span>
                    ) : (
                      "Verify OTP"
                    )}
                  </button>

                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="font-semibold text-mainColor hover:text-orange-600 hover:underline dark:text-mainColor transition-colors duration-200"
                    >
                      ← Back to Email
                    </button>
                  </p>
                </Form>
              )}
            </Formik>
          )}

          {/* Step 3: Reset Password */}
          {step === 3 && (
            <Formik
              initialValues={resetPasswordInitialValues}
              validationSchema={forgotPasswordResetSchema}
              onSubmit={handleResetPasswordSubmit}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                      New Password
                    </label>
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter new password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor block w-full p-3.5 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all duration-200"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500 text-xs mt-1.5"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <Field
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm new password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor block w-full p-3.5 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all duration-200"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
                      >
                        {showConfirmPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name="confirmPassword"
                      component="p"
                      className="text-red-500 text-xs mt-1.5"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white bg-gradient-to-r from-mainColor to-orange-500 hover:from-orange-600 hover:to-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-bold rounded-lg text-base px-5 py-3.5 text-center transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Resetting Password...
                      </span>
                    ) : (
                      "Reset Password"
                    )}
                  </button>

                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="font-semibold text-mainColor hover:text-orange-600 hover:underline dark:text-mainColor transition-colors duration-200"
                    >
                      ← Back to OTP
                    </button>
                  </p>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
