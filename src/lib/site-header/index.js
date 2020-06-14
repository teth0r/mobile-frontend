import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function SiteHeader({
  title,
  children: helmet,
}) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        {helmet}
      </Helmet>
    </>
  );
}

SiteHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

SiteHeader.defaultProps = {
  children: null,
};

export { SiteHeader };
