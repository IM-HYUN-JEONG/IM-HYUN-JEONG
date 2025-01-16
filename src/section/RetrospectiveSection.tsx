import ExtraInfoDialog from '@component/dialog/ExtraInfoDialog';
import { CardContent } from '@mui/material';
import { Card, CardHeader } from '@nextui-org/react';
import { CustomSectionTitle } from 'src/component/SectionTitle';
import { CustomSection } from '../component/CustomSection';

const RetrospectivedSection = () => {
  return <RetrospectivedSectionView />;
};

const RetrospectivedSectionView = () => {
  return (
    <CustomSection id={'Retrospective'}>
      <CustomSectionTitle title={'Retrospectived'} subTitle={'분기별 회고를 작성하며 지난 날을 반성하고 정리합니다.(2021년~)'} />
      <div className="flex flex-col gap-2">
        <RetrospectivedSection2024Item />
        <RetrospectivedSection2023Item />
        <RetrospectivedSection2022Item />
        <RetrospectivedSection2021Item />
      </div>
    </CustomSection>
  );
};

interface RetrospectivedItemProp {
  retrospectivedName: string;
  details: string;
  oneLineTitle: string;
  extraDetail?: string[];
}

const RetrospectivedItem = ({ retrospectivedName, details, oneLineTitle, extraDetail }: RetrospectivedItemProp) => {
  return (
    <>
      <div className="text-sm font-medium">
        {retrospectivedName} - {oneLineTitle}
      </div>
      <div className="flex flex-row items-center gap-1 pl-4 text-xs">
        <>
          ㄴ{details}
          {extraDetail && (
            <ExtraInfoDialog dialogTitle={`세부 정보`} iconType={'paper'}>
              <div className="flex flex-col gap-1 text-sm">
                {extraDetail.map((detail, index) => (
                  <span key={index}>{detail}</span>
                ))}
              </div>
            </ExtraInfoDialog>
          )}
        </>
      </div>
    </>
  );
};
const RetrospectivedSection2021Item = () => {
  return (
    <YearCard year={2021}>
      <RetrospectivedItem
        retrospectivedName={'4Q'}
        oneLineTitle={'한국농수산식품유통공사 - 공공급식통합플랫폼TF팀 (보조연구원으로 일하다.)'}
        details={'신뢰를 바탕으로 다양한 서비스 및 데모 사이트를 구현.'}
        extraDetail={['1.', '2.', '3. ']}
      />
      <RetrospectivedItem
        retrospectivedName={'3Q'}
        oneLineTitle={'한국농수산식품유통공사 - 공공급식통합플랫폼TF팀 (보조연구원으로 일하다.)'}
        details={'기존 프로젝트 마이그레이션 및 기술 스택 익히기, 신뢰감를 얻은 중요했던 시기'}
        extraDetail={['1.', '2.', '3. ']}
      />
      <RetrospectivedItem retrospectivedName={'2Q'} oneLineTitle={'직업을 무엇을 할지 생각하다.'} details={'TODO'} extraDetail={['1.', '2.', '3. ']} />
      <RetrospectivedItem
        retrospectivedName={'1Q'}
        oneLineTitle={'한양여자대학교 조교를 끝내다.'}
        details={'기존의 기술스택에서 벗어나 다양한 라이브러리, 프레임워크를 접하려고 노력했다.'}
        extraDetail={['1.', '2.', '3. ']}
      />
    </YearCard>
  );
};
const RetrospectivedSection2022Item = () => {
  return (
    <YearCard year={2022}>
      <RetrospectivedItem
        retrospectivedName={'4Q'}
        oneLineTitle={'Hashed Studio : XOCIETY - Web FrontEnd에서 인턴을 하다.'}
        details={'신뢰를 바탕으로 사이트를 구현하다.'}
        extraDetail={['1. Brand WebSite 개편', '2. Market Place WebSite 반응형, 적응형 적용, UI 개편']}
      />
      <RetrospectivedItem
        retrospectivedName={'3Q'}
        oneLineTitle={'취업준비를 했고, 면접보러 다니며 공부를 하다.'}
        details={'포트폴리오를 최신화하고 면접을 보러다녔다.'}
        extraDetail={['1.', '2.', '3. ']}
      />
      <RetrospectivedItem retrospectivedName={'2Q'} oneLineTitle={'React 프로젝트를 만들고, Next 공식독스를 보며 공부하다.'} details={'직접 '} extraDetail={['1.', '2.', '3. ']} />
      <RetrospectivedItem
        retrospectivedName={'1Q'}
        oneLineTitle={'프론트엔드 직업을 하기로 마음먹었고, 독학을 시작하다.'}
        details={'프론트엔드가 매력적이었고, 이를 위해 아침7시~저녁10시까지 혼자 독학공부를 했습니다.'}
        extraDetail={['1. 아침7시~9시 - 이론공부(Deep Dive JavaScript)', '2. 아침9시~12시 - React 강의 공부', '3. 오후12시~1시 - 점심 및 휴식']}
      />
    </YearCard>
  );
};
const RetrospectivedSection2023Item = () => {
  return (
    <YearCard year={2023}>
      {
        <>
          <RetrospectivedItem
            retrospectivedName={'4Q'}
            oneLineTitle={'Hancom Frontis(Hancom 계열사)에 입사하다.'}
            details={'사용하는 기술이 정리되고, 기존 기술에 대한 이해도를 높이는데 집중했다.'}
            extraDetail={['1.', '2.', '3. ']}
          />
          <RetrospectivedItem
            retrospectivedName={'3Q'}
            oneLineTitle={'Colorverse(Kakao 계열사) - 경영악화로 인해 퇴사를 하다.'}
            details={'경영악화로 비자발적 퇴사를 하고, 실업급여를 받다.'}
            extraDetail={['1.', '2.', '3. ']}
          />
          <RetrospectivedItem
            retrospectivedName={'2Q'}
            oneLineTitle={'Colorverse(Kakao 계열사) - Web FrontEnd (정규직)'}
            details={'프로젝트 구현, 런칭까지 매우 바쁜 분기였다'}
            extraDetail={['1.', '2.', '3. ']}
          />
          <RetrospectivedItem
            retrospectivedName={'1Q'}
            oneLineTitle={'Colorverse(Kakao 계열사) - Web FrontEnd (정규직)'}
            details={'스타트업에서 인턴을 마치고, 저를 좋게 봐주신 분의 추천으로 카카오계열사에 입사하다.'}
            extraDetail={['1.', '2.', '3. ']}
          />
        </>
      }
    </YearCard>
  );
};
const RetrospectivedSection2024Item = () => {
  return (
    <YearCard year={2024}>
      {
        <>
          <RetrospectivedItem retrospectivedName={'4Q'} oneLineTitle={'(주)아나사 - Web FrontEnd'} details={'1인 FE가 되기 위해 노력중'} extraDetail={['1.', '2.', '3. ']} />

          <RetrospectivedItem retrospectivedName={'3Q'} oneLineTitle={'(주)아나사 - Web FrontEnd'} details={'1인 FE가 되기 위해 노력중'} extraDetail={['1.', '2.', '3. ']} />
          <RetrospectivedItem retrospectivedName={'2Q'} oneLineTitle={'(주)아나사 - Web FrontEnd로 입사하다.'} details={' 프론트엔드리드를 맡다.'} extraDetail={['1.', '2.', '3. ']} />
          <RetrospectivedItem retrospectivedName={'1Q'} oneLineTitle={'좋은 개발자가 되기 위한 비개발적인 준비를 하다'} details={'TODO'} extraDetail={['1.', '2.', '3. ']} />
        </>
      }
    </YearCard>
  );
};

const YearCard = ({ year, children }: { year: number; children: React.ReactNode }) => {
  return (
    <Card className="p-1">
      <CardHeader>{year}</CardHeader>
      <CardContent className="px-4 py-0">{children}</CardContent>
    </Card>
  );
};

export default RetrospectivedSection;
