import styled from 'styled-components';
import React from 'react';
import { clsx } from '@nextui-org/shared-utils';

interface WaveCardProps {
  className?: string;
  children?: React.ReactNode;
  duration?: 2 | 4 | 6 | 8;
}

const getAnimationClass = (duration?: 2 | 4 | 6 | 8) => {
  const waveClassList: Record<2 | 4 | 6 | 8, string> = {
    2: 'animate-wave-2',
    4: 'animate-wave-4',
    6: 'animate-wave-6',
    8: 'animate-wave-8'
  };
  return duration ? waveClassList[duration] : '';
};

const StyledWaveCard = styled.div<{ duration?: 2 | 4 | 6 | 8 }>`
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  color: inherit;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function WaveCard({ children, duration, className }: WaveCardProps) {
  const animationClass = getAnimationClass(duration);

  return (
    <StyledWaveCard duration={duration} className={clsx(animationClass, className)}>
      {children}
    </StyledWaveCard>
  );
}
