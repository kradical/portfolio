import * as React from 'react';

import * as css from 'src/components/Link/index.css';

interface IProps {
  href: string;
  classes: [string];
}

export const Link = (props: IProps) => {
  const {
    classes,
    ...rest,
  } = props;

  const className = [
    ...props.classes,
    css.link,
  ]
    .filter(Boolean)
    .join(' ');

  return <a className={className} {...rest} />;
};
