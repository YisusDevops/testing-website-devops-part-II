import React, { FC, useState } from "react";
import { Box, Button, Grid, Text, Title } from "@mantine/core";
import Image from "next/image";
import { StockItemProps } from "@/interfaces";
import { formatPrice } from "@/utils";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks";
import { setHouse } from "@/store/slices/house";
import itemStyle from "./style.module.css";

export const StockItem: FC<StockItemProps> = (item) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { push } = useRouter();
  const handleNavigate = (item: StockItemProps) => {
    setIsLoading(true);
    dispatch(setHouse(item));
    push(`/listing-details/${item.Id}`);
  };

  return (
    <Grid.Col key={item.Id} span={4} className={itemStyle.main}>
      <Image src={item.PictureURL} alt={item.Title} width={350} height={350} />
      <Box p={10}>
        <Title order={3} lineClamp={1} mt={5}>
          {item.Title}
        </Title>

        <Title order={5} c={"gray.6"}>
          {item.Location}
        </Title>

        <Text c={"gray.5"}>
          {item.Bedrooms} Beds | {item.Bathrooms} Baths
        </Text>

        <Title order={2} my={8}>
          {formatPrice(item["Sale Price"])}
        </Title>

        <Button
          fullWidth
          onClick={() => handleNavigate(item)}
          loading={isLoading}
        >
          View Details
        </Button>
      </Box>
    </Grid.Col>
  );
};
