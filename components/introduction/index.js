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
        I'm {name}, {jobTitle}, based in{" "}
        <a href={location.link} target="_blank">
          {location.city}, {location.country}
        </a>
        . Currently, working at{" "}
        <a href={currentCompany.website} target="_blank">
          {currentCompany.label}
        </a>
        , {headline}.
      </h2>
    </React.Fragment>
  );
};

export default Introduction;
