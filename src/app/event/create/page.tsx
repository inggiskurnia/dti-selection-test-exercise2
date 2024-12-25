"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FC, useState } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const CreateEvent: FC = () => {
  const queryClient = useQueryClient();

  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleOnSubmit = async (values: NewEventData) => {
    console.log(values);
    try {
      setIsloading(true);
      const response = await axios.post(
        "http://localhost:3000/events",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        alert("Create new event success !");
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsloading(false);
    }
  };

  interface NewEventData {
    name: string;
  }

  const initialValues: NewEventData = {
    name: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().max(100).required("Event name is required !"),
  });

  return (
    <div>
      <h1 className="text-center">Create New Event</h1>
      <div className="bg-gray-200 text-black p-10">
        <Formik
          onSubmit={handleOnSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="py-2 flex flex-col md:flex-row gap-5">
              <label>Event Name</label>
              <Field
                name="name"
                type="text"
                className="rounded-md"
                placeholder="Event name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message text-red-700"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 p-2 rounded-md text-white"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateEvent;
