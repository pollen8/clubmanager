import React, {
  FC,
  useState,
} from 'react';
import {
  useMutation,
  useQuery,
} from 'react-apollo-hooks';
import { useMedia } from 'use-media';

import Loading from '../app/components/Loading';
import { Grid } from '../app/components/Grid';
import {
  Card,
  CardBody,
  Col,
  Content,
  FormGroup,
  Input,
  Label,
  Name,
  Row,
  sizes,
  SubHeading,
} from '../app/components/Layout';
import { IClub } from '../Club/Club';
import { Filter } from './components/Filter';
import {FILTER_USERS, DELETE_USER, remove} from './Queries';

export interface IUser {
  id: string;
  email: string;
  name: string;
  clubs: IClub[];
}

export interface ISearch {
  name: string;
}

export const User: FC<{}> = () => {
  // const { users, usersRoles, updateRole, isCurrentUser } = userState();
  // const users: any[] = [];
  const usersRoles: any[] = [];

  const isWide = useMedia(`(min-width: ${sizes.desktop}px)`);
  const [search, setSearch] = useState<ISearch>({
    name: '',
  });
  const { data, error, loading } = useQuery(FILTER_USERS, { variables: { searchString: search.name } });
  const deleteUser = useMutation(DELETE_USER, { update: remove });
  if (error || data === undefined) return <p>Error :(</p>;
 
  const cards = data.filterUsers && data.filterUsers
    .map((user: IUser, index: number) => ({

      component: (
        <Card style={{ display: 'flex', position: 'relative' }}>
          <CardBody>
            <Row>
              <Col flexGrow={1}>
                <Name>
                  {user.name}
                </Name>
                {user.email}
                {
                  usersRoles.map((role) => {
                    const id = 'role-' + user.id + '-' + role.name;
                    return <FormGroup
                      key={role.name}
                      checked>
                      {/* 
                      <Input type="checkbox"
                        id={id}
                        disabled={isCurrentUser(user.id) || user.id === 'r4JlfBfMqR'}
                        checked={user.roles.map((r) => r.name).includes(role.name)}
                        onChange={(e) => updateRole(user.id, role, e.target.checked)} /> */}
                      <Label htmlFor={id}>
                        {role.name}
                      </Label>
                    </FormGroup>
                  })
                }
              </Col>
            </Row>
          </CardBody>
        </Card>

      ),
      id: user.id,
      index,
    }))

  return (
    <Content>
      <Row>
        <Col flexGrow={2}>
          <SubHeading>User</SubHeading>
        </Col>
      </Row>
      <Row>
        <Col size={2} md={12}>
          <Filter
            search={search}
            setSearch={setSearch} />
        </Col>
        <Col md={12} style={{ marginRight: '13rem' }}>
        {
          loading ?
          <Loading />
        :
          <Grid
            data={cards}
            height={isWide ? 190 : 160}
            columns={isWide ? 3 : 1} />
        }
        </Col>

      </Row>
    </Content>
  );
}