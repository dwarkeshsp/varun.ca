import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, Flex, H1, Text, Link, SimpleLink } from '@ds';
import { Footer } from '@components/footer';
import { Date } from '@components/date';
import { GlobalHeader } from '@components/global-header';
import { RelatedPosts } from '@components/related-posts';
import { Newsletter } from '@components/newsletter';
import Layout from './layout';
import Comments from '@components/comments';

export default function PostLayout({ data: { mdx }, pageContext }) {
  const maxWidth = mdx.frontmatter.maxWidth ? mdx.frontmatter.maxWidth : 7;

  return (
    <Layout
      title={mdx.frontmatter.title}
      description={mdx.excerpt}
      pathname={mdx.fields.slug}
      image={mdx.frontmatter.image ? mdx.frontmatter.image.url : null}
      meta={[
        {
          name: `author`,
          content: 'Dwarkesh Patel',
        },
      ]}
    >
      <Box maxWidth={maxWidth} mx="auto" px={[3, 4, 3]}>
        <GlobalHeader />
        <Box as="article" my={4}>
          {/* <Newsletter /> */}

          <Flex>
            <SimpleLink
              color="neutral.2"
              fontSize={1}
              letterSpacing="tracked"
              fontWeight={6}
              display="flex"
              alignItems="center"
              to="/writing"
              mb={3}
            >
              ← writing
            </SimpleLink>
          </Flex>
          <Box as="header" mb={4}>
            <Date
              timestamp={mdx.frontmatter.timestamp}
              date={mdx.frontmatter.date}
            />
            <H1 mt={1} mb={5}>
              {mdx.frontmatter.title}
            </H1>
          </Box>

          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Box>
        {/* <Text mb={5} fontSize={2}>
          Questions, Comments or Suggestions?{' '}
          <Link
            href={`https://github.com/winkerVSbecks/varun.ca/issues/new?title=${mdx.frontmatter.title}`}
          >
            Open an Issue
          </Link>
        </Text> */}
        <Newsletter post={true} />
        {/* <RelatedPosts posts={pageContext.relatedPosts} /> */}
        <Comments />

        {/* <Footer /> */}
      </Box>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        date(formatString: "Do MMMM, YYYY")
        timestamp: date
        image {
          url: publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`;
