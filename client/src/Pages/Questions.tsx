import { useEffect, useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { BiBookmark } from "react-icons/bi";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import useWindowWidth from "../hooks/useWindowWidth";
import { useNavigate, useSearchParams } from "react-router-dom";
import useQuestions from "../hooks/useQuestions";

type Props = {};

export default function Questions({}: Props) {
  const navigate=useNavigate();
  const symbols = [
    { id: 1, color: "text-green-600", label: "Attended" },
    { id: 2, color: "text-red-600", label: "Not Attended" },
    { id: 3, color: "text-gray-400", label: "Yet to Attend" },
  ];

  const [sidebarVisible, setSidebarVisible] = useState(true);
  const windowWidth = useWindowWidth();
  const isLargeScreen = windowWidth >= 1000; 
  const [mark,setMark]=useState<any >(localStorage.getItem('mark')||0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(
    
  );
  const [page,setPage]=useState<number >(1);
  const [searchParams, setSearchParams] = useSearchParams();
useEffect(()=>{
  const pageNo=Number(searchParams.get('page')) || 0;
  setPage(pageNo);
},[searchParams])
useEffect(()=>{
  const mark=localStorage.getItem('mark') || 0;
 
  setMark(mark)
},[setMark])

  useEffect(() => {
    if (isLargeScreen) {
      setSidebarVisible(true); 
    } else {
      setSidebarVisible(false); 
    }
  }, [isLargeScreen]);
const { data=[], isLoading, isError } = useQuestions();
const {questions=[],totalQuestions}=data;
const handleNext=(e:Event)=>{
  e.preventDefault();
  if(page===9){
    navigate(`/success`)
  }
 else if(page!==9){
    if(selectedAnswer===questions[page].answer){
      setMark((prev:any)=>Number(prev)+5);
      localStorage.setItem('mark',`${Number(mark+5)}`)
    }
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", String(page +1 ));
    setSearchParams(newSearchParams);
  }
}

const handlePrev=(e:Event)=>{
  e.preventDefault();
  if(page!==0){
  
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", String(page - 1));
    setSearchParams(newSearchParams);
  }
}
if(isLoading)
  return <div>Loading</div>
if(isError)
  return <div>Error loading data</div>
  return (
    <div className=" bg-white flex flex-col  ">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
      className={`
        ${sidebarVisible 
          ? "w-full sm:w-64 md:w-72 border-r border-gray-200 fixed sm:relative" 
          : "w-0 sm:w-0"
        } 
        h-screen overflow-y-auto
        transition-all duration-300  
        bg-white z-50 shadow-lg sm:shadow-none
      `}
    >
      {sidebarVisible && (
        <div className="p-4">
          <button
            onClick={() => setSidebarVisible(false)}
            className="text-2xl absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100"
            aria-label="Close sidebar"
          >
            <MdOutlineSpaceDashboard />
          </button>

          <div className="flex flex-col mt-16 gap-4">
            <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8,9,10].map((num) => (
                <button
                  key={num}
                  className={`aspect-auto py-2 rounded border 
                  flex items-center justify-center text-lg ${num===page+1?'bg-lime-100':null}`}
                >
                  {num}
                </button>
              ))}
            </div>
            
            

            <div className="mt-8 sm:mt-auto">
              <div className="shadow-md p-3 rounded-md mt-6 sm:mt-48">
                {symbols && symbols.length > 0 ? (
                  symbols.map((symbol) => (
                    <div
                      key={symbol.id}
                      className="flex items-center gap-2 mt-1"
                    >
                      <FaCircle className={`${symbol.color} text-xs`} />
                      <span className="text-sm">{symbol.label}</span>
                    </div>
                  ))
                ) : (
                ""
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>

        {/* Main quiz area */}
        <div className="flex-1 p-6 overflow-auto">
          {!sidebarVisible && (
           <button
           onClick={() => setSidebarVisible(true)}
           className={`text-2xl absolute left-4  ${sidebarVisible ? " top-32" : " left-4 top-28"}`}
         >
           <MdOutlineSpaceDashboard />
         </button>
         
          )}

          <h1 className="md:text-2xl text-[20px] font-bold text-center text-[#2A586F] mb-5 relative ">
            Asses Your span Intelligence
            <span className="absolute lg:right-[36%] right-1 md:right-52 bottom-1 lg:w-[12%] md:w-[125px] w-28 h-1 bg-[#fac166] "></span>
          </h1>

          <div className="flex  items-center md:justify-between ">
            <div className="h-2 md:w-[70%] w-36 bg-gray-200 rounded-full overflow-hidden ">
              <div
                className="h-full bg-[#2A586F]"
                style={{
                  width: `${((page+1) / totalQuestions) * 100}%`,
                }}
              ></div>
            </div>
            <div className="text-lg font-semibold whitespace-nowrap lg:mr-36 mr-1">
              {page+1}/{totalQuestions}
            </div>
            <div className="flex items-center bg-[#fac166] text-yellow-800 px-3 py-1 text-md rounded-sm">
              <IoMdTime className="mr-1" />
              <span>5 Min</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 shadow-sm ">
            <div className="flex items-start mb-3">
              <div className="bg-[#2A586F] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                {page+1}
              </div>
              <h2 className="text-lg font-medium">{questions[page].question}</h2>
            </div>

            <div className="space-y-3 bg-white p-3">
              {questions[page].options.map((option:any) => (
                <div
                  key={option}
                  className={`p-3 rounded-md flex items-center cursor-pointer w-60 group bg-gray-100 ${selectedAnswer === option?'bg-lime-100':''} `}
                  onClick={() => setSelectedAnswer(option)}
                >
                  <label className="flex items-center gap-2 cursor-pointer w-full  group">
                    <input
                      type="radio"
                      name="quiz-answer"
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={() => setSelectedAnswer(option)}
                      className="hidden group-[&:checked]:bg-[#2A586F] "
                    />
                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center group-has-[:checked]:border-[#2A586F]">
                      <div className="w-2.5 h-2.5 bg-gray-400 rounded-full group-has-[:checked]:bg-[#2A586F]"></div>
                    </div>
                    <span className="ml-2">{option}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <button className="cursor-pointer">
              <BiBookmark className="text-2xl text-gray-400" />
            </button>
            <div className="flex gap-2">
              <button onClick={(e:any)=>handlePrev(e)} className="flex items-center gap-1 px-5 py-1 rounded  text-white bg-[#2A586F]">
                <IoArrowBack className="mr-1" /> Previous
              </button>
              <button onClick={(e:any)=>handleNext(e)} className="flex items-center gap-1 px-3 py-1 rounded  text-white bg-[#2A586F]">
                Next <IoArrowForward className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
