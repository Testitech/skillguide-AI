"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

type BackdropType = "opaque" | "blur" | "transparent";

interface LoginModalProps {
  isModalOpen: boolean;
  onModalClose: () => void;
}

export default function LoginModal({
  isModalOpen,
  onModalClose,
}: LoginModalProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState<BackdropType>("opaque");

  const backdrops: BackdropType[] = ["opaque", "blur", "transparent"];

  const handleOpen = (backdropValue: BackdropType) => {
    setBackdrop(backdropValue);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button
            key={b}
            className="capitalize"
            color="warning"
            variant="flat"
            onPress={() => handleOpen(b)}
          >
            {b}
          </Button>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(closeHandler: any) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Oops!</ModalHeader>
              <ModalBody>
                <p>You need to be signed in to be able to visit this page</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={closeHandler}>
                  Close
                </Button>
                <Button color="primary" href="/signup">
                  Sign up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
