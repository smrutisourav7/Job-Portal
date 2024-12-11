import { setAllJobs } from "@/redux/jobSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const { searchedQuery } = useSelector((store) => store.job);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const JOB_API_END_POINT = `${import.meta.env.VITE_API_BASE_URL}${
          import.meta.env.VITE_JOB_API
        }`;

        const res = await axios.get(
          `${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    if (searchedQuery) {
      fetchAllJobs();
    }
  }, [searchedQuery, dispatch]); // Include dependencies

  return null;
};

export default useGetAllJobs;
