import dayjs from 'dayjs';

/** 전체 근무 기간 계산 */
const getExperiencedYear = () => {
  const workingPeriods = [
    { start: '2022/09/01', end: '2022/12/31' },
    { start: '2023/01/01', end: '2023/06/30' },
    { start: '2023/10/01', end: '2024/05/31' },
    { start: '2024/05/01', end: '2025/02/28' },
    { start: '2025/03/01', end: dayjs().format('YYYY/MM/DD') }
  ];

  // 총 일수 계산
  const totalDays = workingPeriods.reduce((sum, period) => {
    const start = dayjs(period.start);
    const end = dayjs(period.end);
    return sum + end.diff(start, 'day') + 1;
  }, 0);

  // 총 개월 계산
  const totalMonths = totalDays / 30.4375; // 평균 월 길이 (365.25 / 12)
  const years = Math.floor(totalMonths / 12);
  const months = Math.round(totalMonths % 12);

  return {
    NYear: `${years} 년`,
    NYearNMonth: `${years}년 ${months}개월`
  };
};

export default getExperiencedYear;
