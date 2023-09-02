import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    //if home page
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    //if blog or other pages
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>

      <footer>
        {title} © {new Date().getFullYear()}, Built with
        {` `}
        <a target="_blank" href="https://www.gatsbyjs.com">
          Gatsby
        </a>
        <br />
        Colours inspired by{" "}
        <a
          target="_blank"
          href="https://coolors.co/?ref=64f312f209ab63000b5c96b6"
        >
          Coolers
        </a>
      </footer>
    </div>
  );
};

export default Layout;
