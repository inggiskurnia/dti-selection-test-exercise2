"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FC } from "react";

interface UserFormData {
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  dateOfBirth: string;
  state?: string;
  pinCode?: string;
}

const CreateUserForm: FC = () => {
  const countryCode = ["+62", "+63", "+64"];
  const stateList = ["Test 1", "Test 2", "Test 3"];

  const initialValue = {
    name: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    dateOfBirth: "",
    state: "",
    pinCode: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3).required("Name is required"),
    email: Yup.string().email("Invalid email test"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone Number is required"),
    dateOfBirth: Yup.date().required("Date is required"),
  });

  const handleOnsubmit = (values: UserFormData) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center w-full p-6 md:pt-10 min-h-screen items-center">
      <div className="bg-white text-black p-4 md:w-1/2 md:p-10 rounded-md shadow-md">
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleOnsubmit}
          validateOnBlur
        >
          <Form>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-center pb-14">
                Create New User
              </h1>
              {/* Name Field */}
              <div className="grid grid-rows-2 grid-cols-2 gap-2">
                <label>Name</label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Jack Sullivan"
                  className="border-2 rounded-md p-2"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message text-red-500 row-start-2 col-start-2"
                />
              </div>

              {/* Email Field */}
              <div className="grid grid-rows-2 grid-cols-2 gap-2">
                <label>Email</label>
                <Field
                  name="email"
                  type="text"
                  placeholder="Jack.s@email.com"
                  className="border-2 rounded-md p-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message text-red-500 row-start-2 col-start-2"
                />
              </div>

              {/* Phone Number Field */}
              <div className="grid grid-rows-2 grid-cols-2 gap-2">
                <label>Phone Number</label>
                <div className="flex gap-5">
                  <Field
                    name="countryCode"
                    as="select"
                    className="border-2 rounded-md p-2"
                  >
                    {countryCode.map((countryCode) => (
                      <option value={countryCode}>{countryCode}</option>
                    ))}
                  </Field>
                  <Field
                    name="phoneNumber"
                    type="tel"
                    placeholder="89637551550"
                    className="border-2 rounded-md p-2 w-full"
                  />
                </div>
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="error-message text-red-500 row-start-2 col-start-2"
                />
              </div>

              {/* Date of Birth Field */}
              <div className="grid grid-rows-2 grid-cols-2 gap-2">
                <label>Date of Birth</label>
                <Field
                  name="dateOfBirth"
                  type="date"
                  placeholder=""
                  className="border-2 rounded-md p-2"
                />
                <ErrorMessage
                  name="dateOfBirth"
                  component="div"
                  className="error-message text-red-500 row-start-2 col-start-2"
                />
              </div>

              {/* State Field */}
              <div className="grid grid-rows-2 grid-cols-2 gap-2">
                <label>State</label>
                <Field
                  name="state"
                  as="select"
                  className="border-2 rounded-md p-2"
                >
                  <option value="" disabled>
                    Select a state
                  </option>
                  {stateList.map((state, index) => (
                    <option value={state} key={index}>
                      {state}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="state"
                  component="div"
                  className="error-message text-red-500 row-start-2 col-start-2"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black text-white p-3 rounded-md mt-4"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateUserForm;
