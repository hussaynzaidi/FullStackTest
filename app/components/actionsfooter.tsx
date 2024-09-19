"use client";

import {
  Box,
  Container,
  Stack
} from "@chakra-ui/react";
import { CalculatorIcon, FileTextIcon } from "lucide-react";
export default function ActionsFooter() {
  return (
    <Box className="w-full fixed bottom-0 font-bold bg-white">
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
            <FileTextIcon color="black" />
            Explore Documentation
          </Box>
          <Box as="a" href={"#"} className="flex flex-row  gap-x-2">
            <CalculatorIcon />
            Cost Calculator
          </Box>
          <Box as="a" href={"#"} className="flex flex-row  gap-x-2">
            <CalculatorIcon />
            Billing Calculator
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
