import React, {
  FC,
  useState,
} from 'react';
import { useMedia } from 'use-media';

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
import { Filter } from './components/Filter';
import { userState } from './userState';

export interface ISearch {
  name: string;
}

export const User: FC<{}> = () => {
  const { users, usersRoles, updateRole, isCurrentUser } = userState();
  const isWide = useMedia(`(min-width: ${sizes.desktop}px)`);
  const [search, setSearch] = useState<ISearch>({
    name: '',
  });
  const cards = users
    .filter((user) => {
      if (search.name === '') {
        return true;
      }
      const regex = new RegExp(search.name, 'gi');
      return String(user.getUsername()).search(regex) !== -1;
    })
    .map((user, index) => ({

      component: (
        <Card style={{ display: 'flex', position: 'relative' }}>
          <CardBody>
            <Row>
              <Col flexGrow={1}>
                <Name>
                  {user.getUsername()}
                </Name>
                {user.getEmail()}
                {
                  usersRoles.map((role) => {
                    const id = 'role-' + user.id + '-' + role.name;
                    return <FormGroup
                      key={role.name}
                      checked>

                      <Input type="checkbox"
                        id={id}
                        disabled={isCurrentUser(user.id)}
                        checked={user.roles.map((r) => r.name).includes(role.name)}
                        onChange={(e) => updateRole(user.id, role, e.target.checked)} />
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
          <Grid
            data={cards}
            height={isWide ? 190 : 160}
            columns={isWide ? 3 : 1} />
        </Col>

      </Row>
    </Content>
  );
}