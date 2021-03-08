import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { MapPin } from 'react-feather';
import { Link } from 'react-router-dom';
import { convertTimestamp } from '../../helpers/convertTimestamp';
import { useLocation } from '../../hooks/useLocation';

const Card = ({ title, id, createdAt, image_url, location }) => {
  const { cityName, isLoading } = useLocation(location);

  return (
    <Link to={`/item/${id}`}>
      <Box bg="white" maxW="2xs" borderRadius="lg" boxShadow="md">
        <Box p="4">
          <Image
            objectFit="cover"
            width="250px"
            height="100px"
            borderRadius="lg"
            boxShadow="lg"
            src={image_url}
            alt="item image"
          />
        </Box>
        <Box px="4" pb="4">
          <Flex mb="4" align="center" justify="space-between">
            <VStack alignItems="flex-start">
              <Text
                fonts="Montserrat"
                fontSize="lg"
                fontWeight="semibold"
                as="h3"
              >
                {title}
              </Text>
              <Text
                fonts="Montserrat"
                color="gray.400"
                fontSize="xs"
                textTransform="uppercase"
              >
                {convertTimestamp(createdAt)}
              </Text>
            </VStack>
          </Flex>
          <Flex align="center" justify="space-between">
            <HStack color="gray.500">
              <MapPin />
              <Box fontSize="sm">
                {isLoading && 'loading location..'}
                {cityName ? cityName : 'no location..'}
              </Box>
            </HStack>
            <Box fonts="Montserrat" color="blue.500" fontSize="sm"></Box>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
