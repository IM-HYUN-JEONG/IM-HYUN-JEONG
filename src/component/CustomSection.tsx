import { Card } from '@nextui-org/react';
import React from 'react';
import Box from '@mui/material/Box';
import useIntersectionObserver from 'src/utils/customHook/useIntersectionObserver';
import styled from 'styled-components';

interface SectionProp {
  id: string;
  children?: React.ReactNode;
}

const SectionContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const StyledCard = styled(Card)`
  max-width: 1200px;
  width: 90%;
  padding: 20px;
  margin-top: 4px;
  margin-bottom: 8px;
`;

export default function CustomSection({ id, children }: SectionProp) {
  const containerRef = React.useRef(null); // 관찰 대상 Ref
  const entry = useIntersectionObserver(containerRef, {
    threshold: 0.1, // 10% 보이면 트리거
    rootMargin: '100px' // 관찰 영역 확장
  });

  return (
    <SectionContainer>
      {/* Card 컴포넌트 */}
      <StyledCard
        id={id}
        ref={containerRef} // Intersection Observer 타겟
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
      </StyledCard>
    </SectionContainer>
  );
}
