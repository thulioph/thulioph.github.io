const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_SECRET,
});

const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

async function retrievePageContent(blockID) {
  const response = await notion.blocks.children.list({ block_id: blockID });
  return response;
}

const buildContent = async (pageswithStats) => {
  const results = await Promise.all(
    pageswithStats.map(async ({ id, title, date, ...rest }) => ({
      date,
      title,
      id,
      stats: rest,
      content: (await retrievePageContent(id)).results,
    }))
  );

  return results;
};

const buildStats = (resultItems) => {
  // create a validation before, to check if the properties exist, any change here will break the code
  const listOfProperties = [
    "Title",
    "Goal achieved?",
    "Wins",
    "Losses",
    "Date",
    "Duration (min)",
    "Rolls",
    "Coach",
    "Techniques",
  ];

  return resultItems.map((item) => ({
    id: item.id,
    title: item.properties[listOfProperties[0]]?.title[0]?.plain_text,
    goalAchieved: item.properties[listOfProperties[1]].checkbox,
    wins: item.properties[listOfProperties[2]].number,
    losses: item.properties[listOfProperties[3]].number,
    date: item.properties[listOfProperties[4]].date?.start,
    duration: item.properties[listOfProperties[5]].number,
    rolls: item.properties[listOfProperties[6]].number,
    coach: item.properties[listOfProperties[7]].select?.name,
    techniques: item.properties[listOfProperties[8]].multi_select.map(
      (item) => item.name
    ),
  }));
};

async function retriveDb() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    const items = response.results.map((item) => item);

    const pageWithStats = buildStats(items);
    const pageWithContent = await buildContent(pageWithStats);

    return pageWithContent;
  } catch (error) {
    console.error("Error retrieving database:", error);
    throw new Error("Failed to retrieve database");
  }
}

export default async function handler(req, res) {
  try {
    const data = await retriveDb();
    res.status(200).json({ name: "Journal", data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
