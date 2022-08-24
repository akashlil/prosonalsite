// import clientPromise from "../../lib/mongo";
import projectStyle from "./project.module.css";
import axios from "axios";

const Project = ({ projects }) => {
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
                  <a
                    className={["card-text", projectStyle.couser].join(" ")}
                    href={project.livelink}
                    target="_blanck"
                  >
                    live Link {project.livelink.slice(0, 50)}....
                  </a>
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
  // const client = await clientPromise;

  // const db = await client.db("Myprotfilo").collection("addproject");
  // let projects = await db.find({}).toArray();
  // projects = JSON.parse(JSON.stringify(projects));

  const res = await axios.get("http://localhost:3000/api/projects");
  const projects = res.data;

  return {
    props: {
      projects,
    },
  };
};

export default Project;
