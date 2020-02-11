import { Auth } from "aws-amplify"
import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import { Redirect } from "react-router-dom"
import InputField from "../basics/input-field/input-field"
import StyledButton from "../basics/button/button"
import LoginLayout from "../layout/login-layout/login-layout"

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
          console.log("Signed up")
          props.history.push("/confirm-sign-up")
        })
        .catch(err => console.log("error with sign up ", err))

      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <LoginLayout>
      <form onSubmit={formik.handleSubmit}>
        <InputField
          type="text"
          name="username"
          label="Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
        <InputField
          type="password"
          name="password"
          label="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <InputField
          type="text"
          name="email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <StyledButton type="submit">Sign Up Now</StyledButton>
      </form>
    </LoginLayout>
  )
}

export default FormikSignUp
