import React from 'react';
import styled from 'styled-components';
import ExtraInfoDialog from '@component/dialog/ExtraInfoDialog';
import { CardContent } from '@mui/material';
import { Card, CardHeader } from '@nextui-org/react';
import CustomSectionTitle from 'src/component/SectionTitle';
import CustomSection from '../component/CustomSection';
import { retrospectivesData } from './retrospectivesData'; // 데이터

interface RetrospectivedItemProp {
  retrospectivedName: string;
  details: string;
  oneLineTitle: string;
  extraDetail?: string[];
}

const ItemWrapper = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  padding-left: 1rem;
  font-size: 0.75rem;
`;

const ExtraDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.875rem;
`;

const YearCardWrapper = styled(Card)`
  padding: 0.25rem;
`;

const YearCardContent = styled(CardContent)`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0;
  padding-bottom: 0;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RetrospectivedItem = ({ retrospectivedName, details, oneLineTitle, extraDetail }: RetrospectivedItemProp) => {
  return (
    <>
      <ItemWrapper>
        {retrospectivedName} - {oneLineTitle}
      </ItemWrapper>
      <ItemDetails>
        <>
          ㄴ{details}
          {extraDetail && (
            <ExtraInfoDialog dialogTitle={`세부 정보`} iconType={'paper'}>
              <ExtraDetailContainer>
                {extraDetail.map((detail, index) => (
                  <span key={index}>{detail}</span>
                ))}
              </ExtraDetailContainer>
            </ExtraInfoDialog>
          )}
        </>
      </ItemDetails>
    </>
  );
};

const YearCard = ({ year, children }: { year: number; children: React.ReactNode }) => {
  return (
    <YearCardWrapper>
      <CardHeader>{year}</CardHeader>
      <YearCardContent>{children}</YearCardContent>
    </YearCardWrapper>
  );
};

export default function RetrospectivedSection() {
  return (
    <CustomSection id={'Retrospective'}>
      <CustomSectionTitle title={'Retrospectived'} subTitle={'분기별 회고를 작성하며 지난 날을 반성하고 정리합니다.(2021년~)'} />
      <SectionWrapper>
        {retrospectivesData.map((yearBlock) => (
          <YearCard key={yearBlock.year} year={yearBlock.year}>
            {yearBlock.items.map((item, idx) => (
              <RetrospectivedItem key={idx} retrospectivedName={item.retrospectivedName} oneLineTitle={item.oneLineTitle} details={item.details} extraDetail={item.extraDetail} />
            ))}
          </YearCard>
        ))}
      </SectionWrapper>
    </CustomSection>
  );
}
