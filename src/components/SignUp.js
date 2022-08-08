import { useState } from "react";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  localStorage.setItem("first name", "Viet");

  const name = localStorage.getItem("first ");
  console.log(name);

  return (
    <div class="form-input">
      <h1>Sign Up</h1>
      <fieldset>
        <legend>Add a new account</legend>
        <div class="input-product">
          <label>First Name :</label>
          <input type="text"></input>
        </div>
        <div class="input-product">
          <label>Last Name : </label>
          <input type="text"></input>
        </div>
        <div class="input-product">
          <label>Email :</label>
          <input type="text"></input>
        </div>
        <div class="input-product">
          <label>Password :</label>
          <input type="text"></input>
        </div>
        <button>Submit</button>
      </fieldset>
    </div>
  );
};
