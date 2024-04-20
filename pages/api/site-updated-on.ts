// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getLastSiteUpdatedOn } from "../../lib/site-updated-on";

export const runtime = "experimental-edge";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getLastSiteUpdatedOn().then((res) => {
    return res;
  });

  if (!response) {
    return res.status(400).json;
  }

  return res.status(200).json({ time: response });
}
