import * as React from 'react';

import { Banner } from 'src/components/Banner';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { Profile } from 'src/components/Profile';
import { Projects } from 'src/components/Projects';

import 'src/styles/styles.css';

export const App = () =>
  (
    <React.Fragment>
      <Header />
      <Banner />
      <Profile />
      <Projects />
      <Footer />
     </React.Fragment>
  );
