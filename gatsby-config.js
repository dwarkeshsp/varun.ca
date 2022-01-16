const path = require('path');
const mdxFeed = require('gatsby-plugin-mdx/feed');

module.exports = {
  siteMetadata: {
    title: `Dwarkesh Patel`,
    siteUrl: `https://dwarkeshpatel.com`,
    description: `TODO`,
    author: `Dwarkesh Patel`,
    keywords: [],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content/posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content/assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dwarkeshpatel.com`,
        short_name: `starter`,
        start_url: `/`,
        background_color: '#4e4bec',
        theme_color: '#4e4bec',
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
        fileName: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //TODO
        trackingId: `UA-207687688-1`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://dwarkeshpatel.com`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/layouts/post-layout.js'),
        },
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1152,
              linkImagesToOriginal: false,
              tracedSVG: true,
            },
          },
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-code-titles',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1152,
              linkImagesToOriginal: false,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `heading-anchor`,
              icon: `<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentcolor" strokeWidth="2"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>`,
            },
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
    `gatsby-plugin-netlify`,
  ],
};
