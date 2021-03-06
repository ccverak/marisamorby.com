const isProd = process.env.NODE_ENV === 'production';

module.exports = ({ baseUrl = '', sanity = {} }) => ({
  siteMetadata: {
    title: 'Gatsby Blog Powered By Sanity',
    description: 'This is a Gatsby blog that uses Sanity.io for writing posts.',
    baseUrl, // used to create absolute URLs for SEO
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: sanity.projectId,
        dataset: sanity.dataset,
        token: sanity.token,
        watchMode: sanity.watchMode || (sanity.token && !isProd),
        overlayDrafts: sanity.overlayDrafts || !isProd,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
  ],
});
