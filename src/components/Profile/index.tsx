import * as React from 'react';

import * as css from './index.css';

interface IProps {
  compiler: string;
  framework: string;
  author: string;
}

export const Profile = (props: IProps) =>
  (
    <React.Fragment>
      <h1 className={css.foo}>This is the profile.</h1>
      <p>This site is made with {props.compiler} and {props.framework}.</p>
      <p>Work in progress</p>
      <small className={css.barBaz}>Brought to you by {props.author}.</small>
    </React.Fragment>
  );
