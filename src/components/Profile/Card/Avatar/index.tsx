import * as React from 'react';

import * as css from './index.css';

interface Props {
  url: string;
}

export const Avatar: React.FunctionComponent<Props> = (props: Props) => <img className={css.image} src={props.url} />;
