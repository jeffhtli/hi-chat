import React from 'react';
import styled from 'styled-components';
import ChatList from './ChatList';
import ChatFooter from './ChatFooter';

import { Provider } from 'mobx-react';
import store from './store';

export default props => (
  <Provider chatList={store.chatList}>
    <Container>
      <ChatList />
      <ChatFooter />
    </Container>
  </Provider>

);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

// eslint-disable-next-line
const TitleBar = styled.div`
    height: 3em;
    line-height: 3em;
    text-align: center;
    background-color: black;
    color: white;
`;
