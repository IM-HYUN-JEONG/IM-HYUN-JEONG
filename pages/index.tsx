import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import '../src/locale/i18n'; // i18n 설정 불러오기

// 기본 컴포넌트
import ScrollToTopBtn from 'src/component/button/scrollToTopBtn/ScrollToTopBtn';
import Experience from 'src/section/Experience';
import IntroSection from 'src/section/IntroSection';
import TopBar from '../src/topBar/TopBar';
import Strength from 'src/section/Strength';

// 동적 컴포넌트
const DynamicLazyProjectSection = dynamic(() => import('src/section/Project'), { suspense: true });
const DynamicLazyStrengthSection = dynamic(() => import('src/section/Strength'), { suspense: true });
const DynamicLazyCertificateSection = dynamic(() => import('src/section/Certificate'), { suspense: true });
const DynamicLazyBlogSection = dynamic(() => import('src/section/Blog'), {
  suspense: true
});
const DynamicLazyContactSection = dynamic(() => import('src/section/Contact'), {
  suspense: true
});
const DynamicLazyRetrospectiveSection = dynamic(() => import('src/section/RetrospectiveSection'), { suspense: true });

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <TopBar />
      <IntroSection />
      <Strength />
      <Experience />
      {/* 동적 컴포넌트들에 대한 Suspense 처리 */}
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicLazyProjectSection />
        {/* <DynamicLazyStrengthSection /> */}
        <DynamicLazyCertificateSection />
        <DynamicLazyRetrospectiveSection />
        <DynamicLazyBlogSection />
        <DynamicLazyContactSection />
      </Suspense>
      <ScrollToTopBtn />
    </div>
  );
};

export default Index;
