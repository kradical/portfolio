import * as React from 'react';

import * as css from './index.css';

interface IProps {
  url: string;
}

export const Avatar = (props: IProps) =>
  <img className={css.image} src={props.url} />;
