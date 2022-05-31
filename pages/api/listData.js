// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import listData from "../../Components/data/list";

export default function handler(req, res) {
  res.status(200).json(listData)
}
