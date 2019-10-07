import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import { deleteIcon, editIcon, dropdownIcon } from './Icons';

const Container = styled.div`
  display: inline-block;
  width: 100%;
  padding: 0 0 1.15rem 0;
  
  @media screen and (min-width: 768px) {
    width: 43%;
    padding: 1% 7% 2% 0;
  }

  @media screen and (min-width: 1024px) {
    width: 43%;
    padding: 1% 6% 2% 0;
  }

  @media screen and (min-width: 1290px) {
    width: 28%;
    padding: 1% 5% 2% 0;
  }
`;

const Content = styled.div`
  background-color: #FFFFFF;
  height: 14.12rem;
  padding: 0.31rem 0 0 1.9rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.625rem 0 rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.h3`
  font-size: 1.5rem;
  font-weight: 350;
`;

type ParagraphProps = {
  isTag?: Boolean;
}

const Paragraph = styled.p<ParagraphProps>`
  font-size: ${props => props.isTag ? '1rem' : '1.2rem'};
  font-weight: 300;
  color: ${props => props.isTag && '#A9A9A9'};
  border: ${props => props.isTag && '0.5px solid #A9A9A9'};
  border-radius: 5px;
  padding: 0.2rem;
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

type ToDoCardProps = {
  title: string;
  goal: string;
  tag: string;
}

const ToDoCard: React.FunctionComponent<ToDoCardProps> = props => {
  const {title, goal, tag } = props;

  return (
    <Container>
      <Content>
        <Header>
          {title}
        </Header>
        <Paragraph>
          {goal}
        </Paragraph>
        <Paragraph isTag as='i'>
          #{tag}
        </Paragraph>
        <Footer>
          <Button
            label='Delete'
            icon={deleteIcon()}
            type='isDelete'
          />
          <Button
            label='Edit'
            icon={editIcon()}
          />
          <Button
            label='Start'
            icon={dropdownIcon()}
          />
        </Footer>
      </Content>
    </Container>
  );
};

export default ToDoCard;
