import React, { FC } from "react";
import { Modal } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleModal } from "@/store/slices/ui";
import { CustomModalProps } from "@/interfaces";

export const CustomModal: FC<CustomModalProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { showModal } = useAppSelector((state) => state.ui);

  const handleClose = () => {
    dispatch(toggleModal());
  };

  return (
    <Modal opened={showModal} onClose={handleClose} centered>
      {children}
    </Modal>
  );
};
