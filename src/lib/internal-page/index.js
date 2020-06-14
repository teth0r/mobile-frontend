import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Header } from 'features/common/organisms/header'
import { Tickets } from 'features/Tickets'

function InternalPage({ children, isHeaderVisible }) {
  return (
    <Fragment>
      {isHeaderVisible && (<Header />)}
      <Tickets />
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
