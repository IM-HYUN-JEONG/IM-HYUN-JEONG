import StackChip from '@component/chip/StackChip';
import UrlChip from '@component/chip/UrlChip';
import Titleli from '@component/ul/Titleli';

// 경험 데이터를 배열로 정의
export const experienceData = [
  /* 삼성 반도체 */
  {
    company: {
      name: '(주)삼성반도체',
      homepageUrl: 'https://anasa.co.kr/',
      position: ['프리랜서', '프론트엔드 개발자'],
      period: { start: '2025/03', end: new Date() }
    },
    tasks: ['(주)삼성반도체 ATC 시스템 개발'],
    contribution: {
      title: '(주)삼성반도체',
      iconType: 'contribution',
      content: (
        <>
          <Titleli title={'📚 What I learned'} list={['작성하기']} />
          <Titleli title={'🎯 서비스 목표'} list={['작성하기']} />
          <div className="flex flex-row justify-center">
            <UrlChip title={'홈페이지'} url={''} />
            <UrlChip title={'서비스 소개'} url={''} />
          </div>
          <StackChip title={'What I used'} stackList={['React', 'Typescript', 'StyledComponent', 'antd']} />
        </>
      )
    },
    service: {
      title: 'Title 작성하기',
      content: (
        <>
          <Titleli title={'📚 What I learned'} list={['작성하기']} />
          <Titleli title={'🎯 서비스 목표'} list={['작성하기']} />
          <div className="flex flex-row justify-center">
            <UrlChip title={'홈페이지'} url={''} />
            <UrlChip title={'서비스 소개'} url={''} />
          </div>
          <StackChip title={'What I used'} stackList={['React', 'Typescript', 'StyledComponent', 'antd']} />
        </>
      )
    }
  },
  /* (주)아나사 */
  {
    company: {
      name: '(주)아나사',
      homepageUrl: 'https://anasa.co.kr/',
      position: ['정규직', '프론트엔드 개발자', '프론트엔드 리드'],
      period: { start: '2024/05', end: '2025.03' }
    },
    tasks: ['(주)한국알박 내방신청 시스템 개발', '웹사이트(관리자페이지, 홈페이지) 개발', '계정 신청 페이지 개발'],
    contribution: {
      title: '(주)아나사',
      iconType: 'contribution',
      content: (
        <>
          <Titleli title={'📚 What I learned'} list={['작성하기']} />
          <Titleli title={'🎯 서비스 목표'} list={['작성하기']} />
          <div className="flex flex-row justify-center">
            <UrlChip title={'홈페이지'} url={''} />
            <UrlChip title={'서비스 소개'} url={''} />
          </div>
          <StackChip title={'What I used'} stackList={['React', 'Typescript', 'Next', 'StyledComponent', 'MUI', 'AWS']} />
        </>
      )
    },
    service: {
      title: 'Title 작성하기',
      content: (
        <>
          <Titleli title={'📚 What I learned'} list={['작성하기']} />
          <Titleli title={'🎯 서비스 목표'} list={['작성하기']} />
          <div className="flex flex-row justify-center">
            <UrlChip title={'홈페이지'} url={''} />
            <UrlChip title={'서비스 소개'} url={''} />
          </div>
          <StackChip title={'What I used'} stackList={['React', 'Typescript', 'SASS', 'Plotly']} />
        </>
      )
    }
  },
  /* Hancom Frontis */
  {
    company: {
      name: 'Hancom Frontis',
      homepageUrl: '',
      position: ['정규직', '프론트엔드 개발자'],
      period: { start: '2023/10', end: '2024/05' }
    },
    tasks: ['관리자페이지 개발', '홈페이지 개발'],
    contribution: {
      title: '(주)아나사',
      iconType: 'contribution',
      content: (
        <>
          <Titleli title={'📚 What I learned'} list={['작성하기']} />
          <Titleli title={'🎯 서비스 목표'} list={['작성하기']} />
          <div className="flex flex-row justify-center">
            <UrlChip title={'홈페이지'} url={''} />
            <UrlChip title={'서비스 소개'} url={''} />
          </div>
          <StackChip title={'What I used'} stackList={['React', 'Typescript', 'Next', 'StyledComponent', 'MUI', 'AWS']} />
        </>
      )
    },
    service: {
      title: 'Title 작성하기',
      content: (
        <>
          <Titleli title={'📚 What I learned'} list={['작성하기']} />
          <Titleli title={'🎯 서비스 목표'} list={['작성하기']} />
          <div className="flex flex-row justify-center">
            <UrlChip title={'홈페이지'} url={''} />
            <UrlChip title={'서비스 소개'} url={''} />
          </div>
          <StackChip title={'What I used'} stackList={['React', 'Typescript', 'SASS', 'Plotly']} />
        </>
      )
    }
  },
  /* Colorverse */
  {
    company: {
      name: 'Colorverse',
      homepageUrl: '',
      position: ['정규직', '프론트엔드 개발자'],
      period: { start: '2023/01', end: '2023/06' }
    },
    tasks: ['Unity통신과 API를 이용하여 웹앱 게임 개발'],
    contribution: {
      title: 'Colorverse',
      iconType: 'contribution',
      content: (
        <>
          <Titleli title={'📚 What I learn'} list={['작성하기']} />
          <Titleli title={'🎯 서비스 목표'} list={['작성하기']} />
          <div className="flex flex-row justify-center">
            <UrlChip title={'홈페이지'} url={''} />
            <UrlChip title={'서비스 소개'} url={''} />
          </div>
          <StackChip title={'What I used'} stackList={['React', 'Typescript', 'Next', 'StyledComponent', 'MUI', 'AWS']} />
        </>
      )
    },
    service: {
      title: 'Title 작성하기',
      content: (
        <>
          <Titleli title={'📚 What I learned'} list={['작성하기']} />
          <Titleli title={'🎯 서비스 목표'} list={['작성하기']} />
          <div className="flex flex-row justify-center">
            <UrlChip title={'홈페이지'} url={''} />
            <UrlChip title={'서비스 소개'} url={''} />
          </div>
          <StackChip title={'What I used'} stackList={['React', 'Typescript', 'SASS']} />
        </>
      )
    }
  },
  /* Hashed Studio */
  {
    company: {
      name: 'Hashed Studio',
      homepageUrl: 'https://xociety.io/',
      position: ['인턴', '프론트엔드 개발자'],
      period: { start: '2022/09', end: '2022/12' }
    },
    tasks: ['Brand WebSite 개편', 'Market Place WebSite 개편'],
    contribution: {
      title: 'Hashed Studio',
      iconType: 'contribution',
      content: (
        <>
          <Titleli title={'📚 What I learned'} list={['작성하기']} />
          <Titleli title={'🎯 서비스 목표'} list={['작성하기']} />
          <div className="flex flex-row justify-center">
            <UrlChip title={'홈페이지'} url={''} />
            <UrlChip title={'서비스 소개'} url={''} />
          </div>
          <StackChip title={'What I used'} stackList={['React', 'Typescript', 'Next', 'StyledComponent', 'MUI', 'AWS']} />
        </>
      )
    },
    service: {
      title: 'Title 작성하기',
      content: (
        <>
          <Titleli title={'📚 What I learned'} list={['작성하기']} />
          <Titleli title={'🎯 서비스 목표'} list={['작성하기']} />
          <div className="flex flex-row justify-center">
            <UrlChip title={'홈페이지'} url={''} />
            <UrlChip title={'서비스 소개'} url={''} />
          </div>
          <StackChip title={'What I used'} stackList={['React', 'Typescript', 'SASS']} />
        </>
      )
    }
  }
];
