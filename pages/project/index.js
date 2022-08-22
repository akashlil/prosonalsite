import projectStyle from "./project.module.css";
import { useRouter } from "next/router";
import useUser from "../../hook/fetchData";
import axios from "axios";

const Project = () => {
  const router = useRouter();

  // get data api
  const url = "/api/projectdetetals";
  const { datas: projects } = useUser(url);

  const imgPro = "https://i.ibb.co/Gsqv4D7/Untitled-design-1.png";

  const projectDeatel = (id) => {
    router.push({ pathname: `/projectdeatles/${id}` });
  };

  return (
    <div>
      <div className="">
        <h1 className="text-center m-5">My Project</h1>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4 text-dark">
          {projects?.map((project) => (
            <div className="col" key={project.id}>
              <div
                className={["card h-100", projectStyle.couser].join(" ")}
                onClick={() => projectDeatel(project.id)}
              >
                <img src={imgPro} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-capitalize">
                    {project.projectName.slice(0, 20)}
                  </h5>
                  <p className="card-text text-dark">
                    {project.projectDes.slice(0, 50)}....
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted text-end">
                    price <span>Tk 500</span>{" "}
                  </small>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const res = await axios.get(`http://localhost:3000/api/projectdetetals`);
//   const projects = await res.data;
//   return {
//     props: {
//       projects,
//     },
//   };
// };

export default Project;
