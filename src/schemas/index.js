import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters , 1 upper case letter , 1 lower case letter , 1 numeric digit

// shema of Sign up
export const signUpSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please enter the stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match") 
    .required("Required"),
});

// schema of advanced form
export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "User name must have at least 3 characters ")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["desinger", "developer", "manager", "other"])
    .required("Required"),
  acceptedTo: yup.boolean().oneOf([true], "Please accetp the terms of service"),
});
