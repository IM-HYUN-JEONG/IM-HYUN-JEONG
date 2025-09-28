'use client';
import React from 'react';
import styled from 'styled-components';
import { SamplePlayerCard } from '@component/card/SamplePlayer';
import WaveCard from '@component/card/WaveCard';
import CustomSection from '@component/CustomSection';
import { Badge, BreadcrumbItem, Breadcrumbs, Checkbox, CheckboxGroup, Chip, Tooltip, User } from '@nextui-org/react';
import CustomSectionTitle from 'src/component/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import getExperiencedYear from 'src/utils/getExperiencedYear';

const Container = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-top: 1rem;
`;

const FlexWrapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 40rem;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 1rem;
  min-width: 20rem;
`;

const IntroTextContainer = styled.div`
  padding: 0 1rem;
  text-align: center;

  .main-text {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.6;
  }

  .highlight {
    color: #3b82f6;
  }

  .sub-text {
    font-size: 0.875rem;
    font-weight: 300;
    color: #4b5563; 
`;

const RightSection = styled.div`
  display: flex;
  flex: 1;
`;

const RightInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
`;

const DevCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (min-width: 640px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;

const Paragraph = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.7;

  strong {
    font-weight: bold;
  }
`;

const DevelopingCard = () => {
  return (
    <WaveCard duration={8}>
      <div style={{ fontSize: '0.875rem', color: 'rgba(0,0,0,0.8)' }}>{getExperiencedYear().NYear} 프론트엔드 개발자</div>
      <div style={{ fontSize: '0.75rem', color: 'rgba(0,0,0,0.4)' }}>{getExperiencedYear().NYearNMonth}째 개발중</div>
    </WaveCard>
  );
};

