import * as React from 'react';

import * as css from './index.css';

export const Header = () =>
  (
    <div className={css.header}>
      <div>Picture thumbnail</div>
      <div>Konrad Schultz</div>
      <div>Search</div>
    </div>
  );
