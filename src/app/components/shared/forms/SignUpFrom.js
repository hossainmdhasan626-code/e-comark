"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { authData } from "@/app/redux/fecher/auth/AtuthSlice";
import { signUpSchema } from "./schema/SignUpSchema";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpFrom = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const signInFromData = {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  // submitButton
  const handleSubmit = (values, actions) => {
    console.log("submitting");
    // formErDataKeReduxEPathano
    dispatch(authData(values));

    //formResetErJonno
    actions.resetForm();

    // dataReduxEDeyarPorHomeEFireJay
    router.push("/");
  };

  // signUpByGoogle
  const onClickGoogle = () => {
    return console.log("SignUp by Google");
  };

  // signUpByFacebook
  const onClickFaceBook = () => {
    return console.log("SignUp by FaceBook");
  };

  return (
    <Formik
      initialValues={signInFromData}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ isSubmitting, errors }) => (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Create an account
              </h1>

              {/* Social Login Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-200"
                  onClick={onClickGoogle}
                >
                  {/* googleErLogoArTextMaintainErJonno */}
                  <div className="flex items-center justify-center gap-3">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="256"
                        height="262"
                        viewBox="0 0 256 262"
                        className="h-6 w-6"
                      >
                        <path
                          fill="#4285f4"
                          d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                        />
                        <path
                          fill="#34a853"
                          d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                        />
                        <path
                          fill="#fbbc05"
                          d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                        />
                        <path
                          fill="#eb4335"
                          d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                        />
                      </svg>
                    </div>
                    <div>Sign up with Google</div>
                  </div>
                </button>
                <button
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#1877F2] rounded-lg hover:opacity-90 focus:ring-4 focus:ring-blue-200"
                  onClick={onClickFaceBook}
                >
                  {/* googleErLogoArTextMaintainErJonno */}
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="256"
                        height="256"
                        viewBox="0 0 256 256"
                        className="h-6 w-6"
                      >
                        <path
                          fill="#1877f2"
                          d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                        />
                        <path
                          fill="#fff"
                          d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                        />
                      </svg>
                    </div>
                    <div>Sign up with Facebook</div>{" "}
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
                  or sign up with email
                </p>
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
              </div>

              <Form className="space-y-4 md:space-y-6" action="#">
                {/* First Name & Last Name in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      First Name
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="mudra000@gmail.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Phone Number
                  </label>
                  <Field
                    type="tel"
                    name="number"
                    placeholder="+880123456789"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <ErrorMessage
                    name="number"
                    component="p"
                    className="text-red-500 text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Confirm password
                    </label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Field
                      id="terms"
                      type="checkbox"
                      name="terms"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <ErrorMessage
                      name="terms"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I agree to all the{" "}
                      <Link
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        href="#"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                  Already have an account?{" "}
                  <Link
                    href="/signin"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Log In
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUpFrom;
