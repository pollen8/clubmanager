import React, {
  FC,
  useState,
} from 'react';
import {
  IoIosAddCircle,
  IoIosCalendar,
  IoIosMedal,
} from 'react-icons/io';
import { Spring } from 'react-spring';
import styled from 'styled-components';
import { useMedia } from 'use-media';

import { Grid } from '../app/components/Grid';
import {
  Button,
  Card,
  CardBody,
  Col,
  Content,
  Name,
  Row,
  sizes,
  SubHeading,
} from '../app/components/Layout';
import { AddMemberForm } from './AddMemberForm';
import { DeleteConfirmation } from './DeleteConfirmation';
import {
  Filter,
  ISearch,
} from './Filter';
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

const Date = styled.div`
  color: ${(props) => props.theme.grey700};
  font-weight: 400;
  font-size: 0.8rem;
  padding: 0.3rem 0;
  svg {
    margin-right: 0.3rem;
  }
`;

export const Members: FC<{}> = () => {
  const [search, setSearch] = useState<ISearch>({
    membership: '',
    name: '',
  });
  const f = sizes;
  const isWide = useMedia(`(min-width: ${sizes.desktop}px)`);
  const [visible, showForm] = useState(false);
  const [selected, setSelected] = useState<IMember | null>(null);
  const { members, addMember, deleteMember, editMember } = memberState([]);
  const cards = members
    .filter((member) => {
      if (search.name === '') {
        return true;
      }
      const regex = new RegExp(search.name, 'gi');
      return member.name.search(regex) !== -1;
    })
    .filter((member) => search.membership === '' || search.membership === member.membership)
    .map((member, index) => ({

      component: (
        <Card style={{ display: 'flex', position: 'relative' }}>
          <CardBody>
            <Row>
              <Col flexGrow={1}>
                <Name>
                  {
                    member.membership === 'member' && <IoIosMedal />
                  }
                  {member.name}
                  <Date>
                    <IoIosCalendar />
                    {member.updatedAt && member.updatedAt.toLocaleDateString()}
                  </Date>
                  <Date>
                    <IoIosCalendar />
                    {member.createdAt && member.createdAt.toLocaleDateString()}
                  </Date>
                </Name>
                <DeleteConfirmation onDelete={() => deleteMember(member.id)} />

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

  return (
    <Content>
      <Row>
        <Col flexGrow={2}>
          <SubHeading>Players</SubHeading>
        </Col>
        <Col flexGrow={0}>

          <Button size="sm"
            color="grey500"
            onClick={() => showForm(!visible)}>
            <IoIosAddCircle size="1rem" />
            Add
          </Button>
        </Col>
      </Row>
      <Row>
        <Col size={2} md={12}>
          <Filter
            search={search}
            setSearch={setSearch} />
        </Col>
        <Col md={12} style={{ marginRight: '13rem' }}>
          <Grid
            data={cards}
            height={isWide ? 190 : 160}
            columns={isWide ? 3 : 1} />
        </Col>
        <div style={{ overflow: 'hidden', width: '14rem', position: 'fixed', right: '0', height: 'calc(100%)' }}>
          <Spring
            config={{ tension: 210, friction: 14, clamp: true }}
            from={{
              right: !visible ? '0' : '-14rem',
              width: !visible ? '14rem' : '0',
            }}
            to={{
              right: !visible ? '-14rem' : '0',
              width: visible ? '0' : '14rem',
            }}
          >
            {(style) => {
              return <div style={{
                height: '100%',
                transform: `translate(${style.width}, 0)`,

              }}>
                <AddMemberForm
                  initialData={selected}
                  setSelected={setSelected}
                  addMember={addMember}
                  editMember={editMember} />
              </div>;
            }
            }

          </Spring>
        </div>
      </Row>
    </Content>
  );
};

