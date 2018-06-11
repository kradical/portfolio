import * as React from 'react';

import { Link } from 'src/components/Link';

import * as css from './index.css';

interface IProps {
  message: string;
  link: string;
  classes?: string[];
}

const ActionHeader: React.StatelessComponent<IProps> = (props) => {
  const {
    link,
    message,
  } = props;

  const className = [
    ...props.classes,
    css.action,
  ]
    .filter(Boolean)
    .join(' ');

  const linkClasses = [css.actionLink];

  return (
    <Link classes={linkClasses} href={link}>
      <div className={className}>
        {message}
      </div>
     </Link>
   );
};

ActionHeader.defaultProps = {
  classes: [],
};

export {
  ActionHeader,
};
