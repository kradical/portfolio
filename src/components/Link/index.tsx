import * as PropTypes from 'prop-types';
import * as React from 'react';

import * as css from 'src/components/Link/index.css';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string.isRequired),
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const Link: React.StatelessComponent<Props> = props => {
  const { children, classes, href } = props;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const className = [...classes!, css.link].filter(Boolean).join(' ');

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

Link.propTypes = propTypes;

Link.defaultProps = {
  classes: [],
};

export { Link };
