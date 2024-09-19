"use client";

import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import axios from 'axios';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectCreated: () => void;
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ isOpen, onClose, onProjectCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('ongoing');
  const [nextMilestone, setNextMilestone] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post(`${process.env.BACKEND_URL}/api/projects`, { title, description, status, nextMilestone });
      onProjectCreated();
      onClose();
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={3}>
            <FormLabel>Title</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Description</FormLabel>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Status</FormLabel>
            <Input value={status} onChange={(e) => setStatus(e.target.value)} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Next Milestone</FormLabel>
            <Input value={nextMilestone} onChange={(e) => setNextMilestone(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Create
          </Button>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateProjectModal;
