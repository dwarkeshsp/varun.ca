import React from 'react';
import { Box, Flex, Text, SimpleLink } from '@ds';
import { CycleMode } from './cycle-mode';

export const GlobalHeader = () => (
  <Flex as="nav" mx="auto" my={5} alignItems={['flex-start', 'center']}>
    <Box display={['block', 'flex']} alignItems="center">
      <SimpleLink
        to="/"
        style={{ textTransform: 'uppercase' }}
        mb={0}
        mr={2}
        color="neutral.1"
        letterSpacing="tracked"
        fontSize={2}
        fontWeight={7}
        lineHeight="solid"
      >
        Dwarkesh Patel
      </SimpleLink>
      <SimpleLink
        to="https://tinyletter.com/dwarkesh"
        color="neutral.2"
        fontSize={2}
        lineHeight="solid"
        mt={[1, 0]}
        mb={0}
      >
        Subscribe{' '}
      </SimpleLink>
    </Box>
    <Box flex={1} />
    <CycleMode />
  </Flex>
);
