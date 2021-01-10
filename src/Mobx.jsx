
import React from 'react'
import useStores from './hooks/useStores';
import { observer } from 'mobx-react-lite';

const Mobx = () => {
  const { 
    MyStore: {
      updateRandom,
      getRandom
    } 
  } = useStores()

  return (
    <>
      <h1>Mobx 6</h1>
      <em>makeAutoObservable</em>
      <div>
        <button onClick={updateRandom}>Click</button>
      </div>
      <div>{getRandom}</div>
    </>
  )
};

export default observer(Mobx);