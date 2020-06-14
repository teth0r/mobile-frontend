import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function UserFeature({ feature, children }) {
  const userFeatures = useSelector(state =>
    state.auth.user ? state.auth.user.features : [],
  );
  const isFeatureEnabled = userFeatures.indexOf(feature) !== -1;

  if (typeof children === 'function') {
    return children(isFeatureEnabled);
  }

  return isFeatureEnabled ? children : null;
}

UserFeature.propTypes = {
  feature: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export { UserFeature };
