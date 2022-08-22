import projectData from "../../../project.json";

export default function handler(req, res) {
  res.send(projectData);
}
