import * as React from 'react';

import { IProject } from 'src/components/Projects/data';

import { ProjectsListCard } from './Card';
import * as css from './index.css';

interface IProps {
  projects: IProject[];
}

const renderCard = (project: IProject) =>
  <ProjectsListCard project={project} />;

export const ProjectsList = (props: IProps) =>
  (
    <div className={css.container}>
      ProjectsList
      {props.projects.map(renderCard)}
    </div>
  );
