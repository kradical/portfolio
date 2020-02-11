import * as React from 'react';

import { Link } from 'src/components/Link';
import { PersonProfile } from 'src/components/Profile/data';

import { Avatar } from './Avatar';
import * as css from './index.css';

export const ProfileCard = (props: PersonProfile) => (
  <div id="profile" className={css.card}>
    <div className={css.infoRow}>
      <div className={css.avatar}>
        <Avatar url={props.avatarUrl} />
      </div>
      <div>
        {props.name}
        <br />
        {props.title} at <Link href={props.company.url}>{props.company.name}</Link>
        <p>{props.location}</p>
      </div>
    </div>
    <div className={css.biographyRow}>{props.biography}</div>
    <div className={css.socialRow}>
      <Link href={props.socialUrls.github}>Github</Link> • <Link href={props.socialUrls.linkedin}>LinkedIn</Link>
    </div>
    <div className={css.decorativeCircle} />
  </div>
);
