import React from 'react';
import styled from 'styled-components';
import {inject} from 'mobx-react';
import R from './common';

class ChatFooter extends React.Component {

  state = {
    inputMsg: ''
  }

  render() {
    return (
      <Footer>
        <Input
          type='text'
          value={this.state.inputMsg}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
        <Send onClick={this.send}>发送</Send>
      </Footer>
    )
  }

  onChange = e => {
    this.setState({inputMsg: e.target.value});
  }

  onKeyPress = e => {
    return e.key === 'Enter' && this.send();
  }

  send = () => {
    if (this.state.inputMsg) {
      this.props.chatList.push({
        message: this.state.inputMsg,
        isMe: true
      })
      this.setState({ inputMsg: '' });
    }
  }
}

export default inject('chatList')(ChatFooter)

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  height: 2em;
  padding: 1em 1em 0.5em 1em;
  background: white;
`;

const Input = styled.input`
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #d0d0d0;
  font-size: 1em;

  &:focus {
    border-bottom: 1px solid ${R.color.mainColor};
  }

`;

const Send = styled.button`
  margin: 0 0.5rem 0 0.5rem;
  font-size: 1em;

  &:active {
    background: ${R.color.mainColor}
  }
`;
