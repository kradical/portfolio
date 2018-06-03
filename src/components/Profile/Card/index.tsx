import * as React from 'react';

import { IPersonProfile } from 'src/components/Profile/data';

import { Avatar } from './Avatar';
import * as css from './index.css';

export const ProfileCard = (props: IPersonProfile) =>
  (
    <div className={css.card}>
      <div className={css.headline}>
        <Avatar url={props.avatarUrl} />
        <div>
          <p>{props.name}</p>
          <p>{props.title} at {props.company}</p>
          <p>{props.location}</p>
        </div>
      </div>
      <div>
        <p>{props.socialUrls.github}</p>
        <p>{props.socialUrls.linkedin}</p>
      </div>
    </div>
  );
