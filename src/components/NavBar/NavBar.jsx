import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Text,
  HStack,
  Button,
  Icon,
} from '@chakra-ui/react';
import { Globe } from 'react-feather';

function NavBar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('EN');
  return (
    <Box>
      <Flex
        justify="space-between"
        align="center"
        mx={16}
        mt={3}
        fontSize="md"
        fontWeight="medium"
      >
          <Link to="/">
        <Box fontSize="2xl">LOGO</Box>
           </Link>
        <HStack spacing={50} color="gray.400" _hover={{ cursor: 'pointer' }}>
          <Link to="/">
            <Text _hover={{ color: 'green.400' }}>{t('navbar.home')}</Text>
          </Link>
          <Link to="/items">
            <Text _hover={{ color: 'green.400' }}>{t('navbar.items')}</Text>
          </Link>
          <Link to="/about">
            <Text _hover={{ color: 'green.400' }}>{t('navbar.about')}</Text>
          </Link>
          <Link to="/contactus">
            <Text _hover={{ color: 'green.400' }}>
              {' '}
              {t('navbar.contactUs')}
            </Text>
          </Link>
        </HStack>

        <Flex>
          <Menu>
            <MenuButton
              p={2}
              transition="all 0.2s"
              borderRadius="md"
              _hover={{ bg: 'gray.100', color: 'green.400' }}
              _expanded={{ bg: 'gray.100' }}
            >
              <Box color="gray.400">
                <Icon as={Globe} mr={0.5} /> {lang}
              </Box>
            </MenuButton>
            <MenuList minW="max-content">
              <MenuItem
                onClick={() => {
                  i18n.changeLanguage('en');
                  document.body.dir = i18n.dir();
                  setLang('EN');
                }}
              >
                <Box color="gray.400" _hover={{ color: 'green.400' }}>
                  EN
                </Box>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  i18n.changeLanguage('fr');
                  document.body.dir = i18n.dir();
                  setLang('FR');
                }}
              >
                <Box color="gray.400" _hover={{ color: 'green.400' }}>
                  FR
                </Box>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  i18n.changeLanguage('ar');
                  document.body.dir = i18n.dir();
                  setLang('ع');
                }}
              >
                <Box color="gray.400" _hover={{ color: 'green.400' }}>
                  ع
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
          <Link to="/auth/signin">
            <Button
              variant="outline"
              _hover={{ bg: 'green.400', color: 'white' }}
              _focus={{ boxShadow: 'none' }}
              colorScheme="black"
              ml={2}
            >
              {t('navbar.getStarted')}
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
