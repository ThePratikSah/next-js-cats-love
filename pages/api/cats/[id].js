import { catsData } from "../../../data";

export default function handler(req, res) {
  // getting the id from the req query
  const { id } = req.query;
  // now on the basis of id, filter the cat's data from the catsData
  const cat = catsData.find((cat) => cat.id === +id);
  res.status(200).json(cat);
}
