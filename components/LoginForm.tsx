import { HTMLChakraProps, Stack, Box, Text } from "@chakra-ui/react";
import * as React from "react";
import { Form, FormButton, FormInput, FormPasswordInput } from "./Form";
import { useRouter } from "next/router";
export const LoginForm = (props: HTMLChakraProps<"form">) => {
  const router = useRouter();
  const [isLoggerIn, setIsLoggedIn] = React.useState(false);

  const submitHandler = () => {
    setIsLoggedIn(true);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  return (
    <>
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={submitHandler}
      >
        <Stack spacing="6">
          <FormInput name="email" label="الايميل" />
          <FormPasswordInput label="الرمز السري" />
          <FormButton label="تسجيل الدخول" />

          {isLoggerIn && (
            <Box
              borderRadius={"lg"}
              py={4}
              bgColor={"green.500"}
              color={"white"}
            >
              <Text fontWeight={"bold"} textAlign={"center"}>
                تم تسحيل الدخول بنجاح
              </Text>
            </Box>
          )}
        </Stack>
      </Form>
    </>
  );
};
