import React from 'react';
import { graphql } from 'gatsby';
import { PageHeader } from '@ds';
import PageLayout from '@layouts/page-layout';
import { TalkList } from '@components/talk-list';

const Podcast = ({
  data: {
    podcast: { talks },
  },
}) => (
  <PageLayout title="Podcast" pathname="/podcast" maxWidth={7} px={3}>
    <PageHeader title="Podcast" />

    <main>
      <TalkList talks={talks} />
    </main>
  </PageLayout>
);

export const pageQuery = graphql`
  query Podcast {
    podcast: allPodcastJson {
      talks: nodes {
        id
        link
        title
        conference
        featured
        slides
      }
    }
  }
`;

export default Podcast;
