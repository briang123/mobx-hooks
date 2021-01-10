import React from 'react'
import useStores from '../hooks/useStores';
import { observer } from 'mobx-react-lite';

const LoadedStores = () => {
  const { 
    RootStore: {
      loadedStores,
      UIStateStore: { color }
    }
  } = useStores()

  return (
    <div>
      <strong>
        Loaded Stores
      </strong>
      <div style={{ color }}>{loadedStores.join(', ')}</div>
    </div>
  )
}

export default observer(LoadedStores);
