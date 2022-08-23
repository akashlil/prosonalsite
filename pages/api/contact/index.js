export default function handler(req, res) {
  res.send(process.env.BASE_URL);
}
