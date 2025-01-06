import { Accordion, AccordionItem } from '@nextui-org/react';
import { CustomSectionTitle } from 'src/component/SectionTitle';
import { CustomSection } from '../component/CustomSection';
import Image from 'next/image';

export default function Strength() {
  return (
    <CustomSection id={'Strength'}>
      <CustomSectionTitle title={'Strength'} subTitle={'저의 핵심역량 입니다.'} />
      <Accordion variant="splitted" isCompact>
        <AccordionItem key="1" startContent={<Image src={'/images/strength/strength_one.png'} width={30} height={30} />} subtitle={`업무에 대한 높은 책임감`}>
          <div className="text-sm">
            ‘마침표를 잘 찍는 사람’이 되기 위해 업무를 시작하기 전에 오늘하루 해내야 할 일을 체크리스트에 적고 시작을 합니다. <br />
            오늘안에 이것을 끝내야하고, 끝내기 전까지는 잘 움직이지 않습니다.
          </div>
        </AccordionItem>
        <AccordionItem key="2" startContent={<Image src={'/images/strength/strength_two.png'} width={30} height={30} />} subtitle={`지속적인 학습 자세`}>
          <div className="text-sm">
            프론트엔드 개발 분야는 다른 분야에 비해 트렌드가 빠릅니다. <br />
            이에 뒤처지지 않게 저는 하나의 기술을 익혔다고 해서 그 기술에 계속 안주하지 않고 새로운 기술과 트렌드를 꾸준하게 익히도록 노력합니다. <br />
            끊임없는 학습을 통해 사용자 인터페이스와 사용자 경험을 기술적으로 정확하게 구현할 수 있도록 항상 노력하고 사용자의 입장에서 생각합니다.
          </div>
        </AccordionItem>
        <AccordionItem key="3" startContent={<Image src={'/images/strength/strength_three.png'} width={30} height={30} />} subtitle={`업무를 대하는 적극적인 자세`}>
          <div className="text-sm">
            실제 업무를 할때 기획자, 디자이너, 백엔드 개발자 분들과 협업을 많이 했습니다. <br />
            비개발 분야 이신분들과 소통하는데에 있어 되도록 쉬운 용어를 선택하여 상대방이 이해하기 쉽게 대화할 수 있었습니다. <br />
            또, 개발분야에서 기술적인 소통을 할수도 있고 그 과정에서 모르는 분야에서는 이해를 잘 못할 수도 있고, 그럴때는 적극성을 가지고 정중하게 다시 한 번 물어봄으로써 의사소통에 문제가 없게
            만들었습니다.
          </div>
        </AccordionItem>
      </Accordion>
    </CustomSection>
  );
}
