import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios/axiosInstance";

const useQuestions = () => {
  return useQuery({
    queryKey: ["questions"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/question`);
      return res.data?.data || [];
    },
  });
};

export default useQuestions;