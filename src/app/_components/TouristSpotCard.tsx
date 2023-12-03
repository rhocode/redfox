"use client";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import CircleIcon from "./CircleIcon";
import TipTap from "./TipTap";

export default function TouristSpotCard() {
  const [editing, setEditing] = useState(false);

  const editButtonOnClick = () => {
    setEditing((editing) => !editing);
    console.log(`Edit button clicked, editing is now ${editing}`);
  };

  return (
    <Card>
      <CardHeader>
        <Heading size="md">
          <CircleIcon boxSize={5} />
          KYOTO
        </Heading>
      </CardHeader>
      <CardBody py={0}>
        <div>{editing ? <TipTap /> : <p>Statue of Liberty</p>}</div>
      </CardBody>
      <CardFooter justify="right" flexWrap="wrap">
        <ButtonGroup spacing="2" size="sm" variant="ghost" colorScheme="cyan">
          <Button onClick={editButtonOnClick}>Edit</Button>
          <Button>Map</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
