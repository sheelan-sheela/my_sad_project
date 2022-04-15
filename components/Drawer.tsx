import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

export default function DrawerApp({ onClose, isOpen, children }: Props) {
  return (
    <Drawer size="sm" placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          اخر تسجيلات دخول
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
