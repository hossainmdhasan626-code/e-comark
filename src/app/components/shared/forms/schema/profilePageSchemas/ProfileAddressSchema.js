import * as Yup from "yup";

export const ProfileAddressSchema = Yup.object({
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
