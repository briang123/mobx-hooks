import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return <Container>Loading...</Container>;
};

export default Loading;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: #000;
  opacity: 0.7;
  font-size: 4em;
  color: #fff;
`;
