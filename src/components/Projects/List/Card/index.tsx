import * as React from 'react';

import { Project } from 'src/components/Projects/data';

import * as css from './index.css';

interface Props {
  project: Project;
}

export const ProjectsListCard: React.FunctionComponent<Props> = (
  props: Props,
) => (
  <div className={css.container}>
    ProjectsListCard
    <br />
    {props.project.name} {props.project.liveUrl}
  </div>
);
