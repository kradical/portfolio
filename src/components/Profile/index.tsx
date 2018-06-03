import * as React from 'react';

import { ProfileCard } from './Card';

import * as css from './index.css';

import {
  me,
} from './data';

export const Profile = () =>
  (
    <ProfileCard {...me} />
  );
