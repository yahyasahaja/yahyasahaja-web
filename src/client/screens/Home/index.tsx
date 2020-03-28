import { hot } from 'react-hot-loader';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
`;

const Home = () => {
  return (
    <Container>
      <div>Home</div>
    </Container>
  );
};

export default hot(module)(Home);