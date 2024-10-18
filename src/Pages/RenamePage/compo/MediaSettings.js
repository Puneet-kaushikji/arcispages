import { useState } from "react";
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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
} from "@chakra-ui/react";

// Custom Arrow Icon (similar to the uploaded image)
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
  const [activeSection, setActiveSection] = useState(null); // Single state to track the open section

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section)); // Only one section can be open
  };

  return (
    <TabPanel>
      <Box mt={4}>
        {/* Video Setting */}
        <SectionHeader
          title="Video Setting"
          isOpen={activeSection === "video"}
          onToggle={() => toggleSection("video")}
        />
        <Collapse in={activeSection === "video"} animateOpacity>
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
          isOpen={activeSection === "image"}
          onToggle={() => toggleSection("image")}
        />
        <Collapse in={activeSection === "image"} animateOpacity>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={2}>
            {/* Contrast */}
            <FormControl>
              <FormLabel>Contrast</FormLabel>
              <Slider
                defaultValue={50}
                min={0}
                max={100}
                step={1}
                focusThumbOnChange={false}
                position="relative"
              >
                {/* Slider Track */}
                <SliderTrack bg="gray.300" height="4px">
                  <SliderFilledTrack bg="gray.500" />
                </SliderTrack>

                {/* Central Mark */}
                {/* <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  width="2px"
                  height="12px"
                  bg="purple.400"
                /> */}

                {/* Slider Thumb */}
                <SliderThumb
                  boxSize={3}
                  bg="navy"
                  _focus={{ boxShadow: "none" }}
                  top="50%" // Align thumb to the center of the track
                  // transform="translate(-50%,-50%)"
                />
              </Slider>
            </FormControl>

            {/* Brightness */}
            <FormControl>
              <FormLabel>Brightness</FormLabel>
              <Slider
                defaultValue={50}
                min={0}
                max={100}
                step={1}
                focusThumbOnChange={false}
                position="relative"
              >
                {/* Slider Track */}
                <SliderTrack bg="gray.300" height="4px">
                  <SliderFilledTrack bg="gray.500" />
                </SliderTrack>

                {/* Central Mark */}

                {/* Slider Thumb */}
                <SliderThumb
                  boxSize={3}
                  bg="navy"
                  _focus={{ boxShadow: "none" }}
                  top="50%" // Align thumb to the center of the track
                  // transform="translate(-50%,-50%)"
                />
              </Slider>
            </FormControl>

            {/* Saturation */}
            <FormControl>
              <FormLabel>Saturation</FormLabel>
              <Slider
                defaultValue={50}
                min={0}
                max={100}
                step={1}
                focusThumbOnChange={false}
                position="relative"
              >
                {/* Slider Track */}
                <SliderTrack bg="gray.300" height="4px">
                  <SliderFilledTrack bg="gray.500" />
                </SliderTrack>

                {/* Central Mark */}

                {/* Slider Thumb */}
                <SliderThumb
                  boxSize={3}
                  bg="navy"
                  _focus={{ boxShadow: "none" }}
                  top="50%" // Align thumb to the center of the track
                  // transform="translate(-50%,-50%)"
                />
              </Slider>
            </FormControl>

            {/* Hue */}
            <FormControl>
              <FormLabel>Hue</FormLabel>
              <Slider
                defaultValue={50}
                min={0}
                max={100}
                step={1}
                focusThumbOnChange={false}
                position="relative"
              >
                {/* Slider Track */}
                <SliderTrack bg="gray.300" height="4px">
                  <SliderFilledTrack bg="gray.500" />
                </SliderTrack>

                {/* Central Mark */}

                {/* Slider Thumb */}
                <SliderThumb
                  boxSize={3}
                  bg="navy"
                  _focus={{ boxShadow: "none" }}
                  top="50%" // Align thumb to the center of the track
                  // transform="translate(-50%,-50%)"
                />
              </Slider>
            </FormControl>

            {/* Sharpen */}
            <FormControl>
              <FormLabel>Sharpen</FormLabel>
              <Slider
                defaultValue={50}
                min={0}
                max={100}
                step={1}
                focusThumbOnChange={false}
                position="relative"
              >
                {/* Slider Track */}
                <SliderTrack bg="gray.300" height="4px">
                  <SliderFilledTrack bg="gray.500" />
                </SliderTrack>

                {/* Central Mark */}

                {/* Slider Thumb */}
                <SliderThumb
                  boxSize={3}
                  bg="navy"
                  _focus={{ boxShadow: "none" }}
                  top="50%" // Align thumb to the center of the track
                  // transform="translate(-50%,-50%)"
                />
              </Slider>
            </FormControl>

            {/* Flip and Mirror Toggles */}
            <SimpleGrid columns={2} spacing={4} mt={4}>
              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Flip</FormLabel>
                <Switch colorScheme="green" defaultChecked />
              </FormControl>

              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Mirror</FormLabel>
                <Switch colorScheme="gray" />
              </FormControl>
            </SimpleGrid>
          </SimpleGrid>
        </Collapse>

        {/* ISP Setting */}
        <SectionHeader
          title="ISP"
          isOpen={activeSection === "isp"}
          onToggle={() => toggleSection("isp")}
        />
        <Collapse in={activeSection === "isp"} animateOpacity>
        
          <Text mt={4}>ISP settings content goes here...</Text>
        </Collapse>

        {/* Privacy Mask Setting */}
        <SectionHeader
          title="Privacy Mask"
          isOpen={activeSection === "privacyMask"}
          onToggle={() => toggleSection("privacyMask")}
        />
        <Collapse in={activeSection === "privacyMask"} animateOpacity>
          <Text mt={4}>Privacy mask content goes here...</Text>
        </Collapse>

        {/* OSD Setting */}
        <SectionHeader
          title="OSD"
          isOpen={activeSection === "osd"}
          onToggle={() => toggleSection("osd")}
        />
        <Collapse in={activeSection === "osd"} animateOpacity>
          <Text mt={4}>OSD settings content goes here...</Text>
        </Collapse>
      </Box>
    </TabPanel>
  );
};

export default MediaSettings;
