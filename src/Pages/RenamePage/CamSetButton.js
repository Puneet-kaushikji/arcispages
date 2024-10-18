import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import CameraModel from "./CameraModel"; // Ensure this matches your actual filename

const CamSetButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button colorScheme="purple" onClick={handleOpenModal}>
        Camera Device
      </Button>
      <CameraModel isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CamSetButton;
