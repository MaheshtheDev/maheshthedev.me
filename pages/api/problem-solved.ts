import { NextApiRequest, NextApiResponse } from "next";
import { getRecentSolvedProblem } from "../../lib/recent";

export const runtime = "experimental-edge";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getRecentSolvedProblem().then((res) => {
    return res;
  });
  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ noArticles: true });
  }
  return res.status(200).json({ title: response });
}