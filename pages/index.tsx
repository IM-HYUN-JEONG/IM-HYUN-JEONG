import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import '../src/locale/i18n'; // i18n 설정 불러오기

// 기본 컴포넌트
import ScrollToTopBtn from 'src/component/button/scrollToTopBtn/ScrollToTopBtn';
import TopBar from '../src/topBar/TopBar';

// 동적 컴포넌트
const DynamicLazyIntroSection = dynamic(() => import('src/section/IntroSection'), { suspense: true });
const DynamicLazyStrengthSection = dynamic(() => import('src/section/Strength'), { suspense: true });
const DynamicLazyExperienceSection = dynamic(() => import('src/section/Experience'), { suspense: true });
const DynamicLazyProjectSection = dynamic(() => import('src/section/Project'), { suspense: true });
const DynamicLazyCertificateSection = dynamic(() => import('src/section/Certificate'), { suspense: true });
const DynamicLazyBlogSection = dynamic(() => import('src/section/Blog'), {
  suspense: true
});
const DynamicLazyContactSection = dynamic(() => import('src/section/Contact'), {
  suspense: true
});
const DynamicLazyRetrospectiveSection = dynamic(() => import('src/section/RetrospectiveSection'), { suspense: true });

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

export default function Index() {
  return (
    <MainContainer>
      <TopBar />
      {/* 동적 컴포넌트들에 대한 Suspense 처리 */}
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicLazyIntroSection />
        <DynamicLazyStrengthSection />
        <DynamicLazyExperienceSection />
        <DynamicLazyProjectSection />
        {/* <DynamicLazyStrengthSection /> */}
        <DynamicLazyCertificateSection />
        <DynamicLazyRetrospectiveSection />
        <DynamicLazyBlogSection />
        <DynamicLazyContactSection />
      </Suspense>
      <ScrollToTopBtn />
    </MainContainer>
  );
}
