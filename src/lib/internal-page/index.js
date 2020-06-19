import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import Header from 'features/common/organisms/header'
import { Profile } from 'features/profile'

function InternalPage({ children, isHeaderVisible }) {
  return (
    <Fragment>
      {isHeaderVisible && (<Header />)}
      <Profile />
      {children}
    </Fragment>
  )
}

InternalPage.propTypes = {
  isHeaderVisible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

InternalPage.defaultProps = {
  isHeaderVisible: false,
};

export default InternalPage;
