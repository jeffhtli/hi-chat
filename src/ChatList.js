import React from 'react';
import styled from 'styled-components';
import { observable } from 'mobx';
import { observer } from "mobx-react";
import getProverb from './service/Proverb';
import GoTriangleLeft from 'react-icons/lib/go/triangle-left';
import avatar from './images/lego.jpg';


/**
 * 新消息显示后自动滚到最下面：
 * https://stackoverflow.com/questions/18614301/keep-overflow-div-scrolled-to-bottom-unless-user-scrolls-up
 */
class ChatList extends React.Component {

  chats = observable([]);
  isScrolledToBottom = true;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.chats.push(getProverb());
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
        {this.chats.map((item, index) => (
          <Msg key={index}>{item}</Msg>
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

const Msg = ({children}) => (
  <MsgContainer>
    <div style={{ display: 'flex', flexDirection: 'row-reverse'}}>
      <img style={{ width: '2em', height: '2em'}} src={avatar} />
      <Arrow />
      <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end'}}>
        <Bubble>{children}</Bubble>
      </div>
    </div>
  </MsgContainer>
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #f0f0f0;
    overflow: auto;
`;

const Chat = styled.div`
  padding: 0.5em;
`;

const MsgContainer = styled.span`
  margin: 0.5em 3em 0.5em 1em;
`;

const Bubble = styled.span`
  border-radius:0.3em;
	background: #fff;
  padding: 0.5em;
`;

const Arrow = styled.div`
  width: 0px;
  height:0px;
  display:block;
  border-style:solid;
  border-width:0.5em;
  border-color: transparent red transparent transparent;
  margin-top: 0.5em;

`;

export default observer(ChatList);

