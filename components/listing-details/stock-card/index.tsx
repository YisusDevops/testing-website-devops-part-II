import React, { FC } from "react";
import { Badge, Card, Group, Text } from "@mantine/core";
import Image from "next/image";
import { StockItemProps } from "@/interfaces";

export const StockCard: FC<StockItemProps> = (house) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder my={10}>
      <Card.Section bg={"#aaf4ed"}>
        <Image
          src={house.ThumbnailURL}
          height={150}
          width={150}
          alt={house.Title}
          style={{ margin: "0 auto" }}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{house.Title}</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed" lineClamp={2}>
        {house.Description}
      </Text>
    </Card>
  );
};
