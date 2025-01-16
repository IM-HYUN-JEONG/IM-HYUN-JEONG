import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

interface StackChipProp {
  title?: string;
  stackList: string[];
  size?: number;
}

export const StackChip = ({ title, stackList, size = 25 }: StackChipProp) => {
  const [errorIndices, setErrorIndices] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setErrorIndices((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="mt-2">
      {title && <span className="text-sm"># {title}</span>}
      <div className="flex flex-row flex-wrap gap-1">
        {stackList.map((stack, index) => (
          <Tooltip content={stack || 'Unknown Stack'} key={index}>
            <div className="flex flex-row items-center gap-1">
              {errorIndices[index] ? (
                <Image
                  src="/icons/default.svg" // 에러 발생 시 기본 이미지 사용
                  height={size}
                  width={size}
                  alt="Default Icon"
                />
              ) : (
                <Image
                  src={`/icons/${stack?.toLowerCase() || 'default'}.svg`} // 초기 이미지 경로
                  onError={() => handleImageError(index)} // 에러 발생 시 상태 업데이트
                  height={size}
                  width={size}
                  alt={stack || 'Unknown Stack'}
                />
              )}
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
