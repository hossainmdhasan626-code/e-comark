import * as Yup from "yup"; // সবগুলোকে Yup অবজেক্ট হিসেবে ইমপোর্ট করা নিরাপদ

// SignIn Schema
export  const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
