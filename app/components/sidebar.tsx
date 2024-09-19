"use client";

import logo from "../assets/mudirr_logo.png";
import pfp from "..//assets/pfp.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  BadgeAlert,
  BadgeCheck,
  BadgeDollarSign,
  ChevronUpIcon,
  Star,
} from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="flex flex-col p-5 bg-mudirr w-[394px] h-full">
      <div>
        <div className="mb-3 justify-start">
          <Image alt="Logo" src={logo} className="w-[150px]" />
        </div>
        <div className="flex flex-row items-center w-full justify-between">
          <Image alt="pfp" src={pfp} className="rounded-lg w-[50px] h-[50px]" />
          <div className="pl-2">
            <h2 className="font-semibold">Haseena Jameela</h2>
            <h3>haseenajameela@email...</h3>
          </div>
          <ChevronDownIcon />
        </div>
      </div>
      <div className="py-6">
        <ButtonGroup
          spacing={2}
          className="bg-white p-1  rounded-lg w-full justify-evenly"
        >
          <Button
            variant="solid"
            className="bg-mudirr w-full text-blue-900"
            size="md"
          >
            Personal
          </Button>
          <Button
            variant="ghost"
            className="w-full"
            colorScheme="blackAlpha"
            size="md"
          >
            Invited
          </Button>
        </ButtonGroup>
      </div>
      <nav>
        <div className="bg-mudirralt rounded-md">
          <ul className="p-1.5">
            <li className="flex rounded-md flex-row bg-white gap-x-3 h-8 items-center justify-start w-full px-3 font-semibold">
              <Star fill="black" size={18} />
              Dashboard
            </li>
            <li className="flex rounded-md flex-row  gap-x-3 h-8 items-center justify-start w-full px-3 font-semibold">
              <Star size={18} />
              Project History
            </li>
            <li className="flex rounded-md flex-row gap-x-3 h-8 items-center justify-start w-full px-3 font-semibold">
              <Star size={18} />
              Client History
            </li>
            <li className="flex rounded-md flex-row gap-x-3 h-8 items-center justify-start w-full px-3 font-semibold">
              <Star size={18} />
              Emails
            </li>
          </ul>
          <hr className="border-gray-300 h-1 rounded mx-3" />
          <div className="flex flex-row gap-x-3 p-2 items-center w-full justify-baseline">
            <ChevronUpIcon size={"16"} />
            <h3 className="text-sm font-semibold ">WORKSPACES</h3>
            <h2 className="text-sm font-semibold bg-gray-300 rounded-full px-1 ml-5">
              Coming Soon
            </h2>
          </div>
          <ul>
            <li className="flex rounded-md flex-row gap-x-3 ml-12 h-8 items-center justify-between mr-4">
              Work Space Name 1
              <ChevronDownIcon />
            </li>
            <li className="flex rounded-md flex-row gap-x-3 ml-12 h-8 items-center justify-between mr-4">
              Work Space Name 2
              <ChevronDownIcon />
            </li>
            <li className="flex rounded-md flex-row gap-x-3 ml-12 h-8 items-center justify-between mr-4">
              Work Space Name 3
              <ChevronDownIcon />
            </li>
          </ul>
          <h3 className="m-3 font-semibold text-blue-700 text-center">
            See All
          </h3>
          <hr className="border-gray-300 h-1 rounded mx-3" />
          <div className="flex flex-row gap-x-3 p-2 items-center w-full justify-baseline">
            <ChevronUpIcon size={"16"} />
            <h3 className="text-sm font-semibold ">LAUNCHPAD</h3>
          </div>
          <ul>
            <li className="flex rounded-md flex-row gap-x-2 ml-5 h-8 items-center justify-between mr-4">
              <div className="flex flex-row gap-x-2">
                <BadgeDollarSign />
                Business Name 1
              </div>
              <ChevronDownIcon />
            </li>
            <li className="flex rounded-md flex-row gap-x-2 ml-5 h-8 items-center justify-between mr-4">
              <div className="flex flex-row gap-x-2">
                <BadgeAlert />
                Business Name 2
              </div>
              <ChevronDownIcon />
            </li>
            <li className="flex rounded-md flex-row gap-x-2 ml-5 h-8 items-center justify-between mr-4">
              <div className="flex flex-row gap-x-2">
                <BadgeCheck />
                Business Name 3
              </div>
              <ChevronDownIcon />
            </li>
          </ul>
          <h3 className="m-3 font-semibold text-blue-700 text-center">
            See All
          </h3>
          <hr className=" h-1 rounded mx-3" />
        </div>
        <div className="flex flex-row gap-x-3 p-2 mt-2 items-center w-full justify-baseline">
          <ChevronUpIcon size={"16"} />
          <h3 className="text-sm font-semibold ">PINNED PROJECTS (3/3) </h3>
        </div>
        <ul>
          <li className="flex rounded-md flex-row gap-x-2 ml-5 h-8 items-center justify-between mr-4">
            <div className="flex flex-row items-center gap-x-2">
              <Star size={19} />
              Project Name 1
            </div>
            <ChevronDownIcon />
          </li>
          <li className="flex rounded-md flex-row gap-x-2 ml-5 h-8 items-center justify-between mr-4">
            <div className="flex flex-row items-center gap-x-2">
              <Star size={19} />
              Project Name 2
            </div>
            <ChevronDownIcon />
          </li>
          <li className="flex rounded-md flex-row gap-x-2 ml-5 h-8 items-center justify-between mr-4">
            <div className="flex flex-row items-center gap-x-2">
              <Star size={19} />
              Project Name 3
            </div>
            <ChevronDownIcon />
          </li>
        </ul>
        <h3 className="m-3 font-semibold text-blue-700 text-center">See All</h3>
        <hr className=" h-1 rounded mx-3" />
        <ul className="my-5">
          <li className="flex rounded-md flex-row gap-x-2 ml-5 items-center justify-between mr-4">
            <div className="flex flex-row items-center gap-x-2">
              <Star size={19} />
              Account Settings
            </div>
            <ChevronDownIcon />
          </li>
          <li className="flex rounded-md flex-row gap-x-2 ml-5 h-8 items-center justify-between mr-4">
            <div className="flex flex-row items-center gap-x-2">
              <Star size={19} />
              Log Out
            </div>
            <ChevronDownIcon />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
