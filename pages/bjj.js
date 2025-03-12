import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";

import image from "@/public/projects.jpg";

const BJJ = ({ data, ...rest }) => {
  console.warn("API_URL UI", process.env.NEXT_PUBLIC_VERCEL_URL);
  console.warn("rest", rest);

  return (
    <React.Fragment>
      <AppHeader>BJJ Journal</AppHeader>
      <AppNav />

      <main className="page">
        <Hero image={image} description={"Sharing my learnings with the world"}>
          BJJ Journal
        </Hero>

        <section className="internal-grid">
          {data.map((el) => (
            <React.Fragment key={el.id}>
              <h2>{el.title}</h2>
              <small>
                <time dateTime={el?.date}>{el?.date}</time>
              </small>

              <ul>
                <li>
                  <p>Goal achieved: {el.stats.goalAchieved ? "Yes" : "No"}</p>
                </li>
                <li>Stats:</li>
                <ol>
                  <li>
                    <p>Wins: {el.stats.wins}</p>
                    <progress
                      value={el.stats.wins}
                      max={el.stats.rolls}
                    ></progress>
                  </li>
                  <li>
                    <p>Losses: {el.stats.losses}</p>
                    <progress
                      value={el.stats.losses}
                      max={el.stats.rolls}
                    ></progress>
                  </li>
                  {/* <li>
                    <p>Rolls: {el.stats.rolls}</p>
                  </li> */}
                </ol>
                <li>
                  <p>Duration: {el.stats.duration} min</p>
                </li>
                <li>
                  <p>Coach: {el.stats.coach}</p>
                </li>
                <li>
                  <p>
                    Techniques: <code>{el.stats.techniques?.join(", ")}</code>
                  </p>
                </li>
              </ul>

              <small>{JSON.stringify(el.content)}</small>
            </React.Fragment>
          ))}
        </section>
      </main>
    </React.Fragment>
  );
};

export default BJJ;

export async function getStaticProps() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

  try {
    const res = await fetch(`${API_BASE_URL}/api/journal`);
    const { data } = await res.json();

    console.warn("This is the data", data);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        data: [],
      },
    };
  }
}
