import React from 'react';
import Couter from './Couter';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Couter />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps',
};

export default App;
