import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Header } from 'features/common/organisms/header'

function InternalPage({ children, isHeaderVisible }) {
  return (
    <Fragment>
      {isHeaderVisible && (<Header />)}
      {children}
    </Fragment>
  )
}

InternalPage.propTypes = {
  isHeaderVisible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

InternalPage.defaultProps = {
  isHeaderVisible: true,
};

export default InternalPage;
