import * as React from 'react';

import * as profilePic from 'assets/images/profilePicture.jpg';

import { Link } from 'src/components/Link';

import * as css from './index.css';

export const Header = () =>
  (
    <div className={css.header}>
      <Link classes={[css.profileLink]} href="#">
        <img src={profilePic} className={css.profilePicture} />
        Konrad Schultz
       </Link>
      <div>Search...</div>
    </div>
  );
