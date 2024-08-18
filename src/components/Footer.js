import React from "react";

/**
 * A functional component that renders the application's footer.
 *
 * @return {JSX.Element} The JSX element representing the footer.
 */
const Footer = () => {
  return (
    <footer>
      <p>Copyright {new Date().getFullYear()} Argent Bank</p>
    </footer>
  );
};

export default Footer;