import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-end justify-center p-2   ">
      <div className="w-full lg:h-[84vh] flex flex-col justify-around items-center gap-24 lg:gap-0 bg-white">
        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-[48px] md:text-[75px] font-bold tracking-wide text-gray-900 relative inline-block">
            Welcome to{" "}
            <span className="relative inline-block z-20">
              TSEEP Mastery Box
              <span className="absolute left-0 md:bottom-6 bottom-4 w-full h-3 bg-[#fac166] z-[-1]"></span>
            </span>
          </h1>
          <p className="text-[#636363] text-xl mt-3">
            Unlock your potential with{" "}
            <span className="font-semibold text-gray-800">
              AI inspired tool
            </span>
          </p>
        </div>

        {/* Terms & Conditions */}
        <div className=" pt-7 gap-2 flex flex-col md:flex-row  items-center justify-between space-x-2 border-[#63636335] border-t-2 w-[80%] ">
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="w-5 h-5 border-gray-400 rounded"
            />
            <div className="text-gray-700 font-semibold text-sm text-justify md:w-[420px]">
              I confirm that I have read and accept the terms and conditions and
              privacy policy.
            </div>
          </div>
          <button
            onClick={() => navigate("/login")}
            className={`px-10 text-[10px]  lg:text-[12px] py-2 border-2 border-[#2A586F] text-white font-semibold rounded-md ${
              checked
                ? "bg-[#2A586F] hover:bg-transparent  hover:text-[#2A586F] cursor-pointer"
                : "bg-[#2A586F] cursor-not-allowed "
            }`}
            disabled={!checked}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
