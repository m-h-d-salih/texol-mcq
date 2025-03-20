import { useNavigate } from "react-router-dom";

export const GetStartedButton: React.FC<{ checked: boolean }> = ({ checked }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/login")}
      className={`px-10 text-[10px] lg:text-[12px] py-2 border-2 border-[#2A586F] text-white font-semibold rounded-md ${
        checked
          ? "bg-[#2A586F] hover:bg-transparent hover:text-[#2A586F] cursor-pointer"
          : "bg-[#2A586F] cursor-not-allowed"
      }`}
      disabled={!checked}
    >
      Get Started
    </button>
  );
};