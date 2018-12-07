import React from 'react';
import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
`;

const size = (size?: number): string => {
  if (!size) {
    return '';
  }
  const percent = size / 12 * 100;
  return `
  flex: 0 0 ${percent}%;
  max-width:${percent}%;
  `;
}

export const Col = styled.div<{ flexGrow?: number; size?: number }>`
  flex-grow: ${(props) => props.flexGrow !== undefined ? props.flexGrow : 1};
  margin : 0 0.5rem;
  ${(props) => size(props.size)}
`;

export const Container = styled.section`
  margin: 0 0.5rem;
`;

export const SubHeading = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  color: ${({ theme }) => theme.grey500}
  margin: 0.5rem 0;
`;

export const Name = styled.div`
  padding: 0.1rem;
  font-weight: bold;
`;

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0.1rem 0.2rem 0 hsla(0, 0%, 0%, 0.2);
  margin: 1rem 1rem 1rem 0;
`;

export const CardBody = styled.div`
  padding: 1rem;
`;


export const Description = styled.div`
  padding: 0.1rem;
  color: ${({ theme }) => theme.grey600}
`;

export const Input = styled.input`
  border: 0px solid ${({ theme }) => theme.grey300};

  width: calc(100% - 0.5rem);
  height: 1.6rem;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  box-shadow: inset 0 0  0.3rem hsla(0,0%,0%,0.2);

  &:focus {
    box-shadow: inset 0 0  0.3rem   ${({ theme }) => theme.primary300};
    outline: 0;
  }

  &[type="checkbox"] {
    box-shadow: none;
    width: auto;
    font-size: 0.9rem;
    margin: 0 0.7rem;
    padding: 0;
  }
`;

export const Button = styled.button<{ size?: 'sm' | 'md' | 'lg', color?: string, outline?: boolean }>`
  line-height: ${(props) => props.size ?
    props.size === 'sm' ? '1.5rem' : '2.188rem'
    : '2.188rem'};
  display: flex;
  align-items: center;
  font-size: ${(props) => props.size ?
    props.size === 'sm' ? '0.65rem' : '0.75rem'
    : '0.75rem'};
  padding: 0 1.2rem;

  border-radius: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  transition: all .15s ease-in-out;
  white-space: nowrap;
  border: 0;
  background-color: ${({ theme, color, outline }) => outline
    ? 'transparent'
    : color ? theme[color] : theme.primary300};
  color: ${({ theme, color, outline }) => outline
    ? color ? theme[color] : theme.primary300
    : theme.onBackground};
  letter-spacing: 0.04rem;

  &:hover {
    background-color: ${({ theme, color, outline }) => outline
    ? 'transparent'
    : color ? theme[color] : theme.primary500};
    color: ${({ theme, color, outline }) => outline
    ? color ? theme[color] : theme.primary500
    : theme.onBackground};
  }

  svg {
    margin-right: 0.2rem;
  }
`;

export const FormGroup = styled.div<{ checked?: boolean }>`
  display: ${(props) => props.checked ? 'flex' : 'block'};
  margin: 0 0.5rem 0.7rem 0;
`;

export const Label = styled.label`
  text-transform: uppercase;
  padding: 0.25rem 0;
  color: ${(props) => props.theme.grey500};
  font-size: 0.9rem;
  display: block;
`;

export const TextArea = styled.textarea`
  border: 0px solid ${({ theme }) => theme.grey300};

  width: calc(100% - 0.5rem);
  height: 5.5rem;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  box-shadow: inset 0 0  0.3rem hsla(0,0%,0%,0.2);

  &:focus {
    box-shadow: inset 0 0  0.3rem   ${({ theme }) => theme.primary300};
    outline: 0;
  }
`;