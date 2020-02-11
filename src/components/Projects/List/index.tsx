import * as React from 'react';

import { Project } from 'src/components/Projects/data';

import { ProjectsListCard } from './Card';
import * as css from './index.css';

interface Props {
  projects: Project[];
}

const renderCard = (project: Project): React.ReactElement => <ProjectsListCard project={project} />;

export const ProjectsList: React.FunctionComponent<Props> = (props: Props) => (
  <div className={css.container}>
    ProjectsList
    {props.projects.map(renderCard)}
  </div>
);
