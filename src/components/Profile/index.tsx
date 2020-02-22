import * as React from 'react';

import { ProfileCard } from './Card';

import { me } from './data';

export const Profile: React.FunctionComponent = () => <ProfileCard {...me} />;
