import React from 'react';
import styled, {css} from 'styled-components';
import avatar from './images/lego.jpg';
import avatarReverse from './images/lego1.jpg';

export default ({ children, reverse }) => (
  <MsgContainer reverse={reverse}>
    <div>
      <img alt='avatar' src={reverse ? avatarReverse : avatar} />
      <Arrow reverse={reverse} />
      <BubbleContainer reverse={reverse}>
        <Bubble reverse={reverse}>{children}</Bubble>
      </BubbleContainer>
    </div>
  </MsgContainer>
);

const MsgContainer = styled.div`
  margin: ${props => props.reverse ? '0.5em 1em 0.5em 3em' : '0.5em 3em 0.5em 1em'};

  > div {
    display: flex;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};

    > img {
      width: 2em;
      height: 2em;
    };
  }
`;

const BubbleContainer = styled.div`
  display: flex;
  flex: 1;

  ${props => props.reverse && css`
    justify-content: flex-end;
  `}

`;

const Bubble = styled.span`
  border-radius:0.3em;
	background: ${props => props.reverse ? '#b2e281' : '#fff'};
  padding: 0.5em;
`;

const Arrow = styled.div`
  width: 0px;
  height:0px;
  display:block;
  border-style:solid;
  border-width:0.5em;
  border-color: ${props => props.reverse ? 'transparent transparent transparent #b2e281' : 'transparent white transparent transparent'};
  margin-top: 0.5em;
`;