const CheckboxGroupdd = () => {
  return (
    <WaveCard duration={8}>
      <CheckboxGroup
        label={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.25rem' }}>
            5S 개발자
            <Tooltip
              showArrow
              content={
                <div style={{ padding: '0.25rem 0.5rem' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>5S 개발자란?</div>
                  <div style={{ fontSize: '0.75rem' }}>공부(Study), 공유(Save), 기록(Save), 버그없는(Safe), 시니어(Senior)</div>
                </div>
              }
            ></Tooltip>
          </div>
        }
        size="sm"
        value={['study', 'communicate', 'save']}
      >
        <Checkbox value="study">공부하는 개발자</Checkbox>
        <Checkbox value="communicate">소통하는 개발자</Checkbox>
        <Checkbox value="save">기록하는 개발자</Checkbox>
        <Checkbox value="fast">피드백 빠른 개발자</Checkbox>
        <Checkbox value="senior">시니어 개발자</Checkbox>
      </CheckboxGroup>
    </WaveCard>
  );
};

export default function IntroSection() {
  const { t } = useTranslation();

  return (
    <Container>
      <FlexWrapContainer>
        {/* 왼쪽 영역 */}
        <LeftSection>
          <Image style={{ borderRadius: '50%', backgroundColor: '#ffffff' }} alt={'face image'} src={'/images/intro/character.png'} width={200} height={200} priority={true} />
          <IntroTextContainer>
            <div className="main-text">
              개발에 열정을 갖고 꾸준한 학습으로 성장하는 개발자,
              <br />
              <span className="highlight">임현정</span>입니다
            </div>
            <div className="sub-text">{getExperiencedYear().NYear}차 Frontend 개발자 입니다.</div>
          </IntroTextContainer>
        </LeftSection>

        {/* 오른쪽 영역 */}
        <RightSection>
          <RightInner>
            <WaveCard className="top-4" duration={2}>
              <Badge
                content="재직중"
                color="primary"
                size="sm"
                classNames={{
                  badge: 'text-xs font-normal top-7'
                }}
              >
                <Breadcrumbs size={'sm'}>
                  <BreadcrumbItem>Hashed Studio(인턴)</BreadcrumbItem>
                  <BreadcrumbItem>Kakao 계열사</BreadcrumbItem>
                  <BreadcrumbItem>Hancom 계열사</BreadcrumbItem>
                  <BreadcrumbItem>(주)아나사</BreadcrumbItem>
                </Breadcrumbs>
              </Badge>
            </WaveCard>
            <WaveCard duration={4}>
              <Image src={`/icons/typescript.svg`} height={30} width={30} alt="typescript" />
            </WaveCard>
            <WaveCard duration={2}>
              <Image src={`/icons/react.svg`} height={30} width={30} alt="react" />
            </WaveCard>
            <WaveCard duration={4}>
              <User
                style={{ cursor: 'pointer' }}
                name="hyun의 지식 블로그"
                description={
                  <Link href="https://i-do-love-me.tistory.com/">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      @Dev-blog
                      <Chip radius="sm" size="sm">
                        글(95개)
                      </Chip>
                    </div>
                  </Link>
                }
                avatarProps={{
                  src: '/images/intro/logo.png'
                }}
              />
            </WaveCard>

            <SamplePlayerCard />
            <DevCardContainer>
              <DevelopingCard />
            </DevCardContainer>
            <WaveCard duration={2}>
              <Image style={{ backgroundColor: 'white' }} src={`/icons/next-js.svg`} height={30} width={30} alt="nextjs" />
            </WaveCard>
            <CheckboxGroupdd />
          </RightInner>
        </RightSection>
      </FlexWrapContainer>

      <CustomSection id="intro">
        <CustomSectionTitle title={'Intro'} subTitle={'개발에 열정을 갖고 꾸준한 학습으로 성장하는 개발자 임현정 입니다'} />
        <ContentWrapper>
          <Paragraph>
            <strong>삼성반도체에서 프리랜서 React 개발자로 일하고 있습니다.</strong>
            <br />
            React를 중심으로 웹 개발에 주력하며, 사용자 경험(UX)을 최적화하는 데 열정을 가지고 있습니다.
            <br /> <br />
            스타트업에서 처음으로 개발자 커리어를 시작하였으며, <br />
            능동적이고 적극적인 커뮤니케이션으로 문제를 해결하고 프로젝트 발전에 기여했습니다. <br />
            다양한 경험을 통해 프론트엔드 개발에 대한 전문성을 쌓고 있습니다. <br />
            <br />
            저는 개발자로서 성장을 위한 끊임없는 노력, 효율적인 커뮤니케이션, 전문적인 개발 능력 세 가지 가치를 중요하게 생각합니다. <br />
            꾸준히 학습하고 기록하는 습관을 통해 어제보다 한걸음 더 성장해가고 있습니다. <br />
            <br />
            제 직업적 꿈은 주변에서 인정받고 ‘최고’로 평가받는 풀스택 개발자가 되는 것입니다. <br />
            동료들이 “현정님한테 물어봐!”라고 할 수 있는 사람이 되고자 합니다. <br />
            이를 위해 일을 책임감 있게 수행하며, 프로정신을 가지고 최선을 다하고 있습니다.
            <br />
            <br />
            <strong>🛠️ 주요 경험</strong>
            <br />
            • 다국어 지원 웹사이트 개발: 글로벌 사용자를 위한 효율적인 다국어 페이지 구현
            <br />
            • ERP 시스템 구축: 기업 관리에 최적화된 기능과 UI 제공
            <br />
            • 파일 업로드 및 이미지 처리 서비스 개발: 사용자 친화적인 드래그 앤 드롭 방식 및 워터마크 추가 기능 구현
            <br />
            <br />
            <strong>💬 저의 목표</strong>
            <br />
            고객의 요구를 정확히 반영한 결과물을 통해 신뢰를 얻고, 지속적으로 성장하는 개발자가 되는 것입니다. <br />
            새로운 도전을 두려워하지 않으며 항상 최상의 결과를 위해 노력합니다.
            <br /> 현재 프리랜서로 삼성반도체 상주 프로젝트를 진행하고 있습니다. <br />
            <strong>Frontend에 전문성을 두고, 점차적으로 백엔드 분야도 경험하고 있습니다.</strong>
          </Paragraph>
        </ContentWrapper>
      </CustomSection>
    </Container>
  );
}
