import React, { FC } from 'react';
import styled from 'styled-components';

const TabItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.grey500};
`;

const TabItem = styled.div<{ active: boolean }>`
  cursor: pointer;
  height: 1.5rem;
  line-height: 1.5rem;
  color: ${(props) => props.active ? props.theme.primary500 : props.theme.grey500};
  border: 1px solid ${({ theme, active }) => active ? theme.grey500 : 'transparent'};
  border-radius: 0.25rem 0.25rem 0 0;
  border-bottom: 1px solid ${(props) => props.active ? '#FFF' : props.theme.grey500}; 
  padding: 0.25rem 0.5rem;
  margin-bottom: -1px;
  margin-right: 0.25rem;

  &:hover {
    color: ${(props) => props.theme.primary500};
    border: 1px solid ${({ theme }) => theme.grey300};
  }
`;

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export const Nav: FC<DivProps> = ({ children, style }) => {
  return (
    <TabItemContainer style={style}>
      {children}
    </TabItemContainer>
  );
}

export const NavItem: FC<{ onClick: () => void, active: boolean } & DivProps> = ({ children, onClick, active }) => {
  return (
    <TabItem onClick={onClick} active={active}>
      {children}
    </TabItem>
  )
}

export const TabContent: FC<{ active: boolean } & DivProps> = ({ children, active }) => {
  return (
    <div style={{ display: active ? 'block' : 'none' }}>
      {children}
    </div>
  )
}