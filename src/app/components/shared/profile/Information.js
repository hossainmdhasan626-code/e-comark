"use client";

import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import Title from "../../ui(reusable)/Title";
import { profileInformationSchema } from "../forms/schema/profilePageSchemas/ProfileInformationSchema";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { authData } from "../../../redux/fecher/auth/AtuthSlice";

const Information = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: "", type: "info" });

  const showToast = (message, type = "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  };

  const [initialValues, setInitialValues] = useState({
    socialTitle: "Md.",
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    location: "",
    contactNumber: "",
    password: "",
    newPassword: "",
    birthDate: "",
    id: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          setLoading(false);
          return;
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/profile/`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const result = await response.json();
        if (response.ok && result.success && result.data && result.data.length > 0) {
          const profile = result.data[0];

          let formattedDate = profile.birth_date || "";
          if (formattedDate && formattedDate.includes("-")) {
            const parts = formattedDate.split("-");
            if (parts.length === 3) {
              formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`; // DD/MM/YYYY
            }
          }

          setInitialValues({
            socialTitle: "Md.",
            firstName: profile.first_name || "",
            lastName: profile.last_name || "",
            email: profile.user?.email || "",
            bio: profile.bio || "",
            location: profile.location || "",
            contactNumber: profile.contact_number || "",
            password: "",
            newPassword: "",
            birthDate: formattedDate,
            id: profile.id,
          });

          if (profile.profile_image) {
            const domain = process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL.replace('/api/v1', '') : 'http://127.0.0.1:8000';
            setPreviewImage(profile.profile_image.startsWith("http") ? profile.profile_image : `${domain}${profile.profile_image}`);
          }
        } else {
          showToast(result.message || "Failed to load profile", "error");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        showToast("An error occurred while fetching profile data", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (values, actions) => {
    if (!values.id) {
      showToast("Profile ID is missing. Please refresh the page.", "error");
      actions.setSubmitting(false);
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");

      const formData = new FormData();
      formData.append("first_name", values.firstName);
      formData.append("last_name", values.lastName);
      formData.append("bio", values.bio);
      formData.append("location", values.location);
      formData.append("contact_number", values.contactNumber);

      if (values.birthDate) {
        // Convert DD/MM/YYYY to YYYY-MM-DD
        const parts = values.birthDate.split("/");
        if (parts.length === 3) {
          formData.append("birth_date", `${parts[2]}-${parts[1]}-${parts[0]}`);
        } else {
          formData.append("birth_date", values.birthDate);
        }
      }

      if (selectedImage) {
        formData.append("profile_image", selectedImage);
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/profile/${values.id}/`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast("Profile updated successfully", "success");
      } else {
        showToast(result.message || "Failed to update profile", "error");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      showToast("An error occurred while updating profile", "error");
    } finally {
      actions.setSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken && refreshToken) {
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signout/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
          },
          body: JSON.stringify({ refresh_token: refreshToken })
        });
      }

      // Regardless of API success, clear local storage and state
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(authData({ firstName: null, lastName: null, email: null }));
      
      document.getElementById('signout_modal').close();
      showToast("User logged out successfully", "success");
      
      setTimeout(() => {
        router.push("/signin");
      }, 1000);

    } catch (error) {
      console.error("Logout error:", error);
      showToast("Error during sign out", "error");
      setIsSigningOut(false);
      document.getElementById('signout_modal').close();
    }
  };

  if (loading) {
    return <div className="p-8 text-center font-medium text-gray-600">Loading profile...</div>;
  }

  return (
    <>
      <div className="px-4 md:px-0 bg-white">
        <Formik
          enableReinitialize={true}
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
                  {/* Profile Image */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-gray-200 pb-6">
                    <label className="md:w-32 font-semibold text-gray-900">
                      Profile Image
                    </label>
                    <div className="flex items-center gap-6">
                      <div className="relative w-24 h-24 rounded-full border-2 border-gray-200 overflow-hidden bg-gray-100 flex items-center justify-center">
                        {previewImage ? (
                          <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                          <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="px-4 py-2 bg-mainColor text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-orange-600 transition-colors inline-block text-center">
                          Change Photo
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                        </label>
                        <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size of 800K</p>
                      </div>
                    </div>
                  </div>
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

                  {/* Bio */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <label className="md:w-32 font-semibold text-gray-900 md:pt-3">
                      Bio
                    </label>
                    <div className="flex-1">
                      <Field
                        as="textarea"
                        name="bio"
                        placeholder="Tell us about yourself..."
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900 transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <label className="md:w-32 font-semibold text-gray-900 md:pt-3">
                      Location
                    </label>
                    <div className="flex-1">
                      <Field
                        type="text"
                        name="location"
                        placeholder="e.g. New York, NY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <label className="md:w-32 font-semibold text-gray-900 md:pt-3">
                      Contact
                    </label>
                    <div className="flex-1">
                      <Field
                        type="tel"
                        name="contactNumber"
                        placeholder="+1-123-456-7890"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  {/* <div className="flex flex-col md:flex-row md:items-start gap-4">
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
                </div> */}

                  {/* New Password */}
                  {/* <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-32 font-semibold text-gray-900 md:pt-3">
                    New password
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
                </div> */}

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
                  <div className="flex justify-end gap-4 pt-4">
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
                    <button
                      type="button"
                      disabled={isSigningOut || isSubmitting}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('signout_modal').showModal();
                      }}
                      className="px-8 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                          Signing Out...
                        </span>
                      ) : (
                        "Signout"
                      )}
                    </button>
                    {/* <button
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
                          Deleting...
                        </span>
                      ) : (
                        "Delete Account"
                      )}
                    </button> */}
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
      {toast.show && (
        <div className="toast toast-top toast-end z-50">
          <div className={`alert ${toast.type === "success" ? "alert-success text-white" : "alert-error text-white"}`}>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* DaisyUI Sign Out Modal */}
      <dialog id="signout_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg text-gray-900">Sign Out</h3>
          <p className="py-4 text-gray-600">Are you sure you want to sign out of your account?</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 border-none mr-2">No, Cancel</button>
            </form>
            <button className="btn bg-red-500 text-white hover:bg-red-600 border-none" onClick={handleSignOut} disabled={isSigningOut}>
              {isSigningOut ? "Signing Out..." : "Yes, Sign Out"}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Information;
