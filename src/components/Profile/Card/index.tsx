import * as PropTypes from 'prop-types';
import * as React from 'react';

import { Link } from 'src/components/Link';

import { Avatar } from './Avatar';
import * as css from './index.css';

const propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  biography: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  socialUrls: PropTypes.shape({
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypes>;

export const ProfileCard: React.FunctionComponent<Props> = props => (
  <div id="profile" className={css.card}>
    <div className={css.infoRow}>
      <div className={css.avatar}>
        <Avatar url={props.avatarUrl} />
      </div>
      <div>
        {props.name}
        <br />
        {props.title} at{' '}
        <Link href={props.company.url}>{props.company.name}</Link>
        <p>{props.location}</p>
      </div>
    </div>
    <div className={css.biographyRow}>{props.biography}</div>
    <div className={css.socialRow}>
      <Link href={props.socialUrls.github}>Github</Link> •{' '}
      <Link href={props.socialUrls.linkedin}>LinkedIn</Link>
    </div>
    <div className={css.decorativeCircle} />
  </div>
);

ProfileCard.propTypes = propTypes;
