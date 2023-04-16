import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

type Props = {
    label: string;
    placeholder: string;
    type: "email" | "text";
};

function FormInput({label, placeholder, type}: Props) {
  return (
    <FormControl>
      <FormLabel fontSize={["lg", "xl", "xl", "2xl"]}>{label}</FormLabel>
      <Input
      type={type}
        placeholder={placeholder}
        h={[12, 12, 12, 16]}
        fontSize={["lg", "xl", "xl", "2xl"]}
        lineHeight={{
          sm: "sm",
          md: "md",
          lg: "lg",
          xl: "lg",
          "2xl": "xl",
        }}
        focusBorderColor="#B7FD00"
      />
    </FormControl>
  );
}

export default FormInput;
