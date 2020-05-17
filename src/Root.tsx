import React from 'react';
import App from './App';
import { RecoilRoot } from 'recoil';

const Root = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export default Root;