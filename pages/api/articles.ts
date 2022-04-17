import type { NextApiRequest, NextApiResponse } from "next";
import { getRecentArticles } from "../../lib/recent-articles";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const GET_RECENT_ARTICLES = `
        query getRecentArticles($page: Int!) {
            user(username: "MaheshtheDev") {
                publication {
                    posts(page: $page) {
                        title
                        brief
                        slug
                    }
                }
            }
        }`;

  const response = await getRecentArticles(GET_RECENT_ARTICLES, {
    page: 0,
  }).then((result) => {
    return result.data.user.publication.posts;
  });

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ noArticles: true });
  }

  return res.status(200).json({
    response,
  });
}
