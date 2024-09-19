"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { EllipsisVertical, SendHorizonal } from "lucide-react";
import { ProgressStepperBasic } from "./stepper";
import axios from 'axios';

interface ProjectCardProps {
  title: String,
  date: String,
  projectId: String,
  onProjectDeleted: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  projectId,
  onProjectDeleted
}) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.BACKEND_URL}/api/projects/${projectId}`);
      onProjectDeleted();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <Box
      width='364px'
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      marginRight={8}
      marginBottom={4}
      p={4}
    >
      {/* Project Title and Menu */}
      <Flex justify="space-between" align="center" mb={2}>
        <Text fontWeight="bold" fontSize="lg">
          {title}
        </Text>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<EllipsisVertical />}
            variant="ghost"
            size="sm"
            aria-label="Options"
          />
          <MenuList>
            <MenuItem>Action 1</MenuItem>
            <MenuItem>Action 2</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {/* Project Type */}
      <Text fontSize="sm" color="gray.500" mb={2}>
        Web
      </Text>

      <Flex align="center" className="justify-between " mb={3}>
        <ProgressStepperBasic />
        <Text fontSize="sm" color="gray.500" className="">
          3/4 Done
        </Text>
      </Flex>

      <Flex mb={3} gap={2} direction={"column"} className="items-start ">
        <Badge
          className="bg-mudirralt p-1.5 text-mudirrbutton"
          borderRadius="md"
        >
          Ongoing
        </Badge>
        <Badge
          className="bg-mudirralt p-1.5 text-mudirrbutton"
          borderRadius="md"
        >
          Next milestone: {date}
        </Badge>
      </Flex>

      {/* Follow Up */}
      <Flex justify="space-between" align="center">
        <Text fontWeight="semibold">Follow up with manager</Text>
        <Button size="sm" colorScheme="blue" variant="solid">
          <SendHorizonal />
        </Button>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
