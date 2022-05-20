/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode } from "react";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  Image,
  Heading,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "Classes"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("green.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>sw 4th</MenuItem>
                <MenuItem>ai 4th</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box p={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={40}>
        {" "}
        {
          <>
            <HStack>
              <HStack>
                <Center py={2}>
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
                        {"SOFRWARE"}
                      </Heading>
                      <Heading color={"gray.500"} size="xs" mb={4}>
                        4TH STAGE
                      </Heading>

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
              </HStack>
              <HStack>
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
                      <Heading
                        fontWeight={600}
                        color={"gray.500"}
                        size="sm"
                        mb={4}
                      >
                        4TH STAGE
                      </Heading>

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
              </HStack>
            </HStack>
          </>
        }
      </Box>

      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Blog</Link>
          </Stack>
          <Heading size={"xs"}>
            {"  © computer scince. All rights reserved"}
          </Heading>
        </Container>
      </Box>
    </>
  );
}
