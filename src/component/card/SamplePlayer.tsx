import { Button, Card, CardBody, CardProps, Image, Slider } from '@nextui-org/react'; // 필요한 NextUI 컴포넌트들 임포트
import { clsx } from '@nextui-org/shared-utils'; // 클래스명 조합 유틸리티
import { FC } from 'react'; // React 컴포넌트를 위한 FC 타입 임포트
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'; // 재생/이전/다음 버튼 아이콘
import { FaPauseCircle } from 'react-icons/fa'; // 일시정지 버튼 아이콘
import { IoShuffleOutline } from 'react-icons/io5'; // 셔플 아이콘
import { PiMusicNoteFill } from 'react-icons/pi'; // 음악 노트 아이콘
import { RiRepeatOneLine } from 'react-icons/ri'; // 반복 아이콘
import getExperiencedYear from 'src/utils/getExperiencedYear'; // 근무 년수 계산 함수

export const SamplePlayerCard = ({ className, ...otherProps }: any) => {
  return (
    // 카드 레이아웃: 배경이 흐리게 처리되고, 애니메이션 효과 추가
    <Card isBlurred className={clsx('inline-block border-none bg-background/60 dark:bg-default-100/50 animate-wave-6', className)} shadow="sm" {...otherProps}>
      <CardBody>
        {/* 카드 내부 구성 */}
        <div className="grid items-center justify-center grid-cols-6 gap-6 md:grid-cols-12 md:gap-4">
          {/* 앨범 커버 */}
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover" // 이미지 설명
              className="object-cover max-w-28" // 이미지를 커버 방식으로 처리, 최대 너비 28
              height={80} // 높이 80px
              width={'100%'} // 너비는 100%
              src="/images/intro/myface.png" // 앨범 커버 이미지 경로
            />
          </div>

          {/* 카드 내용 */}
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex items-start justify-between">
              {/* 정보 및 직책 */}
              <div className="flex flex-col gap-0">
                <div className="text-sm font-semibold text-foreground/80">삼성반도체에서 근무중</div>
                <div className="mt-2 text-xs text-foreground/80">프론트엔드 프리랜서 개발자</div>
                <div className="text-xs font-medium ">유저에게 소리를 전달하는 모든 일</div>
              </div>

              {/* 음악 노트 아이콘: 애니메이션 효과 추가 */}
              <div className="animate-ping">
                <PiMusicNoteFill size={12} />
              </div>
            </div>

            {/* 슬라이더 및 경험 년수 표시 */}
            <div className="flex flex-col gap-1 mt-3">
              <Slider color="foreground" size="sm" step={0.01} maxValue={1} minValue={0} defaultValue={0.4} className="max-w-md" />
              <div className="flex justify-between">
                <p className="text-sm text-foreground/50">22/09</p> {/* 날짜 표시 */}
                <p className="text-sm text-foreground/50">{'+' + getExperiencedYear().NYearNMonth + 'days'}</p> {/* 경험 년수 표시 */}
              </div>
            </div>

            {/* 음악 플레이어 컨트롤 버튼들 */}
            <div className="flex items-center justify-center w-full">
              {/* 반복 버튼 */}
              <Button isIconOnly className="data-[hover]:bg-foreground/10" radius="full" variant="light">
                <RiRepeatOneLine className="text-foreground/80" size={20} />
              </Button>

              {/* 이전 트랙 버튼 */}
              <Button isIconOnly className="data-[hover]:bg-foreground/10" radius="full" variant="light">
                <CgPlayTrackPrev size={20} />
              </Button>

              {/* 일시정지 버튼 */}
              <Button isIconOnly className="w-auto h-auto data-[hover]:bg-foreground/10" radius="full" variant="light">
                <FaPauseCircle size={40} />
              </Button>

              {/* 다음 트랙 버튼 */}
              <Button isIconOnly className="data-[hover]:bg-foreground/10" radius="full" variant="light">
                <CgPlayTrackNext size={20} />
              </Button>

              {/* 셔플 버튼 */}
              <Button isIconOnly className="data-[hover]:bg-foreground/10" radius="full" variant="light">
                <IoShuffleOutline className="text-foreground/80" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
