import React from 'react';
import CounterWithReducer from './CounterWithReducer';
import Couter from './Couter';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Couter />
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps',
};

export default App;
