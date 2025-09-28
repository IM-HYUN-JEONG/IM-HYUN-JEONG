import { useTheme } from 'next-themes';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { colors } from 'src/styles/colors';

interface SectionTitleProp {
  title?: string;
  subTitle?: string;
}
const Wrapper = styled(Box)`
  margin-bottom: 1rem; /* mb-4 */
`;

const Title = styled(Box)<{ bgColor: string }>`
  display: inline-block;
  padding: 0 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 66%, ${({ bgColor }) => bgColor} 33%);
`;
const SubTitle = styled(Box)`
  padding-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
`;
export default function CustomSectionTitle({ title, subTitle }: SectionTitleProp) {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? colors.dark : colors.light;

  return (
    <Wrapper>
      {title && <Title bgColor={bgColor}> {title.toLocaleUpperCase()} </Title>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Wrapper>
  );
}
