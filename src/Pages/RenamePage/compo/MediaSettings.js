import { useState } from 'react';
import {
  Box,
  Text,
  IconButton,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Select,
  Collapse,
  TabPanel,
  Icon,
} from '@chakra-ui/react';

// Custom Arrow Icon (similar to the uploaded image)
const CustomArrowIcon = ({ isOpen }) => (
  <Icon viewBox="0 0 24 24" boxSize={7} color="purple.400">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
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

// Section Header Component
const SectionHeader = ({ title, isOpen, onToggle }) => (
  <Box display="flex" alignItems="center" mt={4} px={2}>
    {/* Title */}
    <Text fontWeight="bold" color="purple.500" fontSize="md">
      {title}
    </Text>

    {/* Line between title and icon */}
    <Box flex="1" mx={2} height="2px" bg="purple.100" />

    {/* Toggle Icon */}
    <IconButton
      icon={<CustomArrowIcon isOpen={isOpen} />}
      variant="ghost"
      onClick={onToggle}
      aria-label={`Toggle ${title}`}
      size="sm"
    />
  </Box>
);

// Main MediaSettings Component
const MediaSettings = () => {
  const [sections, setSections] = useState({
    video: false,
    image: false,
    isp: false,
    privacyMask: false,
    osd: false,
  });

  const toggleSection = (section) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <TabPanel>
      <Box mt={4}>
        {/* Video Setting */}
        <SectionHeader
          title="Video Setting"
          isOpen={sections.video}
          onToggle={() => toggleSection('video')}
        />
        <Collapse in={sections.video} animateOpacity>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} mt={2}>
            <FormControl>
              <FormLabel>Microphone Type</FormLabel>
              <Select defaultValue="active-pickup">
                <option value="active-pickup">Active pickup</option>
                <option value="disabled">Disabled</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Profile</FormLabel>
              <Select defaultValue="h264">
                <option value="h264">H.264</option>
                <option value="h265">H.265</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Quality</FormLabel>
              <Select defaultValue="low">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Encode Type</FormLabel>
              <Select defaultValue="low">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Stream</FormLabel>
              <Select defaultValue="main-stream">
                <option value="main-stream">Main stream</option>
                <option value="sub-stream">Sub stream</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Resolution</FormLabel>
              <Select defaultValue="2304x1296">
                <option value="2304x1296">2304 x 1296</option>
                <option value="1920x1080">1920 x 1080</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Bitrate Control Type</FormLabel>
              <Select defaultValue="vbr">
                <option value="vbr">VBR</option>
                <option value="cbr">CBR</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Channel Name</FormLabel>
              <Input placeholder="Enter channel name" />
            </FormControl>

            <FormControl>
              <FormLabel>BPS</FormLabel>
              <Input placeholder="Enter BPS" type="number" />
            </FormControl>

            <FormControl>
              <FormLabel>FPS</FormLabel>
              <Input placeholder="Enter FPS" type="number" />
            </FormControl>
          </SimpleGrid>
        </Collapse>

        {/* Image Setting */}
        <SectionHeader
          title="Image Setting"
          isOpen={sections.image}
          onToggle={() => toggleSection('image')}
        />
        <Collapse in={sections.image} animateOpacity>
          <Text mt={4}>Image settings content goes here...</Text>
        </Collapse>

        {/* ISP Setting */}
        <SectionHeader
          title="ISP"
          isOpen={sections.isp}
          onToggle={() => toggleSection('isp')}
        />
        <Collapse in={sections.isp} animateOpacity>
          <Text mt={4}>ISP settings content goes here...</Text>
        </Collapse>

        {/* Privacy Mask Setting */}
        <SectionHeader
          title="Privacy Mask"
          isOpen={sections.privacyMask}
          onToggle={() => toggleSection('privacyMask')}
        />
        <Collapse in={sections.privacyMask} animateOpacity>
          <Text mt={4}>Privacy mask content goes here...</Text>
        </Collapse>

        {/* OSD Setting */}
        <SectionHeader
          title="OSD"
          isOpen={sections.osd}
          onToggle={() => toggleSection('osd')}
        />
        <Collapse in={sections.osd} animateOpacity>
          <Text mt={4}>OSD settings content goes here...</Text>
        </Collapse>
      </Box>
    </TabPanel>
  );
};

export default MediaSettings;
