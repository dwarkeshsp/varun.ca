import React from 'react';
import { Stack, Text, Box, Link, Icon, SimpleLink } from '@ds';

export const PodcastFeatured = ({ podcast, ...props }) => (
  <Stack {...props}>
    <Stack.Title to="/podcast">Podcast</Stack.Title>

    {podcast.map((talk) => (
      <Stack.Item key={talk.id} justifyContent="space-between" to={talk.video}>
        <Box measure="wide" mr={3} flex="1 1 auto" truncate>
          {talk.title}
        </Box>
        {talk.video && (
          <SimpleLink
            display="block"
            ml={0}
            mb={0}
            p={2}
            lineHeight="solid"
            fontSize={1}
            title="video"
            color="neutral.2"
            to={talk.video}
          >
            <Icon type="video" />
          </SimpleLink>
        )}
        {talk.audio && (
          <SimpleLink
            display="block"
            ml={0}
            mb={0}
            p={2}
            lineHeight="solid"
            fontSize={1}
            title="audio"
            color="neutral.2"
            to={talk.audio}
          >
            <Icon type="audio" />
          </SimpleLink>
        )}
        {/* <Text
          as="span"
          mb={0}
          style={{ whiteSpace: 'nowrap' }}
          lineHeight="solid"
          color="neutral.2"
          fontSize={0}
        >
          {talk.conference}
        </Text> */}
      </Stack.Item>
    ))}
    <Stack.MoreLink to="/podcast">View all episodes</Stack.MoreLink>
  </Stack>
);
