"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Title from "../../ui(reusable)/Title";

// Validation Schema
const addressSchema = Yup.object({
  alias: Yup.string(),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  company: Yup.string(),
  address: Yup.string().required("Address is required"),
  addressLine2: Yup.string(),
  zipCode: Yup.string(),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  mobilePhone: Yup.string().required("Mobile phone is required"),
  phone: Yup.string(),
});

const Address = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      alias: "Home",
      firstName: "Mahmudul",
      lastName: "Hasan",
      company: "Tech Solutions",
      address: "123 Main Street",
      addressLine2: "Apartment 4B",
      zipCode: "1216",
      city: "Dhaka",
      country: "Bangladesh",
      mobilePhone: "+8801234567890",
      phone: "+88028123456",
      isDefault: true,
    },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const initialValues = {
    alias: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    addressLine2: "",
    zipCode: "",
    city: "",
    country: "Bangladesh",
    mobilePhone: "",
    phone: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      if (editingAddress) {
        // Update existing address
        setAddresses(
          addresses.map((addr) =>
            addr.id === editingAddress.id
              ? { ...values, id: addr.id, isDefault: addr.isDefault }
              : addr,
          ),
        );
        setEditingAddress(null);
      } else {
        // Add new address
        const newAddress = {
          ...values,
          id: Date.now(),
          isDefault: addresses.length === 0,
        };
        setAddresses([...addresses, newAddress]);
      }
      setIsFormVisible(false);
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setIsFormVisible(true);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this address?")) {
      setAddresses(addresses.filter((addr) => addr.id !== id));
    }
  };

  const handleSetDefault = (id) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      })),
    );
  };

  const handleCancel = () => {
    setIsFormVisible(false);
    setEditingAddress(null);
  };

  return (
    <div className="px-4 md:px-0 bg-white">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        {/* mainContaintETitleRendarKore */}
        <Title titleOne={"YOUR ADDRESSES"} />
        {!isFormVisible && (
          <button
            onClick={() => setIsFormVisible(true)}
            className="px-6 py-2.5 bg-mainColor hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            + ADD NEW ADDRESS
          </button>
        )}
      </div>

      {/* Address Form */}
      {isFormVisible && (
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6 md:p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {editingAddress ? "EDIT ADDRESS" : "NEW ADDRESS"}
          </h3>
          <Formik
            initialValues={editingAddress || initialValues}
            validationSchema={addressSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Alias */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-48 font-semibold text-gray-900 md:pt-3">
                    Alias
                  </label>
                  <div className="flex-1">
                    <Field
                      type="text"
                      name="alias"
                      placeholder="Alias"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
                    />
                    <p className="text-sm text-gray-600 mt-1">Optional</p>
                    <ErrorMessage
                      name="alias"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* First Name */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-48 font-semibold text-gray-900 md:pt-3">
                    First name
                  </label>
                  <div className="flex-1">
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-48 font-semibold text-gray-900 md:pt-3">
                    Last name
                  </label>
                  <div className="flex-1">
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-48 font-semibold text-gray-900 md:pt-3">
                    Company
                  </label>
                  <div className="flex-1">
                    <Field
                      type="text"
                      name="company"
                      placeholder="Company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
                    />
                    <p className="text-sm text-gray-600 mt-1">Optional</p>
                    <ErrorMessage
                      name="company"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-48 font-semibold text-gray-900 md:pt-3">
                    Address
                  </label>
                  <div className="flex-1">
                    <Field
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
                    />
                    <ErrorMessage
                      name="address"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* Address Line 2 */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-48 font-semibold text-gray-900 md:pt-3">
                    Address Line 2
                  </label>
                  <div className="flex-1">
                    <Field
                      type="text"
                      name="addressLine2"
                      placeholder="Address Line 2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
                    />
                    <p className="text-sm text-gray-600 mt-1">Optional</p>
                    <ErrorMessage
                      name="addressLine2"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* Zip/Postal Code */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-48 font-semibold text-gray-900 md:pt-3">
                    Zip/Postal Code
                  </label>
                  <div className="flex-1">
                    <Field
                      type="text"
                      name="zipCode"
                      placeholder="Zip/Postal Code"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
                    />
                    <p className="text-sm text-gray-600 mt-1">Optional</p>
                    <ErrorMessage
                      name="zipCode"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* City */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-48 font-semibold text-gray-900 md:pt-3">
                    City
                  </label>
                  <div className="flex-1">
                    <Field
                      type="text"
                      name="city"
                      placeholder="City"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
                    />
                    <ErrorMessage
                      name="city"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-48 font-semibold text-gray-900 md:pt-3">
                    Country
                  </label>
                  <div className="flex-1">
                    <Field
                      as="select"
                      name="country"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
                    >
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                    </Field>
                    <ErrorMessage
                      name="country"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* Mobile Phone */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-48 font-semibold text-gray-900 md:pt-3">
                    Mobile phone
                  </label>
                  <div className="flex-1">
                    <Field
                      type="tel"
                      name="mobilePhone"
                      placeholder="Mobile phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
                    />
                    <ErrorMessage
                      name="mobilePhone"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <label className="md:w-48 font-semibold text-gray-900 md:pt-3">
                    Phone
                  </label>
                  <div className="flex-1">
                    <Field
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
                    />
                    <p className="text-sm text-gray-600 mt-1">Optional</p>
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-2.5 bg-gray-400 hover:bg-gray-500 text-white font-bold rounded-lg transition-all duration-300"
                  >
                    CANCEL
                  </button>
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
              </Form>
            )}
          </Formik>
        </div>
      )}

      {/* Addresses List */}
      {!isFormVisible && addresses.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`bg-white rounded-lg border-2 p-6 transition-all duration-200 ${
                address.isDefault
                  ? "border-mainColor shadow-lg"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* Address Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  {address.alias && (
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {address.alias}
                    </h3>
                  )}
                  {address.isDefault && (
                    <span className="inline-block px-3 py-1 bg-mainColor text-white text-xs font-bold rounded-full">
                      DEFAULT
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(address)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold text-gray-900">
                  {address.firstName} {address.lastName}
                </p>
                {address.company && <p>{address.company}</p>}
                <p>{address.address}</p>
                {address.addressLine2 && <p>{address.addressLine2}</p>}
                <p>
                  {address.city}
                  {address.zipCode && `, ${address.zipCode}`}
                </p>
                <p>{address.country}</p>
                <p className="pt-2">
                  <span className="font-semibold">Mobile:</span>{" "}
                  {address.mobilePhone}
                </p>
                {address.phone && (
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    {address.phone}
                  </p>
                )}
              </div>

              {/* Set as Default Button */}
              {!address.isDefault && (
                <button
                  onClick={() => handleSetDefault(address.id)}
                  className="mt-4 w-full px-4 py-2 bg-mainColor hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  SET AS DEFAULT
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isFormVisible && addresses.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 mx-auto text-gray-400 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="text-gray-600 text-lg font-semibold">
            No addresses added yet
          </p>
          <p className="text-gray-500 mt-2">
            Click &quot;ADD NEW ADDRESS&quot; to create your first address
          </p>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="flex items-center gap-4 pt-8 border-t border-gray-300 mt-8">
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
    </div>
  );
};

export default Address;
