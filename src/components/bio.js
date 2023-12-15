/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEnvelope,
  faGlobeOceania,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
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
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <div className="bio">
      {/*<StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
  />*/}
      {author?.name && (
        <>
          <p>{author?.summary || null}</p>
          <p>
            Written by <strong>{author.name}</strong>
          </p>

          <div className="icons">
            <a
              target="_blank"
              title="Zac Hobba's Github"
              rel="noreferrer"
              href={`${social?.github || ``}`}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="_blank"
              title="Zac Hobba's personal website"
              rel="noreferrer"
              href={`${social?.website || ``}`}
            >
              <FontAwesomeIcon icon={faGlobeOceania} />
            </a>
            <a
              target="_blank"
              title="Zac Hobba's LinkedIn"
              rel="noreferrer"
              href={`${social?.linkedin || ``}`}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              target="_blank"
              title="Zac Hobba's Email"
              rel="noreferrer"
              href={`${social?.email || ``}`}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              target="_blank"
              title="Zac Hobba's buy me a coffee page"
              rel="noreferrer"
              href={`${social?.coffee || ``}`}
            >
              <FontAwesomeIcon icon={faCoffee} />
            </a>
          </div>
          <hr />

          <p>
            <strong>Affiliate Links</strong>
          </p>
          <a
            href="https://www.tkqlhce.com/click-100990459-15053968"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.lduhtrp.net/image-100990459-15053968"
              width="728"
              height="90"
              alt="Best secure VPN service"
              border="0"
            />
          </a>

          <a
            href="https://www.tkqlhce.com/click-100990459-14326263"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.lduhtrp.net/image-100990459-14326263"
              width="728"
              height="90"
              alt="Popular Domains for just 99 Cents at Namecheap!"
              border="0"
            />
          </a>
        </>
      )}
    </div>
  );
};

export default Bio;
