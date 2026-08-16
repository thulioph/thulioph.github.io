const formatDistanceToKm = (distance) => {
  return `${Math.round(Math.round(distance, 1) / 1000)} km`;
};

const formatDate = (date) => {
  return new Date(date).toDateString();
};

const CoordsCard = ({ path, date, distance, children }) => {
  if (!path) return null;

  return (
    <div className="coords-card">
      <div className="coords-metadata">
        <h3 className="title">{children}</h3>

        <time className="time" dateTime={date}>
          {formatDate(date)}
        </time>

        <span className="distance">{formatDistanceToKm(distance)}</span>
      </div>

      <svg viewBox="0 0 400 400">
        <polyline
          points={path}
          fill="none"
          stroke="#160c28"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CoordsCard;
