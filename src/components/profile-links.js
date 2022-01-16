import React from 'react';
import { Box, SimpleLink, SrOnly } from '@ds';

const profileLinks = [
  // { title: 'Subscribe', to: 'https://tinyletter.com/dwarkesh' },
  { title: 'Twitter', to: 'http://twitter.com/dwarkesh_sp' },
  { title: 'RSS', to: 'https://dwarkeshpatel.com/rss.xml' },
  // { title: 'Github', to: 'http://github.com/winkerVSbecks' },
  // { title: 'CodePen', to: 'http://codepen.io/winkerVSbecks' },
  // { title: 'Dribbble', to: 'http://dribbble.com/winkerVSbecks' },
  // { title: 'Email', to: 'mailto:varunvachhar@gmail.com' },
];

export const ProfileLinks = () => (
  <Box as="nav" mb={4}>
    <SrOnly as="h2">profile links</SrOnly>
    {profileLinks.map((link) => (
      <SimpleLink
        key={link.to}
        to={link.to}
        rel="me"
        fontWeight={5}
        px={3}
        py={[2, 3]}
        mb={0}
        mr={1}
        display={'inline-block'}
      >
        {link.title}
      </SimpleLink>
    ))}
  </Box>
);
