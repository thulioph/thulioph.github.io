const personalInfo = {
  name: "Thulio Philipe",
  nickname: "thulioph",
  location: {
    city: "Recife",
    country: "Brazil",
    link: "https://en.wikipedia.org/wiki/Recife",
  },
  jobTitle: "Senior Software Engineer",
  headline: "building high-quality software to change people's life",
  description: `
    I have been working as a software engineer for almost 10 years. I already worked with ad agencies, startups, software studios and as a consultant, always focused on the Front-End side (UI). I like to share my knowledge through <a href="https://speakerdeck.com/thulioph">talks</a>, <a href="https://medium.com/@thulioph_">articles</a> and all repositories on my <a href="https://github.com/thulioph">Github</a> are open. My current focus is on WebApps and some topics that guide my studies are Performance, Security, User Engagement and Code Quality.
  `,
};

const professionalInfo = {
  bio: {
    summary:
      "I have been working with the web for one decade, acting through different layers and processes of software development. I started my journey as a designer but I quickly realized that the front-end was my passion. I like to work between the design and engineering teams, focusing on quality, security, performance, and usability. I am a multidisciplinary professional and creative who believes in continuous improvement and is passionate about challenging myself to leverage all expectations.",
    experience:
      "I easily engage with teams in different structures and styles, from AD agencies, software studios, consulting, and products. I already worked for industries in Telecommunications, Health services, Financial Services, Retail, Food Delivery, and Education.",
    toolbox: [
      "Collaboration",
      "Clean and direct communication",
      "Solution Focused",
      "Curiosity",
      "Proactivity",
      "Team-Oriented",
    ],
    longTerm:
      "I am looking for opportunities to collaborate with teams whose goal is to develop software to change the world.",
  },
  image:
    "https://avatars2.githubusercontent.com/u/2343288?s=460&u=34b95449c5414b41560dd5b41c97cf414bad8c8c&v=4",
  currentCompany: {
    label: "HelloFresh",
    website: "https://www.hellofresh.com/",
  },
  experience: [
    {
      title: "HelloFresh - Senior Software Engineer @ Benefits Management",
      period: "2023 - present",
      website: "https://www.hellofresh.de/",
      description: `
        I’m working as a full-stack web developer on the Benefits Management team, responsible for the main B2B platform that handles multiple products (Vouchers, Marketing Campaigns, Pricing Tests, and Discount Communications) within the HelloFresh group.
        <br /><br />
        My role involves the development of features and building internal tools to support the ecosystem of benefits. This position made me shift to a mindset focused on monitoring and quick recovery, supported by validating ideas with Proof of Concepts (PoC) before launching broadly. That results in deliveries that are easy to understand, diagnose, monitor, and reverse. This enabled the team to deliver with more confidence, quality, and lower risk. I work with hybrid teams of 5 to 10 people.
      `,
      achievements: [
        "I led the adoption of Feature Flag development, from defining strategy and implementation to documenting processes and educating the team on their benefits. Used Statsig, Next.js, and Node.js.",
        "I introduced new ways of working to improve collaboration and reduce risks, including Given-When-Then, Desk Checks, RAID logs, Proof of Concepts (PoCs), and Development with Feature Flag.",
        "I led the strategy for scaling a feature that enabled pricing tests across all landing pages at HelloFresh, setting the tools to reduce risk while improving monitoring and tracking. Tools: Contentful, Cloudflare Workers, React.js, Honeycomb",
        "I led technical improvements of the platform, from identifying problems and planning solutions to executing tasks and organizing teamwork, ensuring technical progress alongside delivering value to the business.",
        "I led the Knowledge Sharing group, organizing topics, communication, agendas, and regular meetings to ensure continuous team learning. ",
        "I led the team's monitoring and tracking topics, adding new capabilities and implementing tools, good practices, and automation and training the team. Tools: Grafana, Node.js, Sentry, Next.js, GitHub Actions.",
      ],
      stack: [
        "Next.js",
        "Node.js",
        "Statsig",
        "Feature Flags",
        "Agile methodologies",
        "Contentful",
        "Cloudflare Workers",
        "React.js",
        "Honeycomb",
        "Grafana",
        "Sentry",
        "GitHub Actions",
      ],
    },
    {
      title: "HelloFresh - Senior Software Engineer @ Experimentation Squad",
      period: "2022 - 2023",
      website: "https://www.hellofresh.de/",
      description: `
        I worked as a full-stack web developer in the Experimentation Squad, responsible for cultivating and scaling the experimentation culture across the HelloFresh group.
        <br /><br />
        My role involved the development of features and building internal tools to support various user experience research methods, such as A/B and A/A tests, for HelloFresh business units worldwide. Collaborating with Product Owners, Data Scientists, and other engineers across the different data stages, from ingestion and processing to data visualization. I work with hybrid teams of 5 to 10 people.
      `,
      achievements: [
        "I led an automation initiative that reduced metric onboarding time by 97%, using tools like Airflow, S3, Athena, GitHub Actions, FastAPI, Next.js, and Sentry.",
        "I drove the technical modernization of the primary experimentation analysis platform by defining testing strategies and quality assurance practices, establishing clear coding conventions and standards, improving the CI pipeline, and educating and mentoring the team to adopt new tools and best practices.",
        "I mentored junior and mid-level engineers, facilitating knowledge sharing and professional growth.",
        "I managed task analysis, mapping, and distribution, actively removing impediments, refining workflows, and facilitating cross-team collaboration.",
        "I make complex problems into clear, incremental deliverables, ensuring continuous value delivery and consistent progress toward business goals.",
      ],
      stack: [
        "Airflow",
        "AWS S3",
        "AWS Athena",
        "FastAPI",
        "Next.js",
        "Sentry",
        "Github Actions",
        "Continuos Integration",
        "Data visualization",
        "Agile methodologies",
      ],
    },
    {
      title: "Thoughtworks",
      period: "2019 - 2021",
      website: "https://www.thoughtworks.com/",
      description: `
        I worked as a full-stack web developer for a giant Canadian company from the Telecommunication industry. Working on different layers, from UI to server, since product selection, cart, and then checkout. I worked on remote teams with 3 to 20 people.
        <br />         
        I acted as a tech anchor, helping the tech lead with things regarding the team, decision making, analysis, mapping and distribution of activities to be done, unblocking impediments, refining processes, and collaborating across different teams.
      `,
      achievements: [
        "I built an automation that reduced the infrastructure cost for a few teams, using tools like Github, Openshift, and Jenkins.",
        "I led the implementation of a new feature to allow customers to upgrade end-to-end their network for some provinces in Canada.",
        "I worked on a feature that gives the user the ability to save their cart and keep buying in another moment, which exceeded the expectations of rate conversions.",
        "I worked on the conception of a new product for the client, and once it ended it was a case of success.",
        "I dealt with different vendors and contractors, mapping and making available new services alongside them.",
        "I led the technical analysis for the new architecture of cart and checkout flow.",
      ],
      stack: [
        "Javascript",
        "Ramda",
        "React",
        "Nodejs",
        "Docker",
        "Google Cloud Platform",
        "Terraform",
        "OpenShift",
        "PostgreSQL",
        "Contentful",
        "Jenkins",
      ],
    },
    {
      title: "Labcodes",
      period: "2016 - 2019",
      website: "https://labcodes.com.br/",
      description: `
        I worked on a diverse domain of projects, mostly focused on the front-end, close to the design team, creating design systems, researching with the customer, defining good practices, creating boilerplates, using different resources to improve the experience, performance, and accessibility of the products. I worked on teams with 5 to 20 people.
        <br />

        I had the opportunity to share my knowledge and experience through articles and talks in meetups, for my coworkers, and in different cities around my country.
      `,
      achievements: [
        "I worked on the definition of patterns, reinforcing good practices, preparing the ground to start something new and fast.",
        "I built different tools for internal usage in order to help our routine in different situations, since technical tools like CLI, until browser extensions, an app to follow the status of hours, budgets, days off, and so on.",
        "I worked on the conception of a product that uses technology to fight against women's violence.",
      ],
      stack: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Styled Components",
        "Redux",
        "Sentry",
        "CircleCI",
        "Heroku",
        "Django",
        "Figma",
      ],
    },
    {
      title: "Epitrack",
      period: "2014 - 2016",
      website: "https://www.epitrack.tech/",
      description: `
        I worked as a front-end engineer, developing a platform for vigilance surveillance, building dashboards for monitoring, and systems to help the detection of diseases using digital tools. I worked on a remote team with 6 to 15 people.
        <br />

        In addition to that, I had the opportunity to be part of a startup since the beginning, working close to doctors, researchers, biologists, teachers, and so on. From the technical perspective, I also developed strong abilities on maps, location, real-time applications, internationalization, and mobile devices, working on a solution to be used by the population from Brazil, the USA, Canada, and Porto Rico.
      `,
      achievements: [
        "I worked on defining conventions and good practices, architecture, and automation.",
        "I worked on the migration, extension, and availability of a system for 3 different languages, using tools like i18next",
        "I worked on mapping and gathering all information from the user journey to identify improvements, using Google Tracking Events.",
        "I worked on improvements for performance and usability due to a huge amount of data being populated on a map, using Google Maps API.",
      ],
      stack: [
        "HTML",
        "CSS",
        "Javascript",
        "Angular",
        "NodeJS",
        "Google Maps",
        "Ionic",
        "Adobe Suite",
        "Grunt",
        "Bower",
        "Gulp",
      ],
    },
    {
      title: "Guava Software",
      period: "2014 - 2014",
      website: "https://guava.software/",
      description: `
        I worked on projects in different domains, always focused on the front-end and close to the design team. I was responsible for organizing the codebase, settings conventions, patterns, good practices for HTML and CSS when possible using animations to improve the experience of the products we were building. I worked on a team with 6 to 10 people.
        <br />

        I was introduced to a completely different way to work and visualize software, in addition to that it was my first contact with the remote culture, teams from different regions with different languages, and build software on a large scale.
      `,
      achievements: [],
      stack: ["HTML", "CSS", "Javascript", "Ruby", "Adobe Suite"],
    },
    {
      title: "Bold Advertise Agency",
      period: "2014 - 2014",
      website: "https://www.boldcomunicacao.com.br/",
      description: `
        I worked on a variety of projects for the web, since games for social networks, landing pages, animations using flash, dashboards, and complex interfaces, always focused on the front-end layer. I acted close to the design team, aligning the possibilities given the technical limitations and the end date of the project. I worked on a team with 6 to 15 people.
        <br />

        I became a more dynamic professional, aligning what the customer needs with technology, applying good practices and concepts like progressive enhancement and responsive design on a daily basis.
      `,
      achievements: [
        "I decided to start to share my knowledge and experience through articles and talks for local communities",
        "I started to participate in client facing meetings and had the opportunity to bring the technology perspective",
      ],
      stack: [
        "HTML",
        "CSS",
        "Javascript",
        "PHP",
        "Google APIs",
        "Adobe Suite",
        "Flash",
      ],
    },
  ],
};

