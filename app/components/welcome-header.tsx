"use client";

import blue from "../assets/blue.png";
import green from "../assets/green.png";
import red from "../assets/red.png";
import yellow from "../assets/yellow.png";
import { Box, Container, Stack } from "@chakra-ui/react";
import Image from "next/image";
const WelcomeHeader = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold text-3xl">Welcome Back, Haseena!</h1>
      <h3 className=" text-xl">
        You have accomplished alot today. Let us handle the rest.
      </h3>
      <Box className="w-full">
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Stack direction={"row"} spacing={12}>
            <Box as="a" href={"#"} className="flex flex-row gap-x-2">
              <Image
                alt="Completed count"
                src={green}
                className="w-[40px] h-[40px]"
              />
              <div className="flex flex-col">
                <h3 className="font-bold">30</h3>
                <p>Completed</p>
              </div>
            </Box>
            <Box as="a" href={"#"} className="flex flex-row  gap-x-2">
              <Image
                alt="Ongoing count"
                src={blue}
                className="w-[40px] h-[40px]"
              />
              <div className="flex flex-col">
                <h3 className="font-bold">02</h3>
                <p>Ongoing</p>
              </div>
            </Box>
            <Box as="a" href={"#"} className="flex flex-row  gap-x-2">
              <Image
                alt="Draft count"
                src={yellow}
                className="w-[40px] h-[40px]"
              />
              <div className="flex flex-col">
                <h3 className="font-bold">04</h3>
                <p>Drafts</p>
              </div>
            </Box>
            <Box as="a" href={"#"} className="flex flex-row  gap-x-2">
              <Image
                alt="Cancelled count"
                src={red}
                className="w-[40px] h-[40px]"
              />
              <div className="flex flex-col">
                <h3 className="font-bold">02</h3>
                <p>Cancelled</p>
              </div>
            </Box>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default WelcomeHeader;
