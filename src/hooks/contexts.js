import React from 'react';
import RootStore from '../stores/rootStore';

const rootStore = new RootStore();

const storesContext = React.createContext({
  RootStore: rootStore,
});

export default storesContext;