const educationInfo = {
  education: [
    {
      title: "Web Apps",
      field: "Specialization",
      period: "2013 - 2015",
      website: "https://www.linkedin.com/school/unibratec/about/",
    },
    {
      title: "Graphic Design",
      field: "Btech",
      period: "2011 - 2013",
      website: "https://www.linkedin.com/school/unibratec/about/",
    },
  ],
};

const socialInfo = {
  extraSocial: [
    {
      title: "StackOverflow",
      website: "https://stackoverflow.com/users/4008711/thulioph",
    },
    {
      title: "Unsplash",
      website: "https://unsplash.com/@thulioph",
    },
    {
      title: "Wakatime",
      website: "https://wakatime.com/@thulioph",
    },
    {
      title: "LastFM",
      website: "https://www.last.fm/pt/user/Thulioph",
    },
    {
      title: "Codepen",
      website: "https://codepen.io/thulioph",
    },
    {
      title: "Medium",
      website: "https://medium.com/@thulioph_",
    },
    {
      title: "CodeSandBox",
      website: "https://codesandbox.io/u/thulioph",
    },
    {
      title: "LinkedIn",
      website: "https://linkedin.com/in/thulioph",
    },
    {
      title: "Github",
      website: "https://github.com/thulioph",
    },
    {
      title: "Twitter",
      website: "https://twitter.com/@thulioph_",
    },
  ],
};

module.exports = {
  personalInfo,
  professionalInfo,
  educationInfo,
  socialInfo,
};
