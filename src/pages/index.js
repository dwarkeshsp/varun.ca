import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@layouts/layout';
import { Box, H1, Text, Link, Flex } from '@ds';
import SEO from '@components/seo';
import { Pronunciation } from '@components/pronunciation';
import { ProfileLinks } from '@components/profile-links';
import { Footer } from '@components/footer';
import { WritingFeatured } from '@components/writing-featured';
import { TalksFeatured } from '@components/talks-featured';

const Home = ({ data }) => {
  const {
    site,
    writingFeatured: { posts },
    talksFeatured: { talks },
  } = data;

  return (
    <Layout>
      <SEO title="Varun Vachhar" keywords={site.siteMetadata.keywords} />

      <Box maxWidth={9} mx="auto" px={[0, 0, 5]}>
        <Box as="header" mt={6} mb={5} px={3}>
          <H1 fontSize={3} mb={0} lineHeight="copy">
            <Pronunciation />
          </H1>
          <Text mt={0} measure="wide" fontSize={2}>
            finder of new ways to confuse myself
          </Text>
        </Box>

        <main>
          <Box as="section" mb={4} px={3}>
            <H1 mb={1} fontSize={3}>
              About
            </H1>
            <Text measure="wide" fontSize={2}>
              I am a developer with a strong focus on design, interactivity and
              animation. Originally from New Delhi, I currently live in Toronto
              and am the Director, UI Architecture at{' '}
              <Link to="https://rangle.io">Rangle.io</Link>. In my spare time, I
              like to experiment with creative coding, making{' '}
              <Link to="http://triangle.life">triangles</Link> and other playful
              experiences for the web.
            </Text>
          </Box>

          <ProfileLinks />

          <Flex flexWrap="wrap">
            <WritingFeatured posts={posts} mr={[3, 3, 5]} />
            <TalksFeatured talks={talks} />
          </Flex>
        </main>
        <Footer px={3} />
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
        writingDesc
        keywords
      }
    }

    writingFeatured: allMdx(
      limit: 4
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

    talksFeatured: allTalksJson(limit: 4, filter: { featured: { eq: true } }) {
      talks: nodes {
        id
        link
        title
        conference
        featured
      }
    }
  }
`;

export default Home;
