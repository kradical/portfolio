import * as React from 'react';

import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { Profile } from 'src/components/Profile';
import { Projects } from 'src/components/Projects';
import { SpaceDemo } from 'src/components/SpaceDemo';

import 'src/styles/styles.css';

export const App = () =>
  (
    <React.Fragment>
      <Header />
      <SpaceDemo />
      <Profile
        author="Konrad Schultz"
        compiler="typescript"
        framework="React"
      />
      <Projects />
      <Footer />
     </React.Fragment>
  );
