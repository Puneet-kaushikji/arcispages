import { useState } from "react";
import {
  Box,
  Text,
  IconButton,
  Collapse,
  TabPanel,
  Icon,
} from "@chakra-ui/react";

// Custom Arrow Icon (reusing from the provided code)
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

// Section Header Component for AI settings
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

// AISettings Component (for sections in the image)
const AISettings = () => {
  const [activeSection, setActiveSection] = useState(null); // Single state for the open section

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section)); // Only one section can be open
  };

  return (
    <TabPanel>
      <Box mt={4}>
        {/* Motion Detection */}
        <SectionHeader
          title="Motion Detection"
          isOpen={activeSection === "motionDetection"}
          onToggle={() => toggleSection("motionDetection")}
        />
        <Collapse in={activeSection === "motionDetection"} animateOpacity>
          <Text mt={4}>Motion detection settings go here...</Text>
        </Collapse>

        {/* Human Detection */}
        <SectionHeader
          title="Human Detection"
          isOpen={activeSection === "humanDetection"}
          onToggle={() => toggleSection("humanDetection")}
        />
        <Collapse in={activeSection === "humanDetection"} animateOpacity>
          <Text mt={4}>Human detection settings go here...</Text>
        </Collapse>

        {/* Face Detection */}
        <SectionHeader
          title="Face Detection"
          isOpen={activeSection === "faceDetection"}
          onToggle={() => toggleSection("faceDetection")}
        />
        <Collapse in={activeSection === "faceDetection"} animateOpacity>
          <Text mt={4}>Face detection settings go here...</Text>
        </Collapse>

        {/* Line Crossing Detection */}
        <SectionHeader
          title="Line Crossing Detection"
          isOpen={activeSection === "lineCrossingDetection"}
          onToggle={() => toggleSection("lineCrossingDetection")}
        />
        <Collapse in={activeSection === "lineCrossingDetection"} animateOpacity>
          <Text mt={4}>Line crossing detection settings go here...</Text>
        </Collapse>

        {/* Area Detection */}
        <SectionHeader
          title="Area Detection"
          isOpen={activeSection === "areaDetection"}
          onToggle={() => toggleSection("areaDetection")}
        />
        <Collapse in={activeSection === "areaDetection"} animateOpacity>
          <Text mt={4}>Area detection settings go here...</Text>
        </Collapse>

        {/* Traffic Statistics */}
        <SectionHeader
          title="Traffic Statistics"
          isOpen={activeSection === "trafficStatistics"}
          onToggle={() => toggleSection("trafficStatistics")}
        />
        <Collapse in={activeSection === "trafficStatistics"} animateOpacity>
          <Text mt={4}>Traffic statistics settings go here...</Text>
        </Collapse>

        {/* Unattended Baggage Detection */}
        <SectionHeader
          title="Unattended Baggage Detection"
          isOpen={activeSection === "unattendedBaggageDetection"}
          onToggle={() => toggleSection("unattendedBaggageDetection")}
        />
        <Collapse in={activeSection === "unattendedBaggageDetection"} animateOpacity>
          <Text mt={4}>Unattended baggage detection settings go here...</Text>
        </Collapse>

        {/* Missing Object Detection */}
        <SectionHeader
          title="Missing Object Detection"
          isOpen={activeSection === "missingObjectDetection"}
          onToggle={() => toggleSection("missingObjectDetection")}
        />
        <Collapse in={activeSection === "missingObjectDetection"} animateOpacity>
          <Text mt={4}>Missing object detection settings go here...</Text>
        </Collapse>
      </Box>
    </TabPanel>
  );
};

export default AISettings;
