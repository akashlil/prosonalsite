import axios from "axios";
import { useRouter } from "next/router";
import useUser from "../../hook/fetchData";

const Projectdetals = () => {
  const router = useRouter();

  const { projectdetals } = router.query;
  const url = `/api/projectdetetals/${projectdetals}`;
  const { datas: project } = useUser(url);
  // const [s] = project[0];
  // console.log(s);
  return (
    <div>
      {project?.map((s) => (
        <>
          <h1>{s.projectName}</h1>
        </>
      ))}
    </div>
  );
};

// export const getServerSideProps = async (context) => {
//   const { params } = context;
//   const res = await axios.get(
//     `http://localhost:3000/api/projectdetetals/${params.projectdetals}`
//   );
//   const datas = await res.data;
//   return {
//     props: {
//       datas,
//     },
//   };
// };

export default Projectdetals;
