import { Chip, Tooltip } from '@nextui-org/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { HiOutlineCalendar } from 'react-icons/hi';
import styled from 'styled-components';

interface CompanyliProp {
  name: string;
  homepageUrl?: string;
  position: string | string[];
  period: {
    start: string | Date;
    end: string | Date;
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CompanyName = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

const HomepageLink = styled.a`
  font-size: 0.75rem;
  font-style: italic;
  color: #0e7490;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 0.25rem;
`;

const ChipRow = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const PeriodText = styled.p`
  font-size: 0.75rem;
`;

const PeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
`;

export const Companyli = ({ name, homepageUrl, position, period }: CompanyliProp) => {
  const positionList = Array.isArray(position) ? position : [position];

  const periodStart = dayjs(period.start).format('YYYY/MM');
  const periodEnd = dayjs(period.end).format('YYYY/MM');

  const totalPeriodMonth = dayjs(period.end).diff(dayjs(period.start), 'month');
  const periodDurationYear = Math.floor(totalPeriodMonth / 12);
  const periodDurationMonth = totalPeriodMonth % 12;
  const periodDurationDay = `${periodDurationYear}년 ${periodDurationMonth}개월`;

  return (
    <Container>
      <CompanyName>{name}</CompanyName>

      {homepageUrl && (
        <div>
          <Link href={homepageUrl} passHref legacyBehavior>
            <HomepageLink target="_blank" rel="noopener noreferrer">
              {homepageUrl}
            </HomepageLink>
          </Link>
        </div>
      )}

      <InfoSection>
        <ChipRow>
          {positionList.map((position, index) => (
            <Chip key={index} radius="sm" size="sm">
              {position}
            </Chip>
          ))}
        </ChipRow>

        <PeriodWrapper>
          <HiOutlineCalendar />
          <Tooltip content={periodDurationDay} placement="right">
            <PeriodText>
              {periodStart} ~ {periodEnd}
            </PeriodText>
          </Tooltip>
        </PeriodWrapper>
      </InfoSection>
    </Container>
  );
};
