import useSWR from "swr";
import axios from "axios";

function useUser(url) {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // const fetcher = (url) => axios.get(url).then((res) => res.data);

  const fetcher = async (url) => {
    const res = await axios.get(url);
    const projects = await res.data;
    return projects;
  };

  const { data, error } = useSWR("/api/projects", fetcher);

  return {
    datas: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export default useUser;
