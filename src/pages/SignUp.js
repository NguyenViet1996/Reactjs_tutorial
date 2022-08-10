import { useFormik } from "formik";
import { basicSchema } from "../schemas/index";
import "../scss/SignUp.scss";

const onSubmit = async (values, actions) => {
  console.log("values", values);
  console.log("actions", actions);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
};

const SignUp = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log(errors);
  return (
    <div className="basic-form">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="basic-input">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <p className="input-error">{errors.email}</p>
          )}
        </div>
        <div className="basic-input">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="Enter your age"
            value={values.age}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.age && touched.age ? "input-error" : ""}
          />
          {errors.age && touched.age && (
            <p className="input-error">{errors.age}</p>
          )}
        </div>
        <div className="basic-input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your Password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.password && touched.password ? "input-error" : ""}
          />
          {errors.password && touched.password && (
            <p className="input-error">{errors.password}</p>
          )}
        </div>
        <div className="basic-input">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="confirmPassword"
            placeholder="Confirm password"
            value={values.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="input-error">{errors.confirmPassword}</p>
          )}
        </div>
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default SignUp;
