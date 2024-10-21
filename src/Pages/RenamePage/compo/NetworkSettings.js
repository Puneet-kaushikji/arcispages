import { useState } from "react";
import {
  Box,
  Text,
  IconButton,
  Collapse,
  TabPanel,
  Icon,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

// Reuse Custom Arrow Icon
const CustomArrowIcon = ({ isOpen }) => (
  <Icon viewBox="0 0 24 24" boxSize={7} color="purple.400">
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d={isOpen ? "M8 14l4-4 4 4" : "M8 10l4 4 4-4"}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

// Section Header Component for Network settings
const SectionHeader = ({ title, isOpen, onToggle }) => (
  <Box display="flex" alignItems="center" mt={4} px={2}>
    <Text fontWeight="bold" color="purple.500" fontSize="md">
      {title}
    </Text>
    <Box flex="1" mx={2} height="2px" bg="purple.100" />
    <IconButton
      icon={<CustomArrowIcon isOpen={isOpen} />}
      variant="ghost"
      onClick={onToggle}
      aria-label={`Toggle ${title}`}
      size="sm"
    />
  </Box>
);

// NetworkSettings Component
const NetworkSettings = () => {
  const [activeSection, setActiveSection] = useState(null); // Track open section

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section)); // Toggle only one section open at a time
  };

  return (
    <TabPanel>
      <Box mt={4}>
        {/* Network Type, IP Address, Signal Strength */}
        <Box display="flex" justifyContent="space-between" px={2}>
          <Text fontSize="md" color="purple.500">
            Network Type: <strong>Wi-Fi</strong>
          </Text>
          <Text fontSize="md" color="purple.500">
            IP Address: <strong>192.168.1.100</strong>
          </Text>
          <Text fontSize="md" color="purple.500">
            Signal Strength: <strong>Weak</strong>
          </Text>
        </Box>

        {/* Local Setup */}
        <SectionHeader
          title="Local Setup"
          isOpen={activeSection === "localSetup"}
          onToggle={() => toggleSection("localSetup")}
        />
        <Collapse in={activeSection === "localSetup"} animateOpacity>
          <Text mt={4}>Local setup settings go here...</Text>
        </Collapse>

        {/* RTMP Setup */}
        <SectionHeader
          title="RTMP Setup"
          isOpen={activeSection === "rtmpSetup"}
          onToggle={() => toggleSection("rtmpSetup")}
        />
        <Collapse in={activeSection === "rtmpSetup"} animateOpacity>
          <Text mt={4}>RTMP setup settings go here...</Text>
        </Collapse>

        {/* FTP Setup */}
        <SectionHeader
          title="FTP Setting"
          isOpen={activeSection === "ftpSetup"}
          onToggle={() => toggleSection("ftpSetup")}
        />
        <Collapse in={activeSection === "ftpSetup"} animateOpacity>
          <Text mt={4}>FTP settings go here...</Text>
        </Collapse>

        {/* 4G Network Settings */}
        <SectionHeader
          title="4G Network Settings"
          isOpen={activeSection === "4gNetworkSettings"}
          onToggle={() => toggleSection("4gNetworkSettings")}
        />
        <Collapse in={activeSection === "4gNetworkSettings"} animateOpacity>
          {/* IMEI, ICCID, Signal Value, Out Bandwidth */}
          <Box mt={6} display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={4}>
            {/* IMEI Field */}
            <FormControl>
              <FormLabel>IMEI</FormLabel>
              <Input placeholder="Enter IMEI" />
            </FormControl>

            {/* ICCID Field */}
            <FormControl>
              <FormLabel>ICCID</FormLabel>
              <Input placeholder="Enter ICCID" />
            </FormControl>

            {/* Signal Value (dBm) Field */}
            <FormControl>
              <FormLabel>Signal Value (dBm)</FormLabel>
              <Input placeholder="Enter Signal Value" />
            </FormControl>

            {/* Out Bandwidth (dBm) Field */}
            <FormControl>
              <FormLabel>Out Bandwidth (dBm)</FormLabel>
              <Input placeholder="Enter Out Bandwidth" />
            </FormControl>
          </Box>
        </Collapse>
      </Box>
    </TabPanel>
  );
};

export default NetworkSettings;
