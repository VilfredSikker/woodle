import { Auth } from "aws-amplify"
import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import StyledButton from "../../basics/button/button"
import InputField from "../../basics/input-field/input-field"
import LoginLayout from "../../layout/login-layout/login-layout"
import { ToastsStore } from "react-toasts"
import styles from "./formik.module.scss"

const FormikSignUp = (props: any) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, "Must be atleast 4 characters")
        .max(15, "Must be 15 characters or less")
        .required(),
      password: Yup.string()
        .min(8, "Password must be atleast 8 characters")
        .required(),
      email: Yup.string().email("Invalid email address").required(),
    }),
    onSubmit: (values) => {
      console.log("Submit clicked")
      Auth.signUp({
        username: values.username,
        password: values.password,
        attributes: {
          email: values.email,
        },
      })
        .then(() => {
          console.log(values)
          props.history.push("/confirm-sign-up")
        })
        .catch((err) => ToastsStore.error("error with sign up " + err))
    },
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
          <div className={styles.errorMessage}>{formik.errors.username}</div>
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
          <div className={styles.errorMessage}>{formik.errors.password}</div>
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
          <div className={styles.errorMessage}>{formik.errors.email}</div>
        ) : null}
        <StyledButton type="submit">Sign Up Now</StyledButton>
      </form>
    </LoginLayout>
  )
}

export default FormikSignUp
