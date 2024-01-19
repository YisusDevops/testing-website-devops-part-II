"use client";
import React, { useEffect } from "react";
import {
  ActionIcon,
  Box,
  Button,
  Grid,
  Input,
  Textarea,
  Title,
} from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import style from "./style.module.css";
import { Alert, SavedStockModal } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleAlert, toggleModal } from "@/store/slices/ui";
import { removeSavedStock, setSavedStock } from "@/store/slices/stock";
import { useRouter } from "next/navigation";
import { ContactFormProps } from "@/interfaces";
import { contactData } from "./data";

export const FormSection = () => {
  const { showAlert, showModal } = useAppSelector((state) => state.ui);
  const house = useAppSelector((state) => state.house);
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const { savedStock } = useAppSelector((state) => state.stock);
  const savedStockNames = savedStock.map((item) => item.Title);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormProps>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      comments: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormProps> = (data) => {
    reset();
    dispatch(toggleAlert());
    console.log(data);
  };

  const isSaved = savedStock.some((item) => item.Title === house.Title);

  const handleStockAction = () => {
    dispatch(isSaved ? removeSavedStock(house) : setSavedStock(house));
  };

  const handleFind = () => {
    return savedStockNames.includes(house.Title);
  };

  const handleSavedStockModal = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    if (!house.Title) push(`/`);
  }, []);

  return (
    <Grid.Col span={5} className={style.main}>
      <Box className={style.contSaveButton}>
        <ActionIcon
          onClick={handleStockAction}
          variant={isSaved ? "filled" : "outline"}
          size="lg"
          aria-label="Gradient action icon"
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
        >
          <IconHeart />
        </ActionIcon>

        <Button onClick={handleSavedStockModal}>Saved Properties</Button>
      </Box>

      <Box className={style.contForm}>
        <Title order={3}>Contact Agent</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          {contactData.map((item) => (
            <Controller
              key={item.name}
              // @ts-ignore
              name={item.name}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input.Wrapper
                  label={item.label}
                  description={item.description}
                  // @ts-ignore
                  error={errors[item.name] && item.error}
                >
                  <Input
                    placeholder={item.placeholder}
                    type={item.type}
                    pattern={item.pattern}
                    {...field}
                  />
                </Input.Wrapper>
              )}
            />
          ))}

          <Controller
            name="comments"
            control={control}
            rules={{ required: "Comments are required" }}
            render={({ field, fieldState }) => (
              <Textarea
                label="Comments"
                placeholder="Comments *"
                error={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Button type={"submit"} fullWidth>
            Contact Now
          </Button>
        </form>

        {showAlert && (
          <Alert
            title={"Thanks for you message"}
            description={"We will contact you soon"}
            color={"green"}
          />
        )}

        {showModal && <SavedStockModal />}
      </Box>
    </Grid.Col>
  );
};
