import React, {
  SFC,
  useState,
} from 'react';
import { Spring } from 'react-spring';
import styled from 'styled-components';

import { Grid } from '../Grid';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Name,
  Row,
  SubHeading,
} from '../Layout';
import { AddMemberForm } from './AddMemberForm';
import { Filter } from './Filter';
import {
  IMember,
  memberState,
} from './memberState';

const Image = styled.div<{ src: string }>`
  background-color: ${({ theme }) => theme.grey300};
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 8rem;
  background-position: 50% 50% !important;
  width: 33%;
  border-radius: 0.3rem 0 0 0.3rem;
  opacity: 0.5;
  filter: grayscale(50%);
  box-shadow: inset 0 0  0.3rem hsla(0,0%,0%,0.2);
`;

export const Members: SFC<{}> = () => {
  const [search, setSearch] = useState('');
  const [visible, showForm] = useState(false);
  const [selected, setSelected] = useState<IMember | null>(null);
  const { members, addMember, deleteMember } = memberState([]);

  const cards = members
    .filter((member) => {
      if (search === '') {
        return true;
      }
      const regex = new RegExp(search, 'gi');
      return member.name.search(regex) !== -1;
    })
    .map((member, index) => ({

      component: (
        <Card style={{ display: 'flex', position: 'relative' }}>
          <CardBody>
            <Row>
              <Col flexGrow={1}>
                <Name>
                  {member.name}
                </Name>

                <Button size="sm"
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                  }}
                  color="grey500"
                  onClick={() => deleteMember(member.id)}>
                  X
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    setSelected(member);
                    showForm(true);
                  }}>
                  Edit
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>

      ),
      id: member.id,
      index,
    }))

  return <Container>
    <Row>
      <Col flexGrow={2}>
        <SubHeading>Club Members</SubHeading>
      </Col>
      <Col flexGrow={0}>

        <Button size="sm"
          color="grey500"
          onClick={() => showForm(!visible)}>
          Add</Button>
      </Col>
    </Row>
    <Row>
      <Col size={2}>
        <Filter />
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="...search"
          name="search" />
      </Col>
      <Col style={{ marginRight: '13rem' }}>
        <Grid
          data={cards}
          height={210}
          columns={3} />
      </Col>
      <Spring
        config={{ tension: 210, friction: 14, clamp: true }}
        from={{ width: !visible ? 'auto' : 0 }}
        to={{ width: visible ? 'auto' : 0 }}
      >
        {(style) => <div style={{ ...style, overflow: 'hidden', position: 'absolute', right: '1rem' }}>
          <AddMemberForm
            initialData={selected}
            setSelected={setSelected}
            addMember={addMember} />
        </div>}

      </Spring>
    </Row>
  </Container>
};

