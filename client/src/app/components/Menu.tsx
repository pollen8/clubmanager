import React, {
  FC,
  Fragment,
  useRef,
} from 'react';
import { IoMdMenu } from 'react-icons/io';
import {
  Manager,
  Popper,
  Reference,
} from 'react-popper';
import styled from 'styled-components';
import { useMedia } from 'use-media';

import { useDropdown } from '../hooks/dropdown';
import { Card } from './Layout';
import { MenuLinks } from './MenuLinks';

const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;

  li {
    padding: 0 1rem 0 0;
    line-height: 4.7rem;

    a {
      color: ${(props) => props.theme.grey500};
      text-decoration: none;
      display: block;
      height: 100%;
    }

    a.active {
      border-bottom: 2px solid  ${({ theme }) => theme.primary500};
      color: ${({ theme }) => theme.primary500};
    }

    a:focus {
      outline: 0;
      border-bottom: 2px solid  ${({ theme }) => theme.primary400};
      color: ${({ theme }) => theme.primary400};
    }
  }
`;

const Burger = styled.div`
  position: relative;
`;

export const Menu: FC<{}> = () => {
  const circleRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useDropdown(circleRef);
  const isWide = useMedia('(min-width: 1000px)');
  return (
    <Fragment>
      {
        !isWide &&

        <Burger ref={circleRef}>

          <Manager>
            <Reference>
              {({ ref }) => (
                <a href="#"
                  ref={ref}
                  onClick={() => {
                    setDropdownVisible(!dropdownVisible);
                  }}>
                  <IoMdMenu size="2rem" />
                </a>
              )}
            </Reference>
            <Popper placement="bottom-end"
            >
              {({ ref, style, placement, arrowProps }) => {
                return <Card ref={ref}
                  style={{
                    ...style,
                    opacity: 1,
                    display: dropdownVisible ? 'block' : 'none',
                  }}
                  data-placement={placement}>
                  <ul>
                    <MenuLinks />
                  </ul>
                </Card>;
              }
              }
            </Popper>
          </Manager>
        </Burger>
      }
      {
        isWide &&

        <Wrapper>
          <MenuLinks />
        </Wrapper>
      }
    </Fragment>)
};

