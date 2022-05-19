import { QrReader } from "react-qr-reader";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  VStack,
  Box,
  HStack,
  Button,
  useOutsideClick,
} from "@chakra-ui/react";

import LastCheckedIn from "../components/LastCheckedIn";
import DrawerApp from "../components/Drawer";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawer = useDisclosure();
  const scanHandler = (data: string | null) => {
    // Return if no data scanned
    if (!data) {
      return;
    }

    // TODO: make request to the backend
    // OpenDialog
    onOpen();

    // close Dialog after 2000ms
    setTimeout(() => onClose(), 2000);
  };

  return (
    <div>
      <DrawerApp isOpen={drawer.isOpen} onClose={drawer.onClose}>
        <LastCheckedIn />
      </DrawerApp>
      <VStack>
        <Text py="8" fontSize="4xl">
          يرجى وضع الهوية التعريفية امام الكاميرا من اجل تسجيل الدخول
        </Text>
        <HStack width="full" justifyContent="space-around">
          <VStack width="xl">
            <Box width="xl">
              <QrReader
                onResult={(result, error) => {
                  if (!!result) {
                    onOpen();
                  }
                }}
                constraints={{ facingMode: "user" }}
                scanDelay={1000}
              />
            </Box>
          </VStack>
        </HStack>
        <Button colorScheme="teal" onClick={drawer.onOpen}>
          اخر تسجيلات
        </Button>
      </VStack>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>تسجيل الدخول</ModalHeader>
          <ModalBody>
            {"اهلا بك"}
            <Text as="span" fontWeight="bold" mb="1rem">
              {"              شيلان حسن خليل "}
            </Text>
            تم تسجيل دخولك بنجاح
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
