import { Box, Button, Flex, Icon } from "@chakra-ui/react";

// This is just a placeholder
const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

export default async function ItemButton() {
  return (
    <Flex>
      <Box
        position="relative"
        display="inline-flex"
        alignItems="center"
        padding="10px 24px"
        w="100%"
      >
        <Button
          aria-label="item button"
          colorScheme="gray"
          size="md"
          w="100%"
          textAlign="left"
          borderRadius="8px"
          justifyContent="flex-start"
          fontWeight="normal"
        >
          Button
        </Button>
        <Box
          position="absolute"
          left="10px"
          top="50%"
          transform="translateY(-50%)"
        >
          <CircleIcon boxSize={7} />
        </Box>
      </Box>
    </Flex>
  );
}
