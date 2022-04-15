import React from "react";
import { Textarea, FormControl } from "@chakra-ui/react";
import { useFormikContext } from "formik";

interface Props {
  name: string;
  isLoading?: boolean;
  placeholder?: string;
  label?: string;
  Icon?: React.ReactNode;
  width?: number;
}

export const FormTextArea = ({ name, placeholder, label, width }: Props) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const error = (touched as any)[name] && (errors as any)[name];

  return (
    <FormControl
      label={label}
      style={{ width }}
      validateStatus={error ? "error" : undefined}
      help={error ? error : undefined}
    >
      <Textarea
        onChange={(e: any) => setFieldValue(name, e.target.value)}
        placeholder={placeholder}
        value={(values as any)[name]}
      />
    </FormControl>
  );
};
