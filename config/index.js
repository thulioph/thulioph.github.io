const getConfig = () => {
  return {
    LASTFM_API_KEY: process.env.NEXT_PUBLIC_LASTFM_API_KEY,
  };
};

export default getConfig();
