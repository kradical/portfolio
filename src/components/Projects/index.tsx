import * as React from 'react';

import { ProjectsControlHeader } from './ControlHeader';
import { allProjects } from './data';
import * as css from './index.css';
import { ProjectsList } from './List';

export const Projects: React.FunctionComponent = () => (
  <div className={css.container}>
    <ProjectsControlHeader />
    <ProjectsList projects={allProjects} />
  </div>
);
