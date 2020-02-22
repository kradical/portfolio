import * as PropTypes from 'prop-types';
import * as React from 'react';

import { Link } from 'src/components/Link';

import * as css from './index.css';

const propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf(PropTypes.string.isRequired),
};

type Props = PropTypes.InferProps<typeof propTypes>;

const defaultProps: Partial<Props> = {
  classes: [],
};

const ActionHeader: React.StatelessComponent<Props> = props => {
  const { classes, link, message } = props;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const className = [...classes!, css.action].filter(Boolean).join(' ');

  const linkClasses = [css.actionLink];

  return (
    <Link classes={linkClasses} href={link}>
      <div className={className}>{message}</div>
    </Link>
  );
};

ActionHeader.propTypes = propTypes;
ActionHeader.defaultProps = defaultProps;

export { ActionHeader };
