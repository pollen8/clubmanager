import React, {
  FC,
  Fragment,
  useContext,
  useRef,
} from 'react';
import {
  Manager,
  Popper,
  Reference,
} from 'react-popper';
import Select from 'react-select';
import styled from 'styled-components';

import { AuthContext } from '../../Routes';
import { userState } from '../../User/userState';
import { useDropdown } from '../hooks/dropdown';
import { loadProfile } from '../hooks/loadProfile';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from './Layout';
import { Menu } from './Menu';

const Title = styled.h1`
  margin: 1.5rem 1.5rem 1.5rem 0;
  font-size: 1.5rem;
`;

const CircleImg = styled.img<{ width?: number, height?: number }>`
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin-right: 1rem;
  height: ${(props) => props.height || 100}px;
  width: ${(props) => props.width || 100}px;
  cursor: pointer;
`;

export const Header: FC<{}> = () => {
  const auth = useContext(AuthContext);
  const { roles } = userState();
  const { isAuthenticated } = auth;
  const circleRef = useRef(null);
  const [profile] = loadProfile(auth);
  const [dropdownVisible, setDropdownVisible] = useDropdown(circleRef);
  return (
    <Container>
      <Row style={{ alignItems: 'center' }}>
        <Col flexGrow={0}>
          <Title>Club Manager</Title>
        </Col>
        <Col flexGrow={2}>
          {
            isAuthenticated() && <Menu />
          }
        </Col>
        {
          !isAuthenticated() && (
            <Button
              onClick={() => auth.login()}
            >
              Log In
        </Button>
          )
        }
        {
          isAuthenticated() && (
            <Fragment>
              {
                roles.includes('Admin') &&
                <Fragment>
                  <div>Season:{' '}</div>
                  <div style={{ minWidth: '9rem' }}>
                    <Select
                      options={[
                        { value: '2018', label: '2018 - 2019' },
                        { value: '2019', label: '2019 - 2020' }
                      ]}
                      value={{ value: '2018', label: '2018 - 2019' }}
                    />
                  </div>
                </Fragment>
              }
              <div ref={circleRef}>
                <Manager>
                  <Reference>
                    {({ ref }) => (
                      <CircleImg
                        onClick={() => setDropdownVisible(!dropdownVisible)}
                        width={40}
                        height={40}
                        ref={ref}
                        src={profile.picture} />
                    )}
                  </Reference>
                  <Popper placement="bottom-end"
                  >
                    {({ ref, style, placement, arrowProps }) => (
                      <Card ref={ref}
                        style={{
                          ...style,
                          left: '-120px',
                          opacity: 1,
                          display: dropdownVisible ? 'block' : 'none',
                        }}
                        data-placement={placement}>
                        <CardBody>
                          <div ref={arrowProps.ref} style={arrowProps.style} />
                          <Button
                            onClick={() => auth.logout()}
                          >
                            Log Out
                          </Button>
                        </CardBody>
                      </Card>
                    )}
                  </Popper>
                </Manager>
              </div>
            </Fragment>
          )
        }

      </Row>
    </Container>
  );
}