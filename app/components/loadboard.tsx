"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Project } from "../types";
import ProjectCard from "./card";
import Navbar from "./navbar";

const LoadBoard = () => {
  const [projects, setProjects] = useState<Project[]>([]); 

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}/api/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  

  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-row flex-wrap lg:grid-cols-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            date={
              project.nextMilestone
                ? new Date(project.nextMilestone).toLocaleDateString()
                : "N/A"
            }
            projectId={project._id}
            onProjectDeleted={fetchProjects}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadBoard;
