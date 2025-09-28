import React from 'react';
import styled from 'styled-components';
import DescriptionIcon from '@mui/icons-material/Description';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react';

interface ExtraInfoDialogProp {
  iconType?: 'paper' | 'prize' | 'contribution';
  dialogTitle: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  children: React.ReactNode;
}

const StyledOverlayWrapper = styled.div`
  &.nextui-modal-overlay {
    width: 100%;
    height: 100%;
    cursor: default;
  }
`;

const StyledModalHeader = styled(ModalHeader)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledModalBody = styled(ModalBody)`
  padding: 1.5rem;
  padding-top: 0;
`;

export default function ExtraInfoDialog({ iconType = 'paper', dialogTitle, size = 'md', children }: ExtraInfoDialogProp) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  // 아이콘 선택
  let Icon = <DescriptionOutlinedIcon color="primary" />;
  switch (iconType) {
    case 'paper':
      Icon = <DescriptionIcon color="primary" />;
      break;
    case 'prize':
      Icon = <EmojiEventsIcon color="primary" />;
      break;
    case 'contribution':
      Icon = <DescriptionOutlinedIcon color="primary" />;
      break;
  }

  // 오버레이 클릭 시 닫기
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).classList.contains('nextui-modal-overlay')) {
      onClose();
    }
  };

  return (
    <>
      <Button isIconOnly onPress={onOpen} variant="light" size="sm">
        {Icon}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={size} onOpenChange={onOpenChange}>
        <StyledOverlayWrapper className="nextui-modal-overlay" onClick={handleOverlayClick}>
          <ModalContent>
            <StyledModalHeader>{dialogTitle}</StyledModalHeader>
            <StyledModalBody>{children}</StyledModalBody>
          </ModalContent>
        </StyledOverlayWrapper>
      </Modal>
    </>
  );
}
