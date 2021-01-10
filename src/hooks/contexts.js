import React from 'react';
import MyStore from '../stores/mystore'

const myStore = new MyStore();

const storesContext = React.createContext({
  MyStore: myStore,
});

export default storesContext;
