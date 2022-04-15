import React from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";
import { useFormikContext } from "formik";

interface Props {
  name: string;
  isLoading?: boolean;
  placeholder?: string;
  label?: string;
  Icon?: React.ReactNode;
  width?: number;
  prefix?: string;
  suffix?: string;
}

export const FormInput = ({
  name,
  placeholder,
  label,
  width,
  prefix,
  suffix,
}: Props) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const error = (touched as any)[name] && (errors as any)[name];

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        onChange={(e) => setFieldValue(name, e.target.value)}
        placeholder={placeholder}
        value={(values as any)[name]}
        prefix={prefix}
        suffix={suffix}
      />
    </FormControl>
  );
};
