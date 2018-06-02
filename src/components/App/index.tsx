import * as React from 'react';

import { Hello } from 'src/components/Hello';

export const App = () =>
  (
    <Hello
      compiler="TypeScript"
      framework="React"
      author="Konrad Schultz"
    />
  );
