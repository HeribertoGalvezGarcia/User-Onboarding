import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({touched, errors, values: {tos}, isSubmitting}) {
  return (
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="text" name="username" placeholder="Username" />
      </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <label>
        <Field type="checkbox" name="tos" checked={tos} />
        Accept TOS
      </label>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({username, email, password, tos}) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      tos: tos || false
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("Username is required"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, {resetForm, setSubmitting, props: {setUsers}}) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        setUsers(users => [...users, res.data]);
        resetForm();
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  }
})(LoginForm);

export default FormikLoginForm;