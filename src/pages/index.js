import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@layouts/layout';
import { Box, H1, Text, Link, Flex } from '@ds';
import { Pronunciation } from '@components/pronunciation';
import { ProfileLinks } from '@components/profile-links';
import { Footer } from '@components/footer';
import { WritingFeatured } from '@components/writing-featured';
import { PodcastFeatured } from '@components/podcast-featured';
import { CycleMode } from '@components/cycle-mode';
import { Newsletter } from '@components/newsletter';

const Home = ({ data }) => {
  const {
    site,
    writingFeatured: { posts },
    podcastFeatured: { podcast },
  } = data;

  return (
    <Layout title="About" description={site.siteMetadata.description}>
      <Box maxWidth={9} mx="auto" px={[0, 0, 5]} alignItems="center">
        <Flex as="header" mt={6} mb={2} px={3}>
          <Box flex="1 1 auto">
            <H1 fontSize={3} mb={0} lineHeight="copy">
              <Pronunciation />
            </H1>

            {/* <Text mb={0} measure="wide" fontSize={2}>
              dwarkesh@dwarkeshpatel.com
            </Text> */}
          </Box>
          <CycleMode />
        </Flex>
        <ProfileLinks />

        <main>
          <Box as="section" mb={4} px={3}>
            {/* <H1 mb={1} fontSize={3}>
              About
            </H1> */}
            <Text measure="wide" fontSize={[2, 3]}>
              I’m the host of The Lunar Society Podcast (
              <Link to="https://www.youtube.com/c/DwarkeshPatel">YouTube</Link>,{' '}
              <Link to="https://anchor.fm/dwarkeshpatel">
                podcast platforms
              </Link>
              ) where I interview economists, scientists, philosophers, and
              builders about their big ideas.
            </Text>
            <Text measure="wide" fontSize={[2, 3]}>
              I graduated with a CS degree from UT Austin in December 2021.
              Thanks to the generosity of Sunil and Anil Vazarani, I'm spending
              the next few months learning about big ideas and emerging
              technologies.
            </Text>
            <Newsletter />
          </Box>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <WritingFeatured posts={posts} mr={[3, 4]} />
            <PodcastFeatured podcast={podcast} mr={3} />
          </Flex>
          <Footer px={3} />
        </main>
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
        description
      }
    }

    writingFeatured: allMdx(
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      posts: nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "Do MMMM, YYYY")
          timestamp: date
        }
        fields {
          slug
        }
      }
    }

    podcastFeatured: allPodcastJson(limit: 5) {
      podcast: nodes {
        id
        video
        audio
        title
        date(formatString: "Do MMMM, YYYY")
      }
    }
  }
`;

export default Home;
