import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RiLoader4Fill } from "react-icons/ri";
import { TbHandClick } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const validateRegister = (values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = "Full Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!values.institute) {
    errors.institute = "Institute is required";
  }

  if (values.institute === "engineering") {
    if (!values.year) {
      errors.year = "Year is required";
    }
    if (!values.department) {
      errors.department = "Department is required";
    }
  } else if (values.institute === "artsAndScience") {
    if (!values.year) {
      errors.year = "Year is required";
    }
    if (!values.department) {
      errors.department = "Department is required";
    }
  }

  return errors;
};

const Registration = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    institute: "",
    year: "",
    department: "",
  };

  const handleSubmit = (values) => {
    // Handle registration form submission here
    console.log("Register Form Values: ", values);
    // You can add your registration logic here
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center px-2">
      <Formik
        initialValues={initialValues}
        validate={validateRegister}
        onSubmit={handleSubmit}
      >
      {({values})=>(
        <Form className="border text-center w-[98%] md:w-1/3 border-red-400 flex-col rounded-lg p-6" style={{ boxShadow: "1px 1px 3px 2px rgba(193,79,79,0.75)" }}>
          <h4 className=" text-xl md:text-2xl font-semibold">Create an Compex Account</h4>

          <div className="w-full my-6 text-start">
            <Field
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="outline-none w-full h-10 border border-gray-300 shadow-lg rounded-md px-2"
            />
            <ErrorMessage name="fullName" component="div" className="text-red-800 italic" />
          </div>

          <div className="w-full my-6 text-start">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="outline-none w-full h-10 border border-gray-300 shadow-lg rounded-md px-2"
            />
            <ErrorMessage name="email" component="div" className="text-red-800 italic" />
          </div>

          <div className="w-full my-6 text-start">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="outline-none w-full h-10 border border-gray-300 shadow-lg rounded-md px-2"
            />
            <ErrorMessage name="password" component="div" className="text-red-800 italic" />
          </div>

          <div className="w-full my-6 text-start">
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="outline-none w-full h-10 border border-gray-300 shadow-lg rounded-md px-2"
            />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-800 italic" />
          </div>

          <div className="w-full my-6 text-start">
            <Field
              as="select"
              name="institute"
              className="outline-none w-full h-10 border border-gray-300 shadow-lg rounded-md px-2"
            >
              <option value="" label="Select Institute" />
              <option value="engineering" label="Engineering" />
              <option value="artsAndScience" label="Arts and Science" />
            </Field>
            <ErrorMessage name="institute" component="div" className="text-red-800 italic" />
          </div>

          {values.institute === "engineering" && (
            <>
              <div className="w-full my-6 text-start">
                <Field
                  as="select"
                  name="year"
                  className="outline-none w-full h-10 border border-gray-300 shadow-lg rounded-md px-2"
                >
                  <option value="" label="Select Year" />
                  <option value="I" label="I Year" />
                  <option value="II" label="II Year" />
                  <option value="III" label="III Year" />
                  <option value="IV" label="IV Year" />
                  <option value="MCA" label="MCA" />
                </Field>
                <ErrorMessage name="year" component="div" className="text-red-800 italic" />
              </div>

              <div className="w-full my-6 text-start">
                <Field
                  as="select"
                  name="department"
                  className="outline-none w-full h-10 border border-gray-300 shadow-lg rounded-md px-2"
                >
                  <option value="" label="Select Department" />
                  <option value="CSE" label="CSE (Computer Science)" />
                  <option value="ECE" label="ECE" />
                  <option value="EEE" label="EEE" />
                  <option value="MECH" label="MECH" />
                  <option value="CIVIL" label="CIVIL" />
                </Field>
                <ErrorMessage name="department" component="div" className="text-red-800 italic" />
              </div>
            </>
          )}

          {values.institute === "artsAndScience" && (
            <>
              <div className="w-full my-6 text-start">
                <Field
                  as="select"
                  name="year"
                  className="outline-none w-full h-10 border border-gray-300 shadow-lg rounded-md px-2"
                >
                  <option value="" label="Select Year" />
                  <option value="I" label="I Year" />
                  <option value="II" label="II Year" />
                  <option value="III" label="III Year" />
                </Field>
                <ErrorMessage name="year" component="div" className="text-red-800 italic" />
              </div>

              <div className="w-full my-6 text-start">
                <Field
                  as="select"
                  name="department"
                  className="outline-none w-full h-10 border border-gray-300 shadow-lg rounded-md px-2"
                >
                  <option value="" label="Select Department" />
                  <option value="Bsc" label="Bsc" />
                  <option value="BCA" label="BCA" />
                  <option value="Bcom" label="Bcom" />
                </Field>
                <ErrorMessage name="department" component="div" className="text-red-800 italic" />
              </div>
            </>
          )}

          <button type="submit" className="bg-red-400 w-full h-10 rounded-md my-2 text-white flex items-center justify-center">
            Register <RiLoader4Fill className="text-xl mx-1 animate-spin" />
          </button>

          <h4 className="flex justify-center" >
            Don't have an account{" "}
            <NavLink to="/login"  className="text-blue-700 flex items-center mx-2 cursor-pointer underline">
              click<TbHandClick />
            </NavLink>
          </h4>
        </Form>

      )}
        
      </Formik>
    </div>
  );
};

export default Registration;
