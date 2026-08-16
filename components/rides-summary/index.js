import React from "react";

const formatNumber = (value) => new Intl.NumberFormat("en-US").format(value);

const formatDistance = (distance) => `${formatNumber(Math.round(distance / 1000))} km`;

const RideSummary = ({ summary }) => {
  const maxDistance = Math.max(...summary.byYear.map(({ distance }) => distance));

  return (
    <section className="rides-summary" aria-labelledby="rides-summary-title">
      <div className="rides-summary-heading">
        <p className="rides-summary-eyebrow">Ride ledger</p>
        <h2 id="rides-summary-title">A few numbers from the road</h2>
      </div>

      <dl className="ride-stats">
        <div>
          <dt>Rides</dt>
          <dd>{formatNumber(summary.rides)}</dd>
        </div>
        <div>
          <dt>Distance</dt>
          <dd>{formatDistance(summary.distance)}</dd>
        </div>
        <div>
          <dt>Longest ride</dt>
          <dd>{formatDistance(summary.longestRide)}</dd>
        </div>
        <div>
          <dt>Active years</dt>
          <dd>{formatNumber(summary.yearsActive)}</dd>
        </div>
      </dl>

      <div className="rides-by-year">
        <div className="rides-by-year-label">
          <span>Distance by year</span>
          <strong>{formatDistance(maxDistance)}</strong>
        </div>
        <ol aria-label="Distance ridden each year">
          {summary.byYear.map(({ year, distance }) => (
            <li key={year}>
              <div className="rides-by-year-bar-wrap">
                <span
                  className="rides-by-year-bar"
                  style={{ height: `${Math.max((distance / maxDistance) * 100, 3)}%` }}
                  title={`${year}: ${formatDistance(distance)}`}
                />
              </div>
              <span>{year}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default RideSummary;
