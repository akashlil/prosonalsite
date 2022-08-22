import projectData from "../../../project.json";

export default function handler(req, res) {
  const projectid = req.query.projectid;
  const singlaProject = projectData.filter((s) => s.id == projectid);

  res.json(singlaProject);
}
