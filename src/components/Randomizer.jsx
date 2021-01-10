import React from 'react'
import useStores from '../hooks/useStores';
import { observer } from 'mobx-react-lite';

const Randomizer = () => {
  const { 
    RootStore: {
      RandomStore: { 
        updateRandom,
        getRandom,
        getRandomHistory,
      }
    }
  } = useStores()

  return (
    <div>
      <em>Random Store (makeAutoObservable)</em>
      <div>
        <button onClick={updateRandom}>Update Random Number</button>
      </div>
      <div>{getRandom}</div>
      <div>{getRandomHistory}</div>
    </div>
  )
}

export default observer(Randomizer);
