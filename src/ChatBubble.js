import React from 'react';
import styled, {css} from 'styled-components';
import avatar from './images/lego.jpg';
import avatarReverse from './images/lego1.jpg';
import R from './common';

export default ({ children, reverse }) => (
  <MsgContainer reverse={reverse}>
    <div>
      <img className='avatar' alt='avatar' src={reverse ? avatarReverse : avatar} />
      <div className='arrow' />
      <div className='bubbleContainer'>
        <span className='bubble'>{children}</span>
      </div>
    </div>
  </MsgContainer>
);

const MsgContainer = styled.div`
  margin: ${props => props.reverse ? '0.5em 1em 0.5em 3em' : '0.5em 3em 0.5em 1em'};

  > div {
    display: flex;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};

    > .avatar {
      width: 2em;
      height: 2em;
    };

    > .arrow {
      width: 0px;
      height:0px;
      display:block;
      border-style:solid;
      border-width:0.5em;
      border-color: ${props => props.reverse ? `transparent transparent transparent ${R.color.mainColor}` : 'transparent white transparent transparent'};
      margin-top: 0.5em;
    }

    > .bubbleContainer {
      display: flex;
      flex: 1;

      ${props => props.reverse && css`
        justify-content: flex-end;
      `}

      > .bubble {
        border-radius:0.3em;
        background: ${props => props.reverse ? `${R.color.mainColor}` : '#fff'};
        padding: 0.5em;
      }
    }
  }
`;
