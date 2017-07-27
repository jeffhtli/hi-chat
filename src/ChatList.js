import React from 'react';
import styled from 'styled-components';
import { observer, inject } from "mobx-react";
import getProverb from './service/Proverb';
import ChatBubble from './ChatBubble'

/**
 * 新消息显示后自动滚到最下面：
 * https://stackoverflow.com/questions/18614301/keep-overflow-div-scrolled-to-bottom-unless-user-scrolls-up
 */
class ChatList extends React.Component {

  isScrolledToBottom = true;

  componentDidMount() {
    this.interval = setInterval(() => {
      const data = {
        message: getProverb(),
        isMe: Math.floor(Math.random() * 10) < 3
      }
      this.props.chatList.push(data);
    }, 1000);
  }

  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }

  componentDidUpdate() {
    const out = this.container;
    if (this.isScrolledToBottom) {
      out.scrollTop = out.scrollHeight - out.clientHeight;
    }
  }

  render() {
    return (
      <Container innerRef={this.initContainer}>
        {this.props.chatList.map((data, index) => (
          <ChatBubble key={index} reverse={data.isMe}>{data.message}</ChatBubble>
        ))}
      </Container>
    )
  }

  initContainer = container => {
    this.container = container;
    this.container.addEventListener('scroll', () => {
      this.isScrolledToBottom = container.scrollHeight - container.clientHeight <= container.scrollTop + 1;
    });
  }

}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #f0f0f0;
    overflow: auto;
`;

export default inject('chatList')(observer(ChatList));

