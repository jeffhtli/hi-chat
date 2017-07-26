import React from 'react';
import styled from 'styled-components';
import ChatList from './ChatList';

export default props => (
  <Container>
    <TitleBar>即山下</TitleBar>
    <ChatList />
    <Footer />
  </Container>
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const TitleBar = styled.div`
    height: 3em;
    line-height: 3em;
    text-align: center;
    background-color: black;
    color: white;
`;

const Footer = styled.div`
    height: 3em;
    background-color: red
`;
