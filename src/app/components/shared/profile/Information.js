"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import Title from "../../ui(reusable)/Title";
import { profileInformationSchema } from "../forms/schema/profilePageSchemas/ProfileInformationSchema";

const Information = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const initialValues = {
    socialTitle: "Md",
    firstName: "Mahmudul",
    lastName: "Hasan",
    email: "hossainmdhasan626@gmail.com",
    password: "password123",
    newPassword: "",
    birthDate: "17/12/2006",
  };

  const handleSubmit = (values, actions) => {
    console.log("Submitting form:", values);
    setTimeout(() => {
      actions.setSubmitting(false);
      alert("Information saved successfully!");
    }, 1500);
  };

  return (
    <div className="px-4 md:px-0 bg-white">
      <Formik
        initialValues={initialValues}
        validationSchema={profileInformationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting, values }) => (
          <Form className="space-y-6">
            {/* Section Title */}
            <div className="mb-8">
              {/* mainContaintErTitleRendarKore */}
              <Title titleOne={"YOUR PERSONAL INFORMATION"} />
            </div>

            {/* Main Container */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6 md:p-8">
              <div className="space-y-6">
                {/* Social Title */}
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <label className="md:w-32 font-semibold text-gray-900">
                    Social title
                  </label>
                  <div className="flex items-center gap-6">
                    {["Mr.", "Mrs.", "Md."].map((title) => (
                      <div key={title} className="flex items-center">
                        <Field
                          type="radio"
                          name="socialTitle"
                          value={title}
                          id={`title-${title}`}
                          className="w-4 h-4 cursor-pointer accent-mainColor"
                        />
                        <label
                          htmlFor={`title-${title}`}
                          className="ml-2 text-gray-800 cursor-pointer font-medium"
                        >
                          {title}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* First Name */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-32 font-semibold text-gray-900 md:pt-3">
                    First name
                  </label>
                  <div className="flex-1">
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900 transition-all duration-200"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="text-red-500 text-xs mt-1.5"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-32 font-semibold text-gray-900 md:pt-3">
                    Last name
                  </label>
                  <div className="flex-1">
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900 transition-all duration-200"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="p"
                      className="text-red-500 text-xs mt-1.5"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-32 font-semibold text-gray-900 md:pt-3">
                    Email
                  </label>
                  <div className="flex-1">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900 transition-all duration-200"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-xs mt-1.5"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-32 font-semibold text-gray-900 md:pt-3">
                    Password
                  </label>
                  <div className="flex-1 flex gap-2">
                    <div className="flex-1 relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-gray-100 text-gray-900 transition-all duration-200"
                      />
                      <ErrorMessage
                        name="password"
                        component="p"
                        className="text-red-500 text-xs mt-1.5"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 font-semibold text-sm"
                    >
                      {showPassword ? "HIDE" : "SHOW"}
                    </button>
                  </div>
                </div>

                {/* New Password */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-32 font-semibold text-gray-900 md:pt-3">
                    New password
                  </label>
                  <div className="flex-1">
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <Field
                          type={showNewPassword ? "text" : "password"}
                          name="newPassword"
                          placeholder="New password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900 transition-all duration-200"
                        />
                        <ErrorMessage
                          name="newPassword"
                          component="p"
                          className="text-red-500 text-xs mt-1.5"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 font-semibold text-sm"
                      >
                        {showNewPassword ? "HIDE" : "SHOW"}
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Optional</p>
                  </div>
                </div>

                {/* Birth Date */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-32 font-semibold text-gray-900 md:pt-3">
                    Birthdate
                  </label>
                  <div className="flex-1">
                    <Field
                      type="text"
                      name="birthDate"
                      placeholder="DD/MM/YYYY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900 transition-all duration-200"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      (E.g. 31/05/1970)
                    </p>
                    <p className="text-sm text-gray-600">Optional</p>
                    <ErrorMessage
                      name="birthDate"
                      component="p"
                      className="text-red-500 text-xs mt-1.5"
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-2.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                        SAVING...
                      </span>
                    ) : (
                      "SAVE"
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Breadcrumbs / Navigation */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-300">
              <Link
                href="/profile"
                className="text-gray-700 hover:text-mainColor transition-colors duration-200 font-semibold flex items-center gap-1"
              >
                <span>‹</span> Back to your account
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/"
                className="text-gray-700 hover:text-mainColor transition-colors duration-200 font-semibold flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
                Home
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Information;
