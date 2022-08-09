import { useState } from "react";
import { useFormik } from "formik";
export const SignUp = () => {
  // const initialValue = { firstName: "", lastName: "", email: "", passWord: "" };
  // const [error, setError] = useState({});

  // return (
  //   <div class="form-input">
  //     <form>
  //       <h1>Sign Up</h1>
  //       <fieldset>
  //         <legend>Add a new account</legend>
  //         <div class="input-product">
  //           <label>First Name :</label>
  //           <input type="text" placeholder="First Name"></input>
  //           <p>{error.firstName}</p>
  //         </div>
  //         <div class="input-product">
  //           <label>Last Name : </label>
  //           <input type="text" placeholder="Last Name"></input>
  //           <p>{error.lastName}</p>
  //         </div>
  //         <div class="input-product">
  //           <label>Email :</label>
  //           <input type="text" placeholder="Email"></input>
  //           <p>{error.email}</p>
  //         </div>
  //         <div class="input-product">
  //           <label>Password :</label>
  //           <input type="text" placeholder="Password"></input>
  //           <p>{error.passWord}</p>
  //         </div>

  //         <button>Submit</button>

  //       </fieldset>
  //     </form>
  //   </div>
  // );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
