import React from 'react';
import BaseModal from 'react-responsive-modal';
import styled, { css } from 'styled-components';

type TMediaSize = 'desktop' | 'tablet' | 'phone' | 'largeDesktop';
export const sizes: { [K in TMediaSize]: number } = {
  desktop: 992,
  tablet: 768,
  phone: 576,
  largeDesktop: 1024,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: TMediaSize[]) => {
    const s = sizes[label as TMediaSize];
    return css`
    @media (max-width: ${s / 16}em) {
      // @ts-ignore
      ${css(...args)}
    };
  `;
  }

  return acc;
}, {} as any);

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const size = (size?: number, margin?: number): string => {
  if (!size) {
    return '';
  }
  const percent = margin
    ? `calc(${size / 12 * 100}% - ${2 * margin}rem)`
    : `${size / 12 * 100}%`;
  return `
  flex: 0 0 ${percent};
  max-width:${percent};
  `;
}

export const Col = styled.div<{ flexGrow?: number; size?: number, xs?: number; sm?: number; md?: number }>`
  flex-grow: ${(props) => props.flexGrow !== undefined ? props.flexGrow : 1};
  margin : 0 0.5rem;
  ${(props) => size(props.size)};
  ${(props) => media.desktop([size(props.md, 0.5)])};
  ${(props) => media.tablet([size(props.sm, 0.5)])};
  ${(props) => media.phone([size(props.xs, 0.5)])};
`;

export const Container = styled.section`
  margin: 0 0.5rem;
`;

export const Content = styled.div`
  margin: 0 0.5rem;
  flex-grow: 1;
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


export const SlidePanel = styled.div`
  background-color: ${({ theme }) => theme.grey200};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  padding: 0.1rem;
  color: ${({ theme }) => theme.grey600}
`;

export const Input = styled.input`
  border: 0px solid ${({ theme }) => theme.grey300};

  width: calc(100%-0.5rem);
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

export const Button = styled.button<{ size?: 'sm' | 'md' | 'lg', color?: string, hoverColor?: string; outline?: boolean }>`
  line-height: ${(props) => props.size ?
    props.size === 'sm' ? '1rem' : '2.188rem'
    : '2.188rem'};
  display: flex;
  align-items: center;
  font-size: ${(props) => props.size ?
    props.size === 'sm' ? '0.65rem' : '0.75rem'
    : '0.75rem'};
  padding: ${({ size }) => size ?
    size === 'sm' ? '0.2rem 0.6rem' : '0 1.2rem'
    : '0 1.2rem'};

  border-radius: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  transition: all .15s ease -in -out;
  white-space: nowrap;
  border: 0;
  background-color: ${
  ({ theme, color, outline }) => outline
    ? 'transparent'
    : color ? theme[color] : theme.primary300
  };
  color: ${
  ({ theme, color, outline }) => outline
    ? color ? theme[color] : theme.primary300
    : theme.onBackground
  };
  letter-spacing: 0.04rem;

    &: hover {
    background-color: ${
  ({ theme, hoverColor, outline }) => outline
    ? 'transparent'
    : hoverColor ? theme[hoverColor] : theme.primary500
  };
    color: ${
  ({ theme, color, outline }) => outline
    ? color ? theme[color] : theme.primary500
    : theme.onBackground
  };
}

svg {
  margin-right: 0.2rem;
}
`;

export const FormGroup = styled.div<{ checked?: boolean }>`
display: ${ (props) => props.checked ? 'flex' : 'block'};
margin: 0 0.5rem 0.7rem 0;
`;

export const Label = styled.label`
text-transform: uppercase;
padding: 0.25rem 0;
color: ${ (props) => props.theme.grey500};
font-size: 0.9rem;
display: block;
`;

export const TextArea = styled.textarea`
border: 0px solid ${ ({ theme }) => theme.grey300};
width: calc(100 %-0.5rem);
height: 5.5rem;
border-radius: 0.5rem;
padding: 0.25rem 0.5rem;
box-shadow: inset 0 0  0.3rem hsla(0, 0 %, 0 %, 0.2);

  &: focus {
  box-shadow: inset 0 0  0.3rem   ${ ({ theme }) => theme.primary300};
  outline: 0;
}
`;

export const ModalBody = styled.div`
padding: 1rem;
`;

export const ModalFooter = styled.div`
background-color: ${ ({ theme }) => theme.grey300};
padding: 1rem 2rem;
display: flex;
justify-content: space-between;
border-radius: 0 0 0.25rem 0.25rem;
`;

export const Modal = styled(BaseModal)`
`;