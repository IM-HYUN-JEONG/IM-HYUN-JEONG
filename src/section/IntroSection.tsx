import { SamplePlayerCard } from '@component/card/SamplePlayer';
import WaveCard from '@component/card/WaveCard';
import { CustomSection } from '@component/CustomSection';
import {
  Badge,
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CardFooter,
  Checkbox,
  CheckboxGroup,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tab,
  Tabs,
  Tooltip,
  useDisclosure,
  User
} from '@nextui-org/react';
import { CustomSectionTitle } from 'src/component/SectionTitle';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SlSizeFullscreen } from 'react-icons/sl';
import getExperiencedYear from 'src/utils/getExperiencedYear';

export default function IntroSection() {
  const { t } = useTranslation();

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('handy.kang.dev@gmail.com');
    openCopySuccessSnackBar();
  };

  const [copySuccessSnackBar, setCopySuccessSnackBar] = React.useState(false);
  const openCopySuccessSnackBar = () => {
    setCopySuccessSnackBar(true);
  };
  const closeCopySuccessSnackBar = () => {
    setCopySuccessSnackBar(false);
  };

  return (
    <div className="container py-8 mt-4">
      <div className="flex flex-wrap w-full min-h-[40rem]">
        <div className="flex flex-col items-center justify-center flex-1 gap-4 min-w-[20rem]">
          <Image className="rounded-full bg-[#ffffff]" alt={'face image'} src={'/images/intro/character.png'} width={200} height={200} layout={'fixed'} priority={true} />
          <div className="px-4">
            <div className="text-2xl font-semibold">
              개발에 열정을 갖고 꾸준한 학습으로 성장하는 개발자,
              <br />
              <span className="text-blue-500">임현정</span>입니다
            </div>
            <div className="text-sm font-light text-gray-600 dark:text-gray-300">{getExperiencedYear().NYear}차 Frontend 개발자 입니다.</div>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-wrap items-center justify-center w-full h-full gap-4 gap-y-4">
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
              <Image src={`/icons/typescript.svg`} height={30} width={30} />
            </WaveCard>
            <WaveCard duration={2}>
              <Image src={`/icons/react.svg`} height={30} width={30} />
            </WaveCard>
            <WaveCard duration={4}>
              <User
                className="cursor-pointer"
                name="hyun의 지식 블로그"
                description={
                  <Link href="https://i-do-love-me.tistory.com/">
                    <div className="flex items-center gap-1">
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
            <div className="flex flex-row flex-wrap sm:flex-col">
              <DevelopingCard />
            </div>
            <WaveCard duration={2}>
              <Image className="bg-white" src={`/icons/next-js.svg`} height={30} width={30} />
            </WaveCard>
            <CheckboxGroupdd />
          </div>
        </div>
      </div>

      <CustomSection id="sample">
        <CustomSectionTitle title={'Intro'} subTitle={'개발에 열정을 갖고 꾸준한 학습으로 성장하는 개발자 임현정 입니다'} />
        <div className="flex flex-col flex-wrap w-full justify-evenly">
          <div className="text-sm font-normal">
            <strong>(주)아나사 에서 프론트엔드 리드 개발자로 일하고 있습니다</strong>
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
            제 직업적 꿈은 조직에서 인정받고 ‘최고’로 평가받는 풀스택 개발자가 되는 것입니다. <br />
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
            <br /> 현재 (주)아나사에서 B2B, B2C, 내부 툴 개발에 참여하고 있으며, 웹과 앱 개발을 전문으로 다루고 있습니다. <br />
            <strong>Frontend에 전문성을 두고, 점차적으로 백엔드 분야도 경험하고 있습니다.</strong>
          </div>
        </div>
      </CustomSection>
    </div>
  );
}

const DevelopingCard = () => {
  return (
    <WaveCard duration={8}>
      <div className="text-sm text-foreground/80">{getExperiencedYear().NYear} 프론트엔드 개발자</div>
      <div className="text-xs text-foreground/40">{getExperiencedYear().NYearNMonth}째 개발중</div>
    </WaveCard>
  );
};

const CheckboxGroupdd = () => {
  return (
    <WaveCard duration={8}>
      <CheckboxGroup
        label={
          <div className="flex items-center justify-between gap-1">
            5S 개발자
            <Tooltip
              showArrow
              content={
                <div className="px-1 py-2">
                  <div className="font-bold text-small">5S 개발자란?</div>
                  <div className="text-tiny">공부(Study), 공유(Save), 기록(Save), 버그없는(Safe), 시니어(Senior)</div>
                </div>
              }
            ></Tooltip>
          </div>
        }
        size="sm"
        value={['study', 'share', 'save']}
      >
        <Checkbox value="study">공부하는 개발자</Checkbox>
        <Checkbox value="share">공유하는 개발자</Checkbox>
        <Checkbox value="save">기록하는 개발자</Checkbox>
        <Checkbox value="sate">버그없는 개발자</Checkbox>
        <Checkbox value="senior">시니어 개발자</Checkbox>
      </CheckboxGroup>
    </WaveCard>
  );
};
