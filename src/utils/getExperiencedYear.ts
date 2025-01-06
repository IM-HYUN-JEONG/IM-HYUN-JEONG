import dayjs from "dayjs";

const getExperienceWithBreaks = () => {
  const workingPeriods = [
    { start: "2022/09/01", end: "2022/12/31" },
    { start: "2023/01/01", end: "2023/06/30" },
    { start: "2023/10/01", end: "2024/05/31" },
    { start: "2024/05/01", end: "2024/12/31" },
  ];

  let totalPeriodMonth = 0;

  workingPeriods.forEach((period) => {
    totalPeriodMonth += dayjs(period.end).diff(dayjs(period.start), "month");
  });

  const periodDurationYear = Math.floor(totalPeriodMonth / 12);
  const periodDurationMonth = totalPeriodMonth % 12;

  return {
    NYear: periodDurationYear + " 년",
    NYearNMonth: `${periodDurationYear}년 ${periodDurationMonth}개월`,
  };
};

export const getExperiencedYearFrom = (date: string) => {
  const workingPeriods = [
    { start: "2022/09/01", end: "2022/12/31" },
    { start: "2023/01/01", end: "2023/06/30" },
    { start: "2023/10/01", end: "2024/05/31" },
    { start: "2024/05/01", end: "2024/12/31" },
  ];

  let totalPeriodMonth = 0;

  workingPeriods.forEach((period) => {
    totalPeriodMonth += dayjs(period.end).diff(dayjs(period.start), "month");
  });

  const periodDurationYear = Math.floor(totalPeriodMonth / 12);
  const periodDurationMonth = totalPeriodMonth % 12;

  return {
    NYear: periodDurationYear + " years",
    NYearNMonth: `${periodDurationYear} years ${periodDurationMonth} months`,
  };
};
export default getExperienceWithBreaks;
