import useSWR from "swr";
import axios from "axios";

function useUser(url) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(url, fetcher);
  return {
    datas: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useUser;

/*  get data api
  const fetcher = async (url) => {
    const res = await axios.get(url);
    const projects = await res.data;
    return projects;
  };
  const fetcher = (url) => fetch(url).then((res) => res.json()); 
  ///////////..................................................///////
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data: projects, error } = useSWR("/api/projectdetetals", fetcher);
  const projects = data;
  ////////////////////
  */
