import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RiLoader4Fill } from "react-icons/ri";
import { TbHandClick } from "react-icons/tb";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    // You can add your login logic here
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center px-2">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form className="border text-center w-[90%] md:w-1/3 border-red-400 flex-col rounded-lg p-6" style={{ boxShadow: "1px 1px 3px 2px rgba(193,79,79,0.75)" }}>
          <h4 className="text-2xl font-semibold">Welcome Back to Compex</h4>

         <div className="w-full my-6 text-start">
         <Field
            type="email"
            name="email"
            placeholder="Email"
            className="outline-none w-full h-10 border border-gray-300 shadow-lg rounded-md px-2"
          />
          <ErrorMessage name="email" component="div" className=" text-red-800 italic" />
         </div>

        <div className="w-full my-6 text-start">
        <Field
            type="password"
            name="password"
            placeholder="Password"
            className="outline-none w-full h-10 border border-gray-300 shadow-lg rounded-md px-2"
          />
          <ErrorMessage name="password" component="div" className=" text-red-800 italic" />

        </div>
          <button type="submit" className="bg-red-400 w-full h-10 rounded-md my-2 text-white flex items-center justify-center">
            Login <RiLoader4Fill className="text-xl mx-1 animate-spin" />
          </button>

          <h4 className="flex justify-center">
            Don't have an account{" "}
            <span className="text-blue-700 flex items-center mx-2 cursor-pointer underline">
              click<TbHandClick />
            </span>
          </h4>
          {/* <h4 className="text-sm font-thin mt-8 ">Empowering students through collaboration, resources, community engagement online. Cultivating a supportive online environment for shared learning, growth, and success.</h4> */}

        </Form>
      </Formik>
    </div>
  );
};

export default Login;
