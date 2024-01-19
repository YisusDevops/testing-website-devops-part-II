import React from "react";
import { CustomModal } from "@/components/ui/modal";
import { useAppSelector } from "@/hooks";
import { StockCard } from "@/components";
import { Title } from "@mantine/core";

export const SavedStockModal = () => {
  const { savedStock } = useAppSelector((state) => state.stock);

  return (
    <CustomModal>
      {savedStock.length ? (
        savedStock.map((stock, index) => <StockCard key={index} {...stock} />)
      ) : (
        <Title order={1}>No saved stock</Title>
      )}
    </CustomModal>
  );
};
