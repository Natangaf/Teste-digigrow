import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { ContainerModal } from "./_modalComponent";

interface ModalProps {
  isOpen: any;
  onClose: () => void;
  children: ReactNode;
}

const ModalComponent = ({ isOpen, onClose, children }: ModalProps) => {
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ContainerModal onClick={handleClickOutside}>{children}</ContainerModal>,
    document.getElementById("modal") as HTMLElement
  );
};

export default ModalComponent;
