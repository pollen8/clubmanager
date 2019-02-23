import React, {
  FC,
  useState,
} from 'react';
import {
  IoIosAddCircle,
  IoIosCalendar,
  IoIosMedal,
} from 'react-icons/io';
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
import { SlidePanel } from '../app/components/SlidePanel';
import { AddMemberForm } from './components/AddMemberForm';
import { DeleteConfirmation } from './components/DeleteConfirmation';
import {
  Filter,
  ISearch,
} from './components/Filter';
import { IMember } from './memberState';

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
    season: '',
  });
  const isWide = useMedia(`(min-width: ${sizes.desktop}px)`);
  const [visible, showForm] = useState(false);

  const [selected, setSelected] = useState<IMember | null>(null);
  // const { members, addMember, deleteMember, editMember } = memberState(search);
  const members: any[] = [];
  const cards = members
    // .filter((member) => {
    //   console.log('member', member);
    //   if (search.name === '') {
    //     return true;
    //   }
    //   const regex = new RegExp(search.name, 'gi');
    //   return member.name.search(regex) !== -1;
    // })
    // .filter((member) => search.membership === '' || search.membership === member.membership)
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
                {/* <DeleteConfirmation onDelete={() => deleteMember(member.id)} /> */}

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
        <SlidePanel visible={visible}>
          {/* <AddMemberForm
            initialData={selected}
            setSelected={setSelected}
            addMember={addMember}
            editMember={editMember} /> */}
        </SlidePanel>
      </Row>
    </Content>
  );
};

