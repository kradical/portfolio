import * as React from 'react';

import { IProject } from 'src/components/Projects/data';

import * as css from './index.css';

interface IProps {
  project: IProject;
}

export const ProjectsListCard = (props: IProps) =>
  (
    <div className={css.container}>
      ProjectsListCard
      <br />
      {props.project.name}
      {' '}
      {props.project.liveUrl}
    </div>
  );
