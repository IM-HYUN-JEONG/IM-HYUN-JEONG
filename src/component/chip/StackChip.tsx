import styled from 'styled-components';
import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

interface StackChipProp {
  title?: string;
  stackList: string[];
  size?: number;
}

const Container = styled.div`
  margin-top: 0.5rem;
`;

const Title = styled.span`
  font-size: 0.875rem;
`;

const StackListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const StackItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

export default function StackChip({ title, stackList, size = 25 }: StackChipProp) {
  const [errorIndices, setErrorIndices] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setErrorIndices((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <Container>
      {title && <Title># {title}</Title>}
      <StackListContainer>
        {stackList.map((stack, index) => (
          <Tooltip content={stack || 'Unknown Stack'} key={index}>
            <StackItem>
              {errorIndices[index] ? (
                <Image src="/icons/default.svg" height={size} width={size} alt="Default Icon" />
              ) : (
                <Image src={`/icons/${stack?.toLowerCase() || 'default'}.svg`} onError={() => handleImageError(index)} height={size} width={size} alt={stack || 'Unknown Stack'} />
              )}
            </StackItem>
          </Tooltip>
        ))}
      </StackListContainer>
    </Container>
  );
}
