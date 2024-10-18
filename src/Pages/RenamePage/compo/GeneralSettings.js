import React from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Switch,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Ellipse from "../Ellipse 33.svg";
import Group from "../Group 1000006028 (1).svg";
import OpComponent from "../Op component 2.svg";
import CopyImage from "../copy.svg";
import Frame from "../Frame.svg";

// Status Panel Component
const StatusPanel = () => (
  <Flex align="center" justify={{ base: "center", md: "end" }} gap={4} p={2}>
    <img src={Ellipse} alt="Connection Status" />
    <Text fontSize="md" color="gray.600">Disconnected</Text>
    <img src={Group} alt="Wi-Fi Off Icon" />
  </Flex>
);

// Camera Information Component
const CameraInfo = () => {
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={flexDirection}
      gap={10}
      mb={4}
      width="100%"
    >
      <FormControl display="flex" flexDirection="column" alignItems="center">
        <FormLabel display="flex" alignItems="center" fontWeight="bold">
          Camera name
          <img src={OpComponent} style={{ marginLeft: "8px" }} alt="Icon" height={19} width={19} />
        </FormLabel>
        <Text>Basement Gate No. 11</Text>
      </FormControl>

      <FormControl display="flex" flexDirection="column" alignItems="center">
        <FormLabel fontWeight="bold">Camera model</FormLabel>
        <Text>S-Series</Text>
      </FormControl>

      <FormControl display="flex" flexDirection="column" alignItems="center">
        <FormLabel display="flex" alignItems="center" fontWeight="bold">
          Serial Number
          <img src={CopyImage} style={{ marginLeft: "8px" }} alt="Icon" height={19} width={19} />
        </FormLabel>
        <Text>DDDJ-55555-55554</Text>
      </FormControl>

      <FormControl display="flex" flexDirection="column" alignItems="center">
        <FormLabel fontWeight="bold">Firmware</FormLabel>
        <Text>V12.98630</Text>
      </FormControl>
    </Flex>
  );
};

// Settings Form Component
const SettingsForm = () => (
  <Box>
    <FormControl mb={4} mt={4}>
      <FormLabel>Screen and Sound</FormLabel>
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <Select
          defaultValue="uninterrupted"
          height="40px"
          width="88%"
          border="1px solid black"
          borderRadius="8px"
          _focus={{ borderColor: "black", boxShadow: "none" }}
          _hover={{ borderColor: "black" }}
        >
          <option value="uninterrupted">Uninterrupted recording</option>
          <option value="sound only">Sound only</option>
        </Select>
        <img src={Frame} height="29px" width="29px" style={{ marginLeft: "8px" }} alt="Icon" />
      </Box>
    </FormControl>

    <FormControl mb={4}>
      <FormLabel>Storage Setting</FormLabel>
      <Select
        defaultValue="cloud"
        border="1px solid black"
        height="40px"
        width="88%"
        borderRadius="8px"
        _focus={{ borderColor: "black", boxShadow: "none" }}
        _hover={{ borderColor: "black" }}
      >
        <option value="cloud">Auto save to cloud</option>
        <option value="local">Save to local storage</option>
      </Select>
    </FormControl>
  </Box>
);

// Switch Settings Component
const SwitchSettings = () => (
  <Box ml={{ base: 0, md: "auto" }} width="100%" maxWidth={{ base: "100%", md: "200px" }}>
    <FormControl display="flex" alignItems="center" justifyContent="space-between" mb={8} mt={6}>
      <FormLabel mb="0">AI Notifications</FormLabel>
      <Switch
        id="ai-notifications"
        sx={{ "& .chakra-switch__track[data-checked]": { backgroundColor: "#8acfa2" } }}
      />
    </FormControl>

    <FormControl display="flex" alignItems="center" justifyContent="space-between" mb={8}>
      <FormLabel mb="0">Push Notifications</FormLabel>
      <Switch
        id="push-notifications"
        defaultChecked
        sx={{ "& .chakra-switch__track[data-checked]": { backgroundColor: "#8acfa2" } }}
      />
    </FormControl>

    <FormControl display="flex" alignItems="center" justifyContent="space-between" mb={8}>
      <FormLabel mb="0">PTZ Control</FormLabel>
      <Switch
        id="ptz-control"
        sx={{ "& .chakra-switch__track[data-checked]": { backgroundColor: "#8acfa2" } }}
      />
    </FormControl>
  </Box>
);

// General Settings Component
const GeneralSettings = () => {
  const gridColumns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Box p={{ base: 1, md: 2 }}>
      {/* Status Panel */}
      <StatusPanel />

      {/* Camera Information */}
      <CameraInfo />

      <SimpleGrid columns={gridColumns} spacing={6}>
        {/* Settings Form */}
        <SettingsForm />

        {/* Switch Settings */}
        <SwitchSettings />
      </SimpleGrid>
    </Box>
  );
};

export default GeneralSettings;
