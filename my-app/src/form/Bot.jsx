import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ModalData from "./ModalData";
import commet from "../media/commet.png";

const Bot = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        className="basicUsageValue"
        style={{
          float: "right",
          position: "fixed",
          top: "600px",
          right: "30px",
          zIndex: 1,
          marginLeft: "720px",
          padding: "17px 0px",
          backgroundColor: "#fff",
        }}
        float={"right"}
        onClick={onOpen}
        s
      >
        <Image src={commet} width={"60px"} />
      </Button>

      <Modal
        motionPreset="slideInBottom"
        isOpen={isOpen}
        onClose={onClose}
        className="modal_body"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>HI I AM BOT... How Can i help you</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalData />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Bot;
