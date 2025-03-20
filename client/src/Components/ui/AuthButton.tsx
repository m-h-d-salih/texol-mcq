interface ButtonProps {
    name: string;
    onClick: () => void;
    disabled?: boolean;
  }
  const AuthButton: React.FC<ButtonProps> = ({ name, onClick, disabled }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`mt-8 py-2 font-semibold text-[14px] border-2 rounded-md transition-all
          ${disabled ? "bg-gray-400 border-gray-400 text-white cursor-not-allowed" : "bg-[#2A586F] text-white border-[#2A586F] hover:bg-transparent hover:text-[#2A586F]"}`}
      >
        {name}
      </button>
    );
  };
  
  export default AuthButton;