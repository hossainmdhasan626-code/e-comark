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
    <div className="flex flex-col items-center justify-center w-full relative z-10">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 dark:bg-gray-900/80 dark:border-gray-700/50 transition-all duration-500">
        <div className="p-8 sm:p-10 space-y-8">
          {/* Step 1: Email Form */}
          {step === 1 && (
            <>
              <div className="text-center space-y-3">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Reset Password
                </h1>
                <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                  Enter your email address and we&apos;ll send you a recovery code
                </p>
              </div>

              <Formik
                initialValues={emailInitialValues}
                validationSchema={forgotPasswordEmailSchema}
                onSubmit={handleEmailSubmit}
                validateOnChange={false}
                validateOnBlur={false}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6 mt-8">
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
                          Sending code...
                        </span>
                      ) : (
                        "Send Recovery Code"
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            </>
          )}

          {/* Step 2: OTP Form */}
          {step === 2 && (
            <>
              <div className="text-center space-y-3">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Enter Code
                </h1>
                <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                  We sent a 6-digit code to <span className="font-semibold text-gray-700 dark:text-gray-200">{userEmail}</span>
                </p>
              </div>

              <Formik
                initialValues={otpInitialValues}
                validationSchema={forgotPasswordOtpSchema}
                onSubmit={handleOtpSubmit}
                validateOnChange={false}
                validateOnBlur={false}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6 mt-8">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                        Recovery Code
                      </label>
                      <Field
                        type="text"
                        name="otp"
                        placeholder="000000"
                        className="bg-gray-50/50 border border-gray-200 text-gray-900 text-xl tracking-[0.5em] text-center font-bold rounded-xl focus:ring-2 focus:ring-mainColor/50 focus:border-mainColor block w-full p-4 dark:bg-gray-800/50 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white transition-all duration-300"
                        maxLength="6"
                      />
                      <ErrorMessage
                        name="otp"
                        component="p"
                        className="text-red-500 text-xs mt-1 ml-1 font-medium text-center"
                      />
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
                          Verifying...
                        </span>
                      ) : (
                        "Verify Code"
                      )}
                    </button>
                    
                    <div className="flex justify-center mt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-sm font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                      >
                        Try a different email
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          )}

          {/* Step 3: Reset Password Form */}
          {step === 3 && (
            <>
              <div className="text-center space-y-3">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  New Password
                </h1>
                <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                  Create a new password for your account
                </p>
              </div>

              <Formik
                initialValues={resetPasswordInitialValues}
                validationSchema={forgotPasswordResetSchema}
                onSubmit={handleResetPasswordSubmit}
                validateOnChange={false}
                validateOnBlur={false}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6 mt-8">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                        New Password
                      </label>
                      <div className="relative group">
                        <Field
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Enter new password"
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
                          placeholder="Confirm new password"
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
                          Resetting...
                        </span>
                      ) : (
                        "Reset Password"
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            </>
          )}

          {/* Back to Login Link */}
          <div className="flex justify-center mt-6">
            <Link
              href="/signin"
              className="text-sm font-bold text-gray-500 hover:text-mainColor transition-colors duration-200 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
