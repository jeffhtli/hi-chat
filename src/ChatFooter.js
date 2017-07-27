import React from 'react';
import styled from 'styled-components';

export default props => (
  <Footer>
    <Input type='text' />
    <Send>发送</Send>
  </Footer>
);

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.5rem;
  padding: 1rem;
  background: white;
`;

const Input = styled.input`
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #d0d0d0;

  &:focus {
    border-bottom: 1px solid #007acc;
  }

`;

const Send = styled.button`
  margin: 0 0.5rem 0 0.5rem;
`;
