// src/components/ErrorPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {
  statusCode?: number;
  title?: string;
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ 

}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-2 w-full ">
    
      <img src="/404_Img.png" alt="" className='md:w-[60%] w-full'/>
        
        <p className="text-gray-600 mt-7 text-[45px] tracking-wider">Soory,it looks like the page get</p>
        <button 
          onClick={() => navigate('/')}
          className="px-10  py-3  text-sm font-semibold mt-5 border-2 bg-[#2A586F] text-white  rounded-md"
        >
          Back to Home
        </button>
    
    </div>
  );
};

export default ErrorPage;