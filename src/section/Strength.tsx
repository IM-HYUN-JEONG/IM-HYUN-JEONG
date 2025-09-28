import { Accordion, AccordionItem } from '@nextui-org/react';
import CustomSectionTitle from 'src/component/SectionTitle';
import CustomSection from '../component/CustomSection';
import Image from 'next/image';
import styled from 'styled-components';
import { strengthData } from './strengthData';

const ContentText = styled.div`
  font-size: 0.875rem;
  line-height: 1.6;
  matgin-bottom: 10px;
  white-space: pre-line; // 줄바꿈 유지
`;

export default function Strength() {
  return (
    <CustomSection id={'Strength'}>
      <CustomSectionTitle title={'Strength'} subTitle={'저의 핵심역량 입니다.'} />
      <Accordion variant="splitted" isCompact>
        {strengthData.map((item) => (
          <AccordionItem key={item.key} startContent={<Image src={item.img} width={30} height={30} alt={item.subtitle} />} subtitle={item.subtitle}>
            <ContentText>{item.content}</ContentText>
          </AccordionItem>
        ))}
      </Accordion>
    </CustomSection>
  );
}
