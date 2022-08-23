import projectStyle from "./project.module.css";
import { useRouter } from "next/router";
import clientPromise from "../../lib/mongo";

const Project = ({ projects }) => {
  const router = useRouter();
  // get data api
  // const url = "/api/projectdetetals";
  // const { datas: projects } = useUser(url);

  const projectDeatel = (id) => {
    router.push({ pathname: `${id}` });
  };

  return (
    <div>
      <div className="">
        <h1 className="text-center m-5">My Project</h1>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4 text-dark">
          {projects?.map((project) => (
            <div className="col" key={project._id}>
              <div className="card h-100">
                <img
                  src={project.imageslink}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-capitalize">
                    {project.title.slice(0, 20)}
                  </h5>
                  <p
                    className={["card-text", projectStyle.couser].join(" ")}
                    onClick={() => projectDeatel(project.livelink)}
                  >
                    live Link {project.livelink.slice(0, 50)}....
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

export const getServerSideProps = async (context) => {
  const client = await clientPromise;

  const db = client.db("Myprotfilo").collection("addproject");
  let projects = await db.find({}).toArray();
  projects = JSON.parse(JSON.stringify(projects));

  return {
    props: {
      projects,
    },
  };
};

export default Project;
