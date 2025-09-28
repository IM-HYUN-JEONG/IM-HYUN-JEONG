import styled from 'styled-components';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';

interface UrlChipProp {
  title: string;
  url: string;
}

const StyledChip = styled(Chip)`
  padding-left: 0;
  padding-right: 0;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  opacity: 0.8;
  & a {
    text-decoration: none;
  }
`;

const ChipText = styled.span`
  font-size: 0.75rem;
`;

export default function UrlChip({ title, url }: UrlChipProp) {
  return (
    <StyledChip radius="sm" color="primary">
      <Link href={url} legacyBehavior>
        <a target="_blank">
          <ChipText>{title}</ChipText>
        </a>
      </Link>
    </StyledChip>
  );
}
