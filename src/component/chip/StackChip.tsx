import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

interface StackChipProp {
  title?: string;
  stackList: string[];
  size?: number;
}

export const StackChip = ({ title, stackList, size = 25 }: StackChipProp) => {
  const [isImageVisible, setImageVisible] = useState(true);

  return (
    <div className="mt-2">
      {title && <span className="text-sm"># {title}</span>}
      <div className="flex flex-row flex-wrap gap-1">
        {stackList.map((stack, index) => (
          <Tooltip content={stack || 'Unknown Stack'} key={index}>
            <div className="flex flex-row items-center gap-1">
              {isImageVisible && (
                <Image
                  src={`/icons/${stack?.toLowerCase() || 'default'}.svg`} // stack이 없으면 default로 설정
                  onError={(e) => (e.currentTarget.src = '/icons/default.svg')} // 이미지 로드 실패 시 대체
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
