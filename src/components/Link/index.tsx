import * as React from 'react';

import * as css from 'src/components/Link/index.css';

interface IProps {
  href: string;
  classes?: string[];
}

const Link: React.StatelessComponent<IProps> = (props) => {
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

Link.defaultProps = {
  classes: [],
};

export {
  Link,
};
