import React, { useState } from 'react';
import useStores from '../hooks/useStores';
import { observer } from 'mobx-react-lite';

const Randomizer = () => {
  const {
    RootStore: {
      RandomStore: {
        updateRandom,
        getRandom,
        getRandomHistory,
        randomToRemove,
        randomToRemoveCount,
        removeRandomFromHistory,
      },
    },
  } = useStores();

  const [removeValue, setRemoveValue] = useState('');

  const onRemoveChange = (e) => {
    setRemoveValue(e.target.value);
  };

  const onRemoveInputKeyPress = (e) => {
    if ((e.which || e.keyCode) === 13) {
      const value = e.target.value;
      if (value !== '') {
        removeRandomFromHistory(value);
        setRemoveValue('');
      }
    }
  };

  return (
    <div>
      <em>Random Store (makeAutoObservable)</em>
      <div>
        <button onClick={updateRandom}>Update Random Number</button>
      </div>
      <div>{getRandom}</div>
      <div>{getRandomHistory}</div>
      <div>
        Remove from History:{' '}
        <input
          type="text"
          value={removeValue}
          onChange={onRemoveChange}
          onKeyPress={onRemoveInputKeyPress}
        />
      </div>
      <div>{`${randomToRemoveCount} instance(s) of the number ${randomToRemove} removed from history`}</div>
    </div>
  );
};

export default observer(Randomizer);
