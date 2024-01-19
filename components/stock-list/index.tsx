"use client";
import { Grid, Loader, LoadingOverlay, Title } from "@mantine/core";
import { FC, useEffect, useMemo } from "react";
import { StockListProps } from "@/interfaces";
import { StockItem } from "./stock-item";
import { Alert, Filter } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { resetFilter, setStock } from "@/store/slices/stock";

export const StockList: FC<StockListProps> = ({ stock }) => {
  const dispatch = useAppDispatch();
  const {
    stock: stockList,
    filteredStock: filter,
    showAlert,
  } = useAppSelector((state) => ({
    ...state.stock,
    showAlert: state.ui.showAlert,
  }));

  const isLoading = useMemo(() => !stock.length, [stock]);

  const filteredStock = useMemo(
    () => (filter.length ? filter : stockList),
    [stockList, filter],
  );

  useEffect(() => {
    if (stock.length) dispatch(setStock(stock));
  }, [stock]);

  useEffect(() => {
    dispatch(resetFilter());
  }, []);

  if (isLoading) {
    return (
      <LoadingOverlay visible>
        <Loader size={"xl"} />
      </LoadingOverlay>
    );
  }

  return (
    <>
      {showAlert && <Alert />}
      <Filter />
      <Title order={2} mb={30}>
        Results: <b>{filteredStock.length}</b>
      </Title>
      <Grid justify={"space-between"}>
        {filteredStock.map((item) => (
          <StockItem key={item.Id} {...item} />
        ))}
      </Grid>
    </>
  );
};
