import { Badge, Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { AlertCircle, ArrowLeft, Edit, MapPin } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { convertTimestamp } from '../../helpers/convertTimestamp';
import { useLocation } from '../../hooks/useLocation';
import DeleteModal from '../DeleteModal/DeleteModal';
import RequestModal from '../RequestModal';

const ItemDetails = ({
  isOwner,
  handleDelete,
  setValue,
  handleChange,
  handleRequest,
  category,
  title,
  createdAt,
  description,
  location,
}) => {
  const history = useHistory();
  const { t } = useTranslation();

  const { cityName, isLoading } = useLocation(location);

  console.log('item details city name', cityName);

  return (
    <Flex d="column" maxW="400px" fontSize={18}>
      <Flex justify="space-between">
        <Button
          onClick={() => history.push('/items')}
          leftIcon={<ArrowLeft size={15} />}
          variant="ghost"
        >
          {t('itemPage.back')}
        </Button>

        {isOwner && (
          <Button color="gray" leftIcon={<Edit size={15} />} variant="ghost">
            {t('itemPage.edit')}
          </Button>
        )}
      </Flex>

      <Badge my="20px" bg="gray.100" fontSize="md" py="1" px="5">
        {category}
      </Badge>

      <Box color="black" fontWeight="bold" letterSpacing="wide" fontSize="3xl">
        {title}
      </Box>
      <Flex justify="space-between">
        <Box my="5px">
          <HStack color="gray.500">
            <MapPin />
            <Box fontSize="md" color="gray.500">
              {isLoading && 'fetching address...'}
              {cityName || 'no address has been supplied yet'}
            </Box>
          </HStack>
        </Box>
        <Box>
          <Text
            fonts="Montserrat"
            color="gray.400"
            fontSize="xs"
            my="10px"
            textTransform="uppercase"
          >
            {convertTimestamp(createdAt)}
          </Text>
        </Box>
      </Flex>
      <Box mb="5" py="10px" minH="100px">
        <Text fontSize="lg">{description}</Text>
      </Box>
      {isOwner || (
        <RequestModal
          setValue={setValue}
          handleChange={handleChange}
          handleRequest={handleRequest}
        />
      )}

      <Flex justify="space-between" pt={50}>
        {isOwner || (
          <Button
            color="red"
            leftIcon={<AlertCircle size={15} color="red" />}
            variant="ghost"
          >
            {t('itemPage.report')}
          </Button>
        )}
        {isOwner && <DeleteModal handleDelete={handleDelete} />}
      </Flex>
    </Flex>
  );
};

export default ItemDetails;
