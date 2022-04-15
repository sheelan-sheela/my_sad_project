import { Box, VStack, Text } from "@chakra-ui/react";
import LastCheckedInItem from "./ListItems/LastCheckedInItem";

export default function LastCheckedIn() {
  return (
    <Box height="100vh" overflowY="scroll">
      <VStack align="center">
        {names.map((student) => (
          <LastCheckedInItem
            picture={student.picture}
            firstName={student.firstname}
          />
        ))}
      </VStack>
    </Box>
  );
}

const names = [
  {
    firstname: "شيلان حسن",
    stage: "الرابعة",
    department: "علوم حاسبات",
    picture: "/images/sheelan.jpeg",
  },
  {
    firstname: "امنه محمد",
    stage: "الرابعة",
    department: "علوم حاسبات",
    picture: "/images/amna.jpeg",
  },
  {
    firstname: "معتز ماهر",
    stage: "الرابعة",
    department: "علوم حاسبات",
    picture: "/images/sheelan.jpeg",
  },
];
