import * as PropTypes from 'prop-types';
import * as React from 'react';

import { Link } from 'src/components/Link';

import * as css from './index.css';

interface Props {
  message: string;
  link: string;
  classes?: string[];
}

const ActionHeader: React.StatelessComponent<Props> = props => {
  const { link, message } = props;

  const className = [...props.classes, css.action].filter(Boolean).join(' ');

  const linkClasses = [css.actionLink];

  return (
    <Link classes={linkClasses} href={link}>
      <div className={className}>{message}</div>
    </Link>
  );
};

ActionHeader.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf(PropTypes.string),
};

ActionHeader.defaultProps = {
  classes: [],
};

export { ActionHeader };