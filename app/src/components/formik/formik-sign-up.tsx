import { Auth } from "aws-amplify";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

const FormikSignUp = (props: any) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required(),
      password: Yup.string()
        .min(8, "Password must be atleast 8 characters")
        .required(),
      email: Yup.string()
        .email("Invalid email address")
        .required()
    }),
    onSubmit: values => {
      Auth.signUp({
        username: values.username,
        password: values.password,
        attributes: {
          email: values.email
        }
      })
        .then(() => {
          console.log("Signed up");
          props.history.push("/confirm-sign-up");
        })
        .catch(err => console.log("error with sign up ", err));

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
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username ? (
        <div>{formik.errors.username}</div>
      ) : null}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Sign Up Now</button>
    </form>
  );
};

export default FormikSignUp;
