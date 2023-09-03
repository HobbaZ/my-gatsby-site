/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Blogsparks`,
    author: {
      name: `Zac Hobba`,
      summary: `A blog about buying expired domains and what to do with them.`,
    },
    description: `A blog about buying expired domains, and what to do with them.`,
    keywords: `blog, personal blog, my blog, expired, domain, web address, domain name, domain expires`,
    siteUrl: `https://www.blogsparks.com`,
    social: {
      linkedin: "https://www.linkedin.com/in/zachary-hobba/",
      github: "https://github.com/HobbaZ",
      website: "https://www.zachobba.com.au/",
      coffee: "https://www.buymeacoffee.com/zachobbas",
      email: "mailto:zachobba@gmail.com",
    },
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `blogsparks`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                keywords
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: ASC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Blogsparks",
          },
        ],
      },
    },
  ],
};
