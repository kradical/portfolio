import * as PropTypes from 'prop-types';
import * as React from 'react';

import * as css from 'src/components/Link/index.css';

interface Props {
  href: string;
  classes?: string[];
}

const Link: React.StatelessComponent<Props> = props => {
  const { classes, href } = props;

  const className = [...classes, css.link].filter(Boolean).join(' ');

  return <a className={className} href={href} />;
};

Link.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  href: PropTypes.string.isRequired,
};

Link.defaultProps = {
  classes: [],
};

export { Link };
