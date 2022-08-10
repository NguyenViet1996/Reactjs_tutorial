import { Form, Formik } from "formik";
import CustomInput from "../components/CustomInput";
import CustomSelect from "../components/CustomSelect";
import CustomCheckbox from "../components/CustomCheckbox";
import { advancedSchema } from "../schemas/index";
import "../scss/Login.scss";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Login = () => {
  return (
    <div className="login-form">
      <Formik
        initialValues={{ username: "", jobType: "", acceptedTo: false }}
        validationSchema={advancedSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="login-input">
              <CustomInput
                label="Username"
                name="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="login-input">
              <CustomSelect
                label="Job Type"
                name="jobType"
                placeholder="Please select a job"
              >
                <option value="">Please select a job type</option>
                <option value="designer">designer</option>
                <option value="developer">developer</option>
                <option value="manager">manager</option>
                <option value="other">other</option>
              </CustomSelect>
            </div>
            <div className="login-input">
              <CustomCheckbox type="checkbox" name="acceptedTo" />
            </div>

            <button disabled={isSubmitting} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Login;
