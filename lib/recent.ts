export const getRecentSolvedProblem = async () => {
  const { Client } = require("@notionhq/client");

  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        timestamp: "created_time",
        direction: "descending",
      },
    ],
  });
  const programName = response.results[0].properties['Program Name'].title[0].plain_text;
  return programName;
};
