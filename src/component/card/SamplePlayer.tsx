import styled from 'styled-components';
import { Button, Card, CardBody, CardProps, Image, Slider } from '@nextui-org/react';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import { FaPauseCircle } from 'react-icons/fa';
import { IoShuffleOutline } from 'react-icons/io5';
import { PiMusicNoteFill } from 'react-icons/pi';
import { RiRepeatOneLine } from 'react-icons/ri';
import getExperiencedYear from 'src/utils/getExperiencedYear';

interface SamplePlayerCardProps extends Omit<CardProps, 'children'> {
  className?: string;
}

// 메인 카드 스타일링
const StyledCard = styled(Card)<{ className?: string }>`
  display: inline-block;
  border: none;
  background: var(--nextui-background-opacity) !important;
  .dark & {
    background: var(--nextui-default-100-opacity) !important;
  }
  animation: wave-6 1s ease-in-out infinite alternate;
`;

// 카드 내부 그리드 레이아웃
const CardContentGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1rem;
  }
`;

// 이미지 컨테이너
const ImageContainer = styled.div`
  position: relative;
  grid-column: span 6 / span 6;

  @media (min-width: 768px) {
    grid-column: span 4 / span 4;
  }
`;

// 텍스트 컨테이너
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 6 / span 6;

  @media (min-width: 768px) {
    grid-column: span 8 / span 8;
  }
`;

// 정보 섹션
const InfoSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

// 텍스트 그룹
const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

// 경험/슬라이더 섹션
const ExperienceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 0.75rem;
`;

// 플레이어 컨트롤
const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// 컨트롤 버튼
const ControlButton = styled(Button)`
  &[data-hover='true'] {
    background-color: rgba(var(--nextui-foreground-rgb), 0.1);
  }
`;

export const SamplePlayerCard = ({ className, ...otherProps }: SamplePlayerCardProps) => {
  return (
    <StyledCard isBlurred className={className} shadow="sm" {...otherProps}>
      <CardBody>
        <CardContentGrid>
          {/* 앨범 커버 */}
          <ImageContainer>
            <Image
              alt="Album cover"
              className="object-cover max-w-28" // NextUI 이미지 자체의 클래스는 유지 (Tailwind 클래스 아님)
              height={80}
              width={'100%'}
              src="/images/intro/myface.png"
            />
          </ImageContainer>

          {/* 카드 내용 */}
          <TextContainer>
            <InfoSection>
              {/* 정보 및 직책 */}
              <TextGroup>
                <div className="text-sm font-semibold text-foreground/80">삼성반도체에서 근무중</div>
                <div className="mt-2 text-xs text-foreground/80">프론트엔드 프리랜서 개발자</div>
                <div className="text-xs font-medium ">유저에게 소리를 전달하는 모든 일</div>
              </TextGroup>

              {/* 음악 노트 아이콘: 애니메이션 효과 추가 */}
              {/* ⚠️ animate-ping은 keyframes이 필요하므로, 임시로 스타일 주입 */}
              <div
                style={{
                  animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                  color: 'var(--nextui-foreground)'
                }}
              >
                <PiMusicNoteFill size={12} />
              </div>
            </InfoSection>

            {/* 슬라이더 및 경험 년수 표시 */}
            <ExperienceSection>
              <Slider color="foreground" size="sm" step={0.01} maxValue={1} minValue={0} defaultValue={0.4} className="max-w-md" />
              <div className="flex justify-between">
                <p className="text-sm text-foreground/50">22/09</p>
                <p className="text-sm text-foreground/50">{'+' + getExperiencedYear().NYearNMonth + 'days'}</p>
              </div>
            </ExperienceSection>

            {/* 음악 플레이어 컨트롤 버튼들 */}
            <ControlsContainer>
              {/* 반복 버튼 */}
              <ControlButton isIconOnly radius="full" variant="light">
                <RiRepeatOneLine className="text-foreground/80" size={20} />
              </ControlButton>

              {/* 이전 트랙 버튼 */}
              <ControlButton isIconOnly radius="full" variant="light">
                <CgPlayTrackPrev size={20} />
              </ControlButton>

              {/* 일시정지 버튼 */}
              {/* ⚠️ w-auto h-auto data-[hover]:bg-foreground/10 */}
              <Button
                isIconOnly
                css={{ width: 'auto', height: 'auto' }}
                className="data-[hover]:bg-foreground/10" // NextUI의 내부 스타일이므로 className 유지
                radius="full"
                variant="light"
              >
                <FaPauseCircle size={40} />
              </Button>

              {/* 다음 트랙 버튼 */}
              <ControlButton isIconOnly radius="full" variant="light">
                <CgPlayTrackNext size={20} />
              </ControlButton>

              {/* 셔플 버튼 */}
              <ControlButton isIconOnly radius="full" variant="light">
                <IoShuffleOutline className="text-foreground/80" size={20} />
              </ControlButton>
            </ControlsContainer>
          </TextContainer>
        </CardContentGrid>
      </CardBody>
    </StyledCard>
  );
};
