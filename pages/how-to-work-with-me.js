import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";
import * as personalInfoData from "@/services/personal-info";

const data = [
  {
    group: "Environments I like to work in",
    items: [
      "I like quiet, and comfortable places to focus without interruptions.",
      "I like having people around in the office.",
    ],
  },
  {
    group: "Preferred working hours",
    items: [
      "~10:00 to ~19:00",
      "I prefer to have meetings in the morning with a fresh and clear mind.",
    ],
  },
  {
    group: "Communication preferences",
    items: [
      "Async when possible.",
      "Through messages or face-to-face, feel free to choose.",
      "Give me as much context as you can and always assume I have no idea about what are you talking.",
      "In a remote environment, I prefer over-communication.",
    ],
  },
  {
    group: "Preferred ways to receive feedback",
    items: [
      "Immediately.",
      "I am open to receiving any kind of feedback.",
      "For more structured feedback, please consider small improvements.",
      "For more generic feedback, feel free to choose by face-to-face or message.",
      "Awkward silences are terrible, if there were no questions or comments after presenting something or sharing an idea, I'll take it as I was not clear enough or people didn't like it.",
    ],
  },
  {
    group: "Things I need",
    items: [
      "Feedback to continue improving and learning.",
      "Support, time to think and process, and space for growth.",
      "I like to be aware as soon as possible of the next steps we're going to take or when something is going to change.",
      "Challenges to keep me motivated and move forward.",
    ],
  },
  {
    group: "How I learn best",
    items: [
      "Doing by myself and sometimes making mistakes.",
      "Asking Why.",
      "Sharing knowledge.",
      "Through feedback.",
      "Listening and talking with people from different backgrounds and domains.",
      "Reading.",
    ],
  },
  {
    group: "Things I struggle with",
    items: [
      "Unclear or unspoken expectations. Be clear with what do you want and expect from me.",
      "Multitasking. Let me finish one thing before starting another, and be patient.",
    ],
  },
  {
    group: "Things I love",
    items: [
      "Art.",
      "My little and crazy cat, Pudding 🐈.",
      "My plants 🪴.",
      "Music.",
      "Sports (Cycling, Jiu-Jitsu).",
      "Traveling.",
      "Good food and good drink.",
    ],
  },
  {
    group: "Other things about me",
    items: [
      "I am vegetarian.",
      "I'm very honest and open with what I have in mind.",
    ],
  },
];

const HowToWorkWithMePage = () => {
  const { personalInfo } = personalInfoData;

  return (
    <React.Fragment>
      <AppHeader>How to work with me?</AppHeader>
      <AppNav />

      <main className="page">
        <Hero
          description={`Hi 👋🏽! My name is ${personalInfo.name}. I work as a ${personalInfo.jobTitle}, and I’m from ${personalInfo.location[0].country} 🇧🇷`}
        >
          How to work with me?
        </Hero>

        <section className="internal-grid">
          {data.map(({ group, items }) => (
            <React.Fragment key={group}>
              <h2>{group}</h2>
              <ul className="uses-list">
                {items.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            </React.Fragment>
          ))}

          <h2>My favorite saying</h2>
          <ul className="uses-list">
            <li>
              <a
                href={"https://genius.com/884932"}
                target="_blank"
                rel="noreferrer"
              >
                &quot;Nothing like one day after another day&rdquo;
              </a>{" "}
              - Racionais MC’s
            </li>
          </ul>
        </section>
      </main>
    </React.Fragment>
  );
};

export default HowToWorkWithMePage;
