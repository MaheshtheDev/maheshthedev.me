// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getLastSiteUpdatedOn } from "../../lib/site-updated-on";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getLastSiteUpdatedOn().then((res1) => {
    return res1;
  });

  if (!response) {
    return res.status(400).json;
  }

  return res.status(200).json({ time: response });
}
