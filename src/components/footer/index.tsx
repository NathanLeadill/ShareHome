import React, { CSSProperties } from "react";
import Image from "next/image";
import { Flex, Center, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const languages = {
    'English': 'en',
    'Ukrainian': 'ua',
    'Polish': 'pl',
    'German': 'de',
    "French": 'fr',
  }
  return (
    <Center bg="main.100" py={10} marginTop="2rem" padding="0">
      <Flex flexDirection="column">
        <Flex mt={5}>
          {
            Object.entries(languages).map(([label, code]) => (
              <Link href="/" locale={code}>
                <Text fontSize="md" marginRight="1rem">{label}</Text>
              </Link>
            ))
          }
        </Flex>
      </Flex>
    </Center>
  );
};
