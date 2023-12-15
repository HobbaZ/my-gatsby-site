/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            social {
              linkedin
              github
              website
              coffee
              email
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const keywords = site.siteMetadata?.keywords;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>

      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="" content="summary" />
      <meta name="keywords" content={keywords} />
      <meta name="" content={title} />
      <meta name="" content={metaDescription} />
      {children}
    </>
  );
};

export default Seo;
