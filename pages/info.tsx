import React from "react";
import {
  Flex,
  useColorModeValue,
  ButtonGroup,
  IconButton,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

export default function Component() {
  const header = ["name", "e_mail", "date of birth", "phone number", "actions"];
  const data = [
    {
      name: "شيلان حسن خليل",
      e_mail: "example@gmail.com",
      age: "1/1/2000",
      phone: "00964772345",
    },
    {
      name: "امنة محمد مجيد",
      e_mail: "example@gmail.com",
      age: "1/1/2000",
      phone: "00964772345",
    },
    {
      name: " معتز ماهر سعد الله",
      e_mail: "example@gmail.com",
      age: "1/1/2000",
      phone: "00964772345",
    },
    {
      name: "محمد باقر احمد",
      e_mail: "example@gmail.com",
      age: "1/1/2000",
      phone: "00964772345",
    },
  ];
  const color1 = useColorModeValue("gray.400", "gray.400");
  const color2 = useColorModeValue("gray.400", "gray.400");
  type types = "name" | "created";
  return (
    <Flex
      w="full"
      bg="gray.100"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Table
        w="full"
        bg={useColorModeValue("white", "gray.800")}
        display={{
          base: "block",
          md: "table",
        }}
        sx={{
          "@media print": {
            display: "table",
          },
        }}
      >
        <Thead
          display={{
            base: "none",
            md: "table-header-group",
          }}
          sx={{
            "@media print": {
              display: "table-header-group",
            },
          }}
        >
          <Tr>
            {header.map((x) => (
              <Th key={x}>{x}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody
          display={{
            base: "block",
            lg: "table-row-group",
          }}
          sx={{
            "@media print": {
              display: "table-row-group",
            },
          }}
        >
          {data.map((token, tid) => {
            return (
              <Tr
                key={tid}
                display={{
                  base: "grid",
                  md: "table-row",
                }}
                sx={{
                  "@media print": {
                    display: "table-row",
                  },
                  gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                  gridGap: "10px",
                }}
              >
                {Object.keys(token).map((x) => {
                  return (
                    <React.Fragment key={`${tid}${x}`}>
                      <Td
                        display={{
                          base: "table-cell",
                          md: "none",
                        }}
                        sx={{
                          "@media print": {
                            display: "none",
                          },
                          textTransform: "uppercase",
                          color: color1,
                          fontSize: "xs",
                          fontWeight: "bold",
                          letterSpacing: "wider",
                          fontFamily: "heading",
                        }}
                      >
                        {x}
                      </Td>
                      <Td
                        color={"gray.500"}
                        fontSize="md"
                        fontWeight="hairline"
                      >
                        {token[x as types]}
                      </Td>
                    </React.Fragment>
                  );
                })}
                <Td
                  display={{
                    base: "table-cell",
                    md: "none",
                  }}
                  sx={{
                    "@media print": {
                      display: "none",
                    },
                    textTransform: "uppercase",
                    color: color2,
                    fontSize: "xs",
                    fontWeight: "bold",
                    letterSpacing: "wider",
                    fontFamily: "heading",
                  }}
                >
                  Actions
                </Td>
                <Td>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      colorScheme="blue"
                      icon={<BsBoxArrowUpRight />}
                      aria-label={""}
                    />
                    <IconButton
                      colorScheme="green"
                      icon={<AiFillEdit />}
                      aria-label={""}
                    />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                      aria-label={""}
                    />
                  </ButtonGroup>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
}
