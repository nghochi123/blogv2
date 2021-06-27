import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

const Footer = props => {
  const { theme } = props;

  return (
    <React.Fragment>
      <footer className="footer">
        <a href="https://www.github.com/baobabKoodaa/blog/">This blog is open source.</a>
      </footer>

      {/* --- STYLES --- */}
      <style jsx>{`
        .footer {
          background: ${theme.color.neutral.white};
          padding: ${theme.space.inset.default};
          text-align: center;
          color: ${theme.color.neutral.gray.g};
          font-size: ${theme.font.size.xxs};
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 60px;
        }
      `}</style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Footer;

const query = graphql`
  query Info {
    site {
      buildTime(formatString: "DD.MM.YYYY HH:mm")
    }
  }
`;
