import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'next-themes';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { colors } from 'src/styles/colors';

interface TitleliProp {
  title?: string;
  list?: string[];
  direction?: 'left' | 'right'; // 현재 미사용
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const TitleSpan = styled.span<{ bgColor: string }>`
  display: inline-block;
  padding: 0 0.5rem;
  font-weight: bold;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 66%, ${({ bgColor }) => bgColor} 33%);
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.25rem;
  padding: 0.5rem;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ItemText = styled.span`
  font-size: 0.875rem;
`;

export default function Titleli({ title, list = [], direction = 'left' }: TitleliProp) {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? colors.dark : colors.light;

  return (
    <Container>
      {title && <TitleSpan bgColor={bgColor}>{title.toUpperCase()}</TitleSpan>}

      <ListWrapper>
        {list.map((item, index) => (
          <ListItem key={index}>
            <MdOutlineWorkOutline size={12} />
            <ItemText>{item}</ItemText>
          </ListItem>
        ))}
      </ListWrapper>
    </Container>
  );
}
