import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";

export default function ScheduleAccordion() {
  return (
    <Flex>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Flex direction="column">
              {/* TODO: Date should be here */}
              <Heading as="h2" size="md">
                Friday, February 9th
              </Heading>
              <Box
                as="span"
                color="gray.500"
                fontSize="xs"
                fontWeight={700}
                textAlign={"left"}
              >
                No places
              </Box>
            </Flex>
          </AccordionButton>
          <AccordionPanel pb={4}>
            {/* TODO: Add the components */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Spacer />
    </Flex>
  );
}