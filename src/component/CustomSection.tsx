import { Card } from '@nextui-org/react';
import React from 'react';
import Box from '@mui/material/Box';
import useIntersectionObserver from 'src/utils/customHook/useIntersectionObserver';

interface SectionProp {
  id: string;
  children?: React.ReactNode;
}

// CustomSection 컴포넌트
export const CustomSection = ({ id, children }: SectionProp) => {
  const containerRef = React.useRef(null); // 관찰 대상 Ref
  const entry = useIntersectionObserver(containerRef, {
    threshold: 0.1, // 10% 보이면 트리거
    rootMargin: '100px' // 관찰 영역 확장
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%" // 반응형 전체 너비
    >
      {/* 섹션 고유 ID */}
      <Box id={id}></Box>

      {/* Card 컴포넌트 */}
      <Card
        ref={containerRef} // Intersection Observer 타겟
        style={{
          maxWidth: '1200px',
          width: '90%', // 반응형으로 전체 너비의 90% 사용
          padding: 20, // 내부 여백
          marginTop: 4,
          marginBottom: 8
        }}
      >
        {/* 애니메이션 및 스타일 */}
        <Box
          sx={{
            position: 'relative',
            opacity: entry?.isIntersecting ? 1 : 0.2, // 보임 여부에 따른 투명도
            transition: 'opacity 0.6s ease-in-out, top 0.6s ease-in-out', // 애니메이션
            transitionDelay: '0.1s',

            top: entry?.isIntersecting ? '0px' : '50px' // 위치 이동
          }}
        >
          {children} {/* 섹션 컨텐츠 */}
        </Box>
      </Card>
    </Box>
  );
};
