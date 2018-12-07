import { Auth0UserProfile } from 'auth0-js';
import React, {
  Fragment,
  useEffect,
  useState,
} from 'react';
import {
  Manager,
  Popper,
  Reference,
} from 'react-popper';
import Select from 'react-select';
import styled from 'styled-components';

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

let circleRef: any;

export const Header: React.SFC<{ auth: any }> = ({ auth }) => {
  const { isAuthenticated } = auth;
  const [profile, setProfile] = useState<Partial<Auth0UserProfile>>({});
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  useEffect(() => {

    const { userProfile, getProfile } = auth;
    if (!userProfile && isAuthenticated()) {
      getProfile((err: any, profile: Auth0UserProfile) => {
        setProfile(profile);
      });
    } else {
      setProfile(userProfile);
    }
  }, [])
  useEffect(() => {
    document.addEventListener('click', (e: any) => {
      if (e.path.indexOf(circleRef) !== -1) {
        return;
      }
      setDropdownVisible(false);
    });
  }, []);
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
              <div ref={(ref) => circleRef = ref}>
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