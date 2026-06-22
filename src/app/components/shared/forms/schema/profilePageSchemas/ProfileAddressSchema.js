import * as Yup from "yup";

export const ProfileAddressSchema = Yup.object({
  alias: Yup.string(),
  address: Yup.string().required("Address is required"),
  addressLine2: Yup.string(),
  zipCode: Yup.string().required("Zip/Postal code is required"),
  city: Yup.string().required("City is required"),
  district: Yup.string().required("District is required"),
  upazila: Yup.string().required("Upazila is required"),
  country: Yup.string().required("Country is required"),
  mobilePhone: Yup.string().required("Mobile phone is required"),
});
