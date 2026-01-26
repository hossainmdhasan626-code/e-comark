"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInSchema } from "./schema/SignInSchema";

const SignInForm = () => {
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    console.log("Logging in with:", values);
    actions.setSubmitting(false);
    router.push("/");
  };

  return (
    /* h-screen er bodole min-h-[calc(100vh-150px)] use kora hoyeche jate Header/Footer thakleo set hoy */
    <div className="flex flex-col items-center justify-center mx-auto min-h-[80vh]">
      {/* sm:max-w-md ke bariye sm:max-w-lg kora hoyeche size baranor jonno */}
      <div className="w-full bg-white rounded-xl shadow-lg dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-8 space-y-6 md:space-y-8 sm:p-10">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white text-center">
            Sign in to your account
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5 md:space-y-7">
                {/* Email Field */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Find Account / Forgot Password Link */}
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => router.push("/forgot-password")}
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Find account?
                  </button>
                </div>

                {/* Login Button */}
                <div
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none
                   focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-3 text-center transition-all duration-200"
                >
                  {isSubmitting ? "Signing in..." : "Login"}
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Areate Account
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
