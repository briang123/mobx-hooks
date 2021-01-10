import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import LoadedStores from './LoadedStores';
import Randomizer from './Randomizer';
import Loading from './Loading';
import useStores from '../hooks/useStores';

const Mobx = () => {
  const {
    RootStore: {
      UIStateStore: { loading, updateLoading },
    },
  } = useStores();

  useEffect(() => {
    updateLoading(false);
  }, [updateLoading]);

  return (
    <Wrapper>
      {loading && (
        <>
          <Loading />
        </>
      )}
      {!loading && (
        <>
          <Container>
            <Randomizer />
          </Container>
          <Container>
            <LoadedStores />
          </Container>
        </>
      )}
    </Wrapper>
  );
};

export default observer(Mobx);

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  margin: 10px;
  padding: 10px;
  width: 50%;
  border: 1px solid gray;
`;
