"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import Title from "../../ui(reusable)/Title";
import { profileInformationSchema } from "../forms/schema/profilePageSchemas/ProfileInformationSchema";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/app/redux/api/profile/ProfileApi";
import IsErrorRTK from "../../ui(reusable)/IsErrorRTK";

const Information = () => {
  // RTKDiyeApiTeHitKora
  const { data, isLoading, isError, error } = useGetProfileQuery();
  const [updateProfile] = useUpdateProfileMutation();

  if (isLoading) return <div>Loading your information...</div>;
  if (isError) return <IsErrorRTK isError={isError} error={error} />;

  // dataKeBerKoreAna
  const user_Data = data?.data?.[0];
  const user_information = {
    id: user_Data?.id,
    first_name: user_Data?.first_name,
    last_name: user_Data?.last_name,
    contact_number: user_Data?.contact_number,
    birth_date: user_Data?.birth_date,
    email: user_Data?.user?.email,
  };

  // initialValuesEApiThekeAsaDataSetKorlam
  const initialValues = {
    socialTitle: "",
    first_name: user_information?.first_name || "",
    last_name: user_information?.last_name || "",
    email: user_information?.email || "",
    contact_number: user_information?.contact_number || "",
    birth_date: user_information?.birth_date || "",
  };

  const handleSubmit = async (values) => {
    try {
      // idBerKoreUpdatePaylodEAddKora
      const updatePayload = { id: user_information?.id, ...values };
      // updateErJonnoApiTeHitKora
      await updateProfile(updatePayload).unwrap();
      alert("Information updated");
    } catch (err) {
      alert("Failed to update profile. Check console for details.");
    }
  };

  return (
    <div className="px-4 md:px-0 bg-white">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        // validationSchema={profileInformationSchema}
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
                {/* img */}

                <input
                  type="file"
                  class="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />

                {/* First Name */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-32 font-semibold text-gray-900 md:pt-3">
                    First name
                  </label>
                  <div className="flex-1">
                    <Field
                      type="text"
                      name="first_name"
                      placeholder="First name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900 transition-all duration-200"
                    />
                    <ErrorMessage
                      name="first_name"
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
                      name="last_name"
                      placeholder="Last name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900 transition-all duration-200"
                    />
                    <ErrorMessage
                      name="last_name"
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

                {/* number */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-32 font-semibold text-gray-900 md:pt-3">
                    Number
                  </label>
                  <div className="flex-1">
                    <Field
                      name="contact_number"
                      placeholder="Number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900 transition-all duration-200"
                    />
                    <ErrorMessage
                      name="contact_number"
                      component="p"
                      className="text-red-500 text-xs mt-1.5"
                    />
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
                      name="birth_date"
                      placeholder="DD/MM/YYYY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900 transition-all duration-200"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      (E.g. 31/05/1970)
                    </p>
                    <p className="text-sm text-gray-600">Optional</p>
                    <ErrorMessage
                      name="birth_date"
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
