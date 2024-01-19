import React, { FC } from "react";
import { Box, Notification } from "@mantine/core";
import { useAppDispatch } from "@/hooks";
import { toggleAlert } from "@/store/slices/ui";
import { AlertProps } from "@/interfaces";

export const Alert: FC<AlertProps> = ({
  color = "gray",
  title = "Ooops!",
  description = "Sorry, There are no data based on your filter.",
}) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(toggleAlert());
  };
  return (
    <Box mt={20}>
      <Notification color={color} title={title} onClose={handleClose}>
        {description}
      </Notification>
    </Box>
  );
};
