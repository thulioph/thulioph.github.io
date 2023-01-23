import React from "react";

const calculateCoords = (coords) => {
  return {
    arr: coords,
    min: Math.min(...coords),
    max: Math.max(...coords),
  };
};

const calculateScale = (x, y) => {
  const baseScale = 400;

  const xRange = x.max - x.min;
  const yRange = y.max - y.min;

  const scale = baseScale / Math.max(...[xRange, yRange]);

  return scale;
};

const processCoords = (coords, x, y, scale) => {
  coords.forEach((coord) => {
    const [a, b] = [coord[0], coord[1]];

    coord[0] = (a - x.min) * scale;
    coord[1] = (b - y.min) * scale;
  });

  return coords.join();
};

const formatDistanceToKm = (distance) => {
  return `${Math.round(Math.round(distance, 1) / 1000)} km`;
};

const formatDate = (date) => {
  return new Date(date).toDateString();
};

const CoordsCard = ({ coords, date, distance, children }) => {
  if (!coords) return null;

  const firstCoord = coords.map((val) => val[0]);
  const x = calculateCoords(firstCoord);

  const secondCoord = coords.map((val) => val[1]);
  const y = calculateCoords(secondCoord);

  const scale = calculateScale(x, y);

  const newCoords = processCoords(coords, x, y, scale);

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
          points={newCoords}
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CoordsCard;
