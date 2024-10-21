import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Button,
  Box,
  Text,
  Flex,
  Divider,
  ModalFooter,
  Image,
} from "@chakra-ui/react";
import Frame from "./Frame.svg"; // Ensure the path is correct
import Vector from "./Vector.svg";
import GeneralSettings from "./compo/GeneralSettings";
import MediaSettings from "./compo/MediaSettings";
import AISettings from "./compo/AiSetings";
import NetworkSettings from "./compo/NetworkSettings";

const CameraModel = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay />
      <ModalContent>
      <ModalHeader p={4}>
  <Flex alignItems="center" justifyContent="center" position="relative">
    {/* Centered Title */}
    <Box fontWeight="bold" fontSize="lg" textAlign="center">
      Camera Settings
    </Box>

    {/* Icon on the right */}
    <img
      src={Vector}
      alt="Icon"
      height={29}
      width={29}
      style={{
        position: 'absolute',
        right: 0,
        marginRight: '8px',
      }}
    />
  </Flex>
</ModalHeader>

        <ModalBody>
          <Box minHeight="656px">
            <Tabs
              variant="enclosed"
              /* Uncomment the following lines if you decide to track the selected tab
              onChange={handleTabChange}
              index={selectedTab}
              */
            >
              <TabList
                justifyContent={{ base: "flex-start", md: "space-around" }}
                width="100%"
                overflowX={{ base: "auto", md: "initial" }}
                flexWrap={{ base: "nowrap", md: "wrap" }}
                px={{ base: 2, md: 0 }}
                css={{
                  "::-webkit-scrollbar": { display: "none" }, // Hide scrollbar on mobile
                }}
              >
                {["General", "Media", "AI Settings", "Network", "System"].map(
                  (label) => (
                    <Tab
                      key={label}
                      _selected={{
                        color: "purple.500",
                        borderBottom: "4px solid #a020f0",
                      }}
                      color="gray.500"
                      fontWeight="bold"
                      whiteSpace="nowrap" // Prevent text wrapping on smaller screens
                      fontSize={{ base: "sm", md: "md" }}
                      minWidth={{ base: "120px", md: "auto" }} // Reduce width for mobile
                      mx={{ base: 1, md: 2 }} // Add margin between tabs
                    >
                      {label}
                    </Tab>
                  )
                )}
              </TabList>

              {/* Divider below the tabs */}
              <Divider
                orientation="horizontal"
                borderColor="gray.300"
                borderWidth="1px"
                mt={0}
                width="100%"
              />

              {/* Tab Panels */}
              <TabPanels>
                {/* General Settings Tab */}
                <TabPanel>
                  <GeneralSettings />
                </TabPanel>

                {/* Media Settings Tab */}
                <TabPanel>
                  <MediaSettings />
                </TabPanel>

                {/* AI Settings Tab */}
                <TabPanel>
                 <AISettings/>
                </TabPanel>

                {/* Network Settings Tab */}
                <TabPanel>
                 <NetworkSettings/>
                </TabPanel>

                {/* System Settings Tab */}
                <TabPanel>
                  <Text>System Settings Content...</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </ModalBody>

        <Box mt={8} width="100%">
          {/* Divider */}
          <Divider
            borderColor="gray.500"
            mb={2}
            w={{ base: "100%", md: "92%" }}
            ml={{ base: 0, md: "32px" }}
            border="1px solid gray.500"
          />

          {/* Action Buttons */}
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "flex-start", md: "center" }}
            gap={{ base: 4, md: 8 }}
            mb={2}
            px={{ base: 4, md: 8 }}
          >
            {/* Set to Default Button */}
            <Box display="flex" alignItems="center">
              <Button
                variant="link"
                color="red.500"
                fontWeight="bold"
                fontSize={{ base: "sm", md: "15px" }}
                textDecoration="underline"
                mr={2}
              >
                SET TO DEFAULT
              </Button>
              <Image src={Frame} height={19} width={19} alt="Icon" ml={2} />
            </Box>

            {/* Reboot Camera Button */}
            <Box display="flex" alignItems="center">
              <Button
                variant="link"
                color="red.500"
                fontWeight="bold"
                fontSize={{ base: "sm", md: "15px" }}
                textDecoration="underline"
                mr={2}
              >
                REBOOT CAMERA
              </Button>
              <Image src={Frame} height={19} width={19} alt="Icon" ml={2} />
            </Box>
          </Box>
        </Box>

        {/* Footer Divider */}
        <Divider width="100%" border="1px solid black" mb="0px" />

        {/* Modal Footer */}
        <ModalFooter
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={{ base: 4, md: 8 }}
          width="100%"
          maxWidth="400px"
          mx="auto"
        >
          <Button
            bg="white"
            color="#ff4d4f"
            border="2px solid #ff9c9e"
            p="8px 50px"
            borderRadius="8px"
            cursor="pointer"
            fontSize="16px"
            fontWeight="bold"
            _hover={{ bg: "#fac9c9" }}
            onClick={onClose}
            width={{ base: "100%", md: "auto" }}
          >
            Cancel
          </Button>
          <Button
            bg="#8e44ad"
            color="white"
            border="none"
            p="8px 50px"
            borderRadius="8px"
            cursor="pointer"
            fontSize="16px"
            fontWeight="bold"
            _hover={{ bg: "#a569bd" }}
            type="submit"
            width={{ base: "100%", md: "auto" }}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CameraModel;
