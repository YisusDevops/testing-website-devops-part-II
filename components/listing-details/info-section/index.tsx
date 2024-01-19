import React from "react";
import { Box, Grid, Text, Title } from "@mantine/core";
import style from "./styles.module.css";
import Image from "next/image";
import { useAppSelector } from "@/hooks";
import { formatPrice } from "@/utils";

export const InfoSection = () => {
  const house = useAppSelector((state) => state.house);

  return (
    <Grid.Col span={7} className={style.contInfo}>
      <Grid className={style.contHeader}>
        <Grid.Col span={6}>
          <Title order={3}>{house.Title}</Title>
          <Text>{house.Location}</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Title order={3}>{formatPrice(house["Sale Price"])}</Title>
          <Text c={"gray.6"}>{house.DateListed}</Text>
        </Grid.Col>
      </Grid>

      <Box className={style.contImage}>
        <Image
          src={house.PictureURL}
          alt={house.Title}
          width={350}
          height={350}
        />
      </Box>

      <Grid className={style.contDetails}>
        <Grid.Col span={2}>
          <Title order={3}>{house.Bedrooms}</Title>
          <Title order={3} c={"gray.4"}>
            BED
          </Title>
        </Grid.Col>
        <Grid.Col span={2}>
          <Title order={3}>{house.Bathrooms}</Title>
          <Title order={3} c={"gray.4"}>
            Bath
          </Title>
        </Grid.Col>
        <Grid.Col span={3}>
          <Title order={3}>{house.Parking}</Title>
          <Title order={3} c={"gray.4"}>
            PARKING
          </Title>
        </Grid.Col>
        <Grid.Col span={2}>
          <Title order={3}>{house.Sqft}</Title>
          <Title order={3} c={"gray.4"}>
            SQFT
          </Title>
        </Grid.Col>
        <Grid.Col span={3}>
          <Title order={3}>{house.YearBuilt}</Title>
          <Title order={3} c={"gray.4"}>
            YEAR BUILT
          </Title>
        </Grid.Col>
      </Grid>

      <Box className={style.contDescription}>
        <Text>{house.Description}</Text>
      </Box>
    </Grid.Col>
  );
};
