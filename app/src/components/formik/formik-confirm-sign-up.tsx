import { Auth } from "aws-amplify";
import { useFormik } from "formik";
import React from "react";
import { Redirect } from "react-router-dom";

const FormikConfirmSignUp = (props:any) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      confirmationCode: ""
    },
    onSubmit: values => {
      Auth.confirmSignUp(values.username, values.confirmationCode)
            .then(() => {
              props.history.push("/profile")
            })
            .catch(err => console.log("error with confirm: ", err))
      
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <label htmlFor="confirmationCode">Confirmation Code</label>
      <input
        type="text"
        name="confirmation_code"
        onChange={formik.handleChange}
        value={formik.values.confirmationCode}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default FormikConfirmSignUp;
