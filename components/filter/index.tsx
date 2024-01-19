"use client";
import React, { useEffect } from "react";
import { Box, Button, Select, Slider, Text } from "@mantine/core";
import style from "./style.module.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { formatPrice } from "@/utils";
import { FilterInputsProps } from "@/interfaces";
import { selectFields } from "@/components/filter/data";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  setFilterStock,
  selectMaxPrice,
  selectMinPrice,
  resetFilter,
} from "@/store/slices/stock";

export const Filter = () => {
  const dispatch = useAppDispatch();
  const { filteredStock } = useAppSelector((state) => state.stock);

  const minPrice = useAppSelector(selectMinPrice);
  const maxPrice = useAppSelector(selectMaxPrice);

  const { handleSubmit, control, getValues, reset } =
    useForm<FilterInputsProps>({
      defaultValues: {
        bedrooms: "1",
        bathrooms: "1",
        parking: "1",
        price_range: minPrice || 0,
      },
    });
  const onSubmit: SubmitHandler<FilterInputsProps> = (data) => {
    dispatch(setFilterStock(data));
  };

  const handleResetFilters = () => {
    dispatch(resetFilter());
    reset();
  };

  useEffect(() => {
    if (!filteredStock.length) {
      reset();
    }
  }, [filteredStock]);

  return (
    <form className={style.main} onSubmit={handleSubmit(onSubmit)}>
      {selectFields.map((item) => (
        <Controller
          key={item.name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            // @ts-ignore
            <Select
              label={item.label}
              placeholder={item.placeholder}
              data={item.data}
              comboboxProps={{
                transitionProps: { transition: "pop", duration: 200 },
              }}
              {...field}
            />
          )}
          name={item.name}
        />
      ))}

      <Controller
        control={control}
        name="price_range"
        rules={{ required: true }}
        render={({ field }) => (
          <Box className={style.contSlider}>
            <Text>
              Range Price <br />
              <b>{formatPrice(getValues("price_range"))}</b>
            </Text>
            <Slider
              {...field}
              className={style.slider}
              min={minPrice}
              max={maxPrice}
              step={1}
              label={(value) => formatPrice(value)}
            />
          </Box>
        )}
      />

      <Button type={"submit"}>Search</Button>
      <Button variant={"outline"} type={"button"} onClick={handleResetFilters}>
        Reset filters
      </Button>
    </form>
  );
};
