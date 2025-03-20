import { JSX, useState } from "react";
import { countryOptions } from "./Login";
import { Link, useNavigate } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axiosInstance from "../axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

type CountryOption = {
  value: string;
  label: JSX.Element;
};
export interface IUser{
  fullName?:string,
  email?:string,
  mobile:string,
  status?:string,
  password:string
}
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits")
    .required("Mobile number is required"),
    status: Yup.string().required("Please select a status"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function Register() {
  const navigate=useNavigate();
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    countryOptions[0]
  );
  const register=useMutation({
    mutationFn:async(data:IUser)=>{
     await axiosInstance.post(`/auth/register`,data);
      
    },
    onSuccess:()=>{
      toast.success(`Registration Successfull`);
      setTimeout(()=>{

        navigate(`/login`);
      },2000)
    },
    onError:()=>{
      toast.error(`Something went wrong`);
    }
  })

  return (
    <div className="w-full flex-1 flex-col flex justify-center items-center">
      <div className="relative inline-block text-[31px] font-bold">
        <h1 className="relative z-50">Register</h1>
        <span className="absolute left-0 bottom-1 w-full h-2 bg-[#fac166] z-0"></span>
      </div>

      <Formik
        initialValues={{ fullName: "", email: "", mobile: "", status: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          register.mutate(values)
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className="p-4 flex flex-col shadow-lg">
            <label className="text-[18px] font-bold mt-3">Full Name</label>
            <Field type="text" name="fullName" className="p-2 outline-none border-2 rounded-md mt-2" placeholder="Enter your name" />
            <ErrorMessage name="fullName" component="small" className="text-red-500" />

            <label className="text-[18px] font-bold mt-3">Email</label>
            <Field type="text" name="email" className="p-2 outline-none border-2 rounded-md mt-2" placeholder="Enter your email" />
            <ErrorMessage name="email" component="small" className="text-red-500" />

            <label className="text-[18px] font-semibold mt-2">Mobile Number</label>
            <div className="flex gap-2 flex-row">
              <Select
                options={countryOptions}
                value={selectedCountry}
                onChange={(newValue: SingleValue<CountryOption>) => setSelectedCountry(newValue)}
                className="md:w-[110px] w-[75px] border-2 rounded-md mt-2"
                isSearchable={false}
              />
              <Field type="tel" name="mobile" className="p-2 md:pl-10 outline-none border-2 rounded-md mt-2" placeholder="Enter your phone number" />
            </div>
            <ErrorMessage name="mobile" component="small" className="text-red-500" />

            <label className="text-[18px] font-bold mt-3">Current Status</label>
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <Field type="radio" name="status" value="student" className="hidden" />
                <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    values.status === 'student' ? 'bg-gray-800' : 'bg-transparent'
                  }`}></div>
                </div>
                <span>Student</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <Field type="radio" name="status" value="employee" className="hidden" />
                <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    values.status === 'employee' ? 'bg-gray-800' : 'bg-transparent'
                  }`}></div>
                </div>
                <span>Employee</span>
              </label>
            </div>
            <ErrorMessage name="status" component="small" className="text-red-500" />

            <label className="text-[18px] font-bold mt-3">Password</label>
            <Field type="password" name="password" className="p-2 outline-none border-2 rounded-md mt-2" placeholder="Enter Password" />
            <ErrorMessage name="password" component="small" className="text-red-500" />

            <button type="submit" className="mt-5 py-2 font-semibold text-[14px] bg-[#2A586F] text-white border-2 rounded-md">
              Save
            </button>
            <small className="text-center mt-3">
              Already have an account? <Link to="/login" className="text-blue-600">Login Now</Link>
            </small>
          </Form>
        )}
      </Formik>
    </div>
  );
}