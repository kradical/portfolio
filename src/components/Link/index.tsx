import * as PropTypes from 'prop-types';
import * as React from 'react';

import * as css from 'src/components/Link/index.css';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  href: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const Link: React.StatelessComponent<Props> = props => {
  const { classes, href } = props;

  const className = [...classes, css.link].filter(Boolean).join(' ');

  return <a className={className} href={href} />;
};

Link.propTypes = propTypes;

Link.defaultProps = {
  classes: [],
};

export { Link };
