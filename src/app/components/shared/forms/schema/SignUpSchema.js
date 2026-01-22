import * as Yup from "yup"; // সবগুলোকে Yup অবজেক্ট হিসেবে ইমপোর্ট করা নিরাপদ

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too short!")
    .required("First name is required"),

  lastName: Yup.string().min(2, "Too short!").required("Last name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  number: Yup.string()
    .min(10, "Minimum 10 digits required")
    .required("Phone number is required"),

  // password: Yup.string()
  //   .required("Password is required")
  //   .min(8, "Password must be at least 8 characters")
  //   .matches(/[a-z]/, "At least one lowercase letter (a-z)")
  //   .matches(/[A-Z]/, "At least one uppercase letter (A-Z)")
  //   .matches(/[0-9]/, "At least one number (0-9)")
  //   .matches(/[!@#$%^&*]/, "At least one special character (@, #, $)"),

  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref("password"), null], "Passwords must match")
  //   .required("Confirm your password"),

  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("Required"),
});
