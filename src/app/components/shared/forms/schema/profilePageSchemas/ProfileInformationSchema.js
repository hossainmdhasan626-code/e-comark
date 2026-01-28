import * as Yup from "yup";

export const profileInformationSchema = Yup.object({
  socialTitle: Yup.string().required("Social title is required"),
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  newPassword: Yup.string().min(8, "Password must be at least 8 characters"),
  birthDate: Yup.string(),
});
