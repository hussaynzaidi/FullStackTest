"use client";

import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { PlusCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import CreateProjectModal from "./project-modal";
import axios from "axios";
import { Project } from "../types";

interface Props {
  children: React.ReactNode;
}

const Links = ["Ongoing", "Completed", "Cancelled", "Drafts"];

const NavLink = (props: Props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      _hover={{
        textDecoration: "none",
        borderBottomColor: "blue",
      }}
      className="border-b-gray border-b-2"
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function WithAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]); // Use the Project type

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}/api/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleProjectCreated = () => {
    fetchProjects(); 
  };
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack as={"nav"} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              className="rounded-md h-10 bg-mudirrbutton"
              variant={"solid"}
              colorScheme={"blue"}
              size={"sm"}
              mr={4}
              onClick={() => setIsModalOpen(true)}
              leftIcon={<PlusCircle />}
            >
              Create a Project
            </Button>
            <CreateProjectModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onProjectCreated={handleProjectCreated}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
