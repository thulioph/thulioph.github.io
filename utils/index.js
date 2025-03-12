export const splitByYear = (rides, mainKey = "rides") => {
  const allDates = rides.map((el) => el.date || el.created_at);

  const onlyYears = [
    ...new Set(allDates.map((el) => new Date(el).getFullYear())),
  ];

  const abc = onlyYears.map((year) => ({
    year: year,
    [mainKey]: rides.filter(
      (ride) => new Date(ride.date || ride.created_at).getFullYear() === year
    ),
  }));

  return abc.sort((a, b) => b.year - a.year);
};
