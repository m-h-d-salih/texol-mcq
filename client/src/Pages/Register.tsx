import { JSX, useState } from "react";
import { countryOptions } from "./Login";
import { Link } from "react-router-dom";
import Select, { SingleValue } from "react-select";

type Props = {};
type CountryOption = {
  value: string;
  label: JSX.Element;
};
export default function Register({}: Props) {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    countryOptions[0]
  );
  return (
    <div className="w-full flex-1  flex-col flex justify-center items-center   ">
      <div className="relative inline-block text-[31px] font-bold  ">
        <h1 className="relative z-50">Register</h1>
        <span className="absolute left-0 bottom-1 w-full h-2 bg-[#fac166] z-0 "></span>
      </div>

      <form className="p-4 flex flex-col  shadow-lg   ">
        <label className="text-[18px] font-bold mt-3 ">Full Name</label>
        <input
          type="text"
          className="flex-1 p-2 outline-none text-gray-700 border-2 border-[#c4c4c4] rounded-md mt-2   "
          placeholder="Enter your name"
        />
        <label className="text-[18px] font-bold mt-3 ">Email</label>
        <input
          type="text"
          className="flex-1 p-2 outline-none text-gray-700 border-2 border-[#c4c4c4] rounded-md mt-2   "
          placeholder="Enter your email"
        />
        <label className="text-[18px] font-semibold  mt-2 ">
          Mobile Number
        </label>
        <div className="flex gap-2 flex-row  ">
          <Select
            options={countryOptions}
            value={selectedCountry}
            onChange={(newValue: SingleValue<CountryOption>) =>
              setSelectedCountry(newValue)
            }
            className="md:w-[110px]  w-[75px] text-gray-800 border-2  border-[#c4c4c4] rounded-md mt-2"
            isSearchable={false}
            styles={{
              control: (provided) => ({
                ...provided,
                border: "none",
                boxShadow: "none",
                backgroundColor: "transparent",
              }),

              indicatorSeparator: () => ({
                display: "none", // Removes vertical separator
              }),

              dropdownIndicator: (provided) => ({
                ...provided,
                padding: "2px", // Reduces space around the arrow
              }),
            }}
          />

          <input
            type="tel"
            placeholder="Enter your phone number"
            className=" p-2 md:pl-10 outline-none text-gray-700 border-2 border-[#c4c4c4] rounded-md mt-2 "
          />
        </div>
        <label className="text-[18px] font-bold mt-3 ">Current Status</label>
        <div className="flex gap-4 items-center">
          {/* Student */}
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name="role"
              value="student"
              className="hidden group-[&:checked]:bg-[#2A586F]"
            />
            <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center group-has-[:checked]:border-[#2A586F]">
              <div className="w-2.5 h-2.5 bg-gray-400 rounded-full group-has-[:checked]:bg-[#2A586F]"></div>
            </div>
            <span className="text-black">Student</span>
          </label>

          {/* Employee */}
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name="role"
              value="employee"
              className="hidden"
            />
            <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center group-has-[:checked]:border-[#2A586F]">
              <div className="w-2.5 h-2.5 bg-gray-400 rounded-full group-has-[:checked]:bg-[#2A586F]"></div>
            </div>
            <span className="text-black">Employee</span>
          </label>
        </div>

        <label className="text-[18px] font-bold mt-3 ">Password</label>
        <input
          type="password"
          className="flex-1 p-2 outline-none text-gray-700 border-2 border-[#c4c4c4] rounded-md mt-2"
          placeholder="Enter Password"
        />

        <button className="mt-5 py-2 font-semibold text-[14px] bg-[#2A586F]  text-white border-2 border-[#2A586F] hover:bg-transparent hover:text-[#2A586F] rounded-md">
          Save
        </button>
        <small className="text-center mt-3">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600">
            Login Now
          </Link>
        </small>
      </form>
    </div>
  );
}
