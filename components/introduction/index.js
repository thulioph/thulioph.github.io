import React from "react";

const Introduction = ({
  name,
  jobTitle,
  headline,
  location,
  currentCompany,
}) => {
  return (
    <React.Fragment>
      <h2>
        I&#39;m {name}, {jobTitle}, based in{" "}
        <a href={location.link} target="_blank" rel="noreferrer">
          {location.city}, {location.country}
        </a>
        . Currently, working at{" "}
        <a href={currentCompany.website} target="_blank" rel="noreferrer">
          {currentCompany.label}
        </a>
        , {headline}.
      </h2>
    </React.Fragment>
  );
};

export default Introduction;
