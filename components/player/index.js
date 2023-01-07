import React from "react";

import styles from "@/styles/Home.module.css";
import config from "@/config/index.js";

const extractData = ({ recenttracks }) => {
  const currentTrack = recenttracks.track[0];

  return {
    artist: currentTrack.artist["#text"],
    song: currentTrack.name,
    url: currentTrack.url,
  };
};

const getCurrentListeningTrack = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "",
    },
  };

  const USER = "thulioph";
  const LIMIT = "1";
  const API_KEY = config.LASTFM_API_KEY;

  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&limit=${LIMIT}&api_key=${API_KEY}&format=json`,
    options
  );

  const data = await res.json();

  return extractData(data);
};

const objIsFullyEmpty = (obj) => {
  return Object.values(obj).filter((str) => str !== "").length;
};

const Player = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [track, setTrack] = React.useState({ url: "", artist: "", song: "" });

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getCurrentListeningTrack();
      setTrack(data);

      setIsLoading(false);
    };

    if (!objIsFullyEmpty(track)) {
      fetchData();
    }
  }, [track, setTrack, setIsLoading]);

  if (isLoading) {
    return <React.Fragment>Fetching latest music...</React.Fragment>;
  }

  if (!objIsFullyEmpty(track) && !isLoading) {
    return <React.Fragment>Not listening to music </React.Fragment>;
  }

  const { url, artist, song } = track;

  return (
    <React.Fragment>
      Listening to{" "}
      <span>
        <a className={styles.link} href={url} target="_blank" rel="noreferrer">
          {artist}, {song}
        </a>
      </span>
    </React.Fragment>
  );
};

export default Player;
