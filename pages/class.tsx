/* eslint-disable react-hooks/rules-of-hooks */
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function socialProfileWithImageHorizontal() {
  return (
    <>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "540px" }}
          height={{ sm: "476px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} bg="green.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469"
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              SOFRWARE
            </Heading>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              4TH STAGE
            </Text>

            <Stack
              align={"center"}
              justify={"center"}
              direction={"row"}
              mt={6}
            ></Stack>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
              >
                students
              </Button>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"green.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
              >
                signing
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "540px" }}
          height={{ sm: "476px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("white.100", "gray.900")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} bg="green.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                "                https://media.istockphoto.com/photos/artificial-intelligence-in-healthcare-new-ai-applications-in-medicine-picture-id1365534802"
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              A.I
            </Heading>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
             4TH STAGE
            </Text>

            <Stack
              align={"center"}
              justify={"center"}
              direction={"row"}
              mt={6}
            ></Stack>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
              >
                students
              </Button>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"green.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
              >
                signing
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </>
  );
}
