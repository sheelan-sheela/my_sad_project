import React from "react";
import { Button } from "@chakra-ui/react";
import { useFormikContext } from "formik";

interface Props {
  label: string;
  isLoading?: boolean;
  color?: string;
}

export function FormButton({ label, isLoading, color }: Props) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      color={color}
      htmlType="submit"
      onClick={() => handleSubmit()}
      loading={isLoading}
      type="submit"
      colorScheme="teal"
      size="lg"
      fontSize="md"
    >
      {label}
    </Button>
  );
}
