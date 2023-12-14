import logo from "./logo.svg";
import "./App.css";
import SimpleForm from "./form/SimpleForm";
import Homepage1 from "./form/Homepage1";
import Footer from "./form/Footer";
import Navbar from "./form/Navbar";

import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ModalData from "./form/ModalData.jsx";
import Bot from "./form/Bot.jsx";

function App() {
  return (
    <div className="App">
      {/* <SimpleForm/> */}
      <Navbar />
      <Homepage1 />
      <Footer />
      <Bot />
    </div>
  );
}



export default App;
