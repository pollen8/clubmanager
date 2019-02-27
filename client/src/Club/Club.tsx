import gql from 'graphql-tag';
import React, {
  FC,
  useState,
} from 'react';
import { useQuery } from 'react-apollo-hooks';
import { IoIosAddCircle } from 'react-icons/io';
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
// import { DeleteConfirmation } from '../Members/components/DeleteConfirmation';
import { ClubForm } from './components/ClubForm';

export interface IClub {
  name: string;
  id: string;
  description?: string;
}

export interface ISearch {
  name: string;
}

export const FILTER_CLUBS = gql`
{
  filterClubs(searchString: "") {
    id,
    name,
    description,
  }
}`;

export const Club: FC<{}> = () => {
  const [visible, showForm] = useState(false);
  const [selected, setSelected] = useState<IClub | null>(null);
  const isWide = useMedia(`(min-width: ${sizes.desktop}px)`);
  const { data, error, loading } = useQuery(FILTER_CLUBS);
  if (loading) return <p>Loading...</p>;
  if (error || data === undefined) return <p>Error :(</p>;
  const cards = data.filterClubs
    .map((club: IClub, index: number) => ({

      component: (
        <Card style={{ display: 'flex', position: 'relative' }}>
          <CardBody>
            <Row>
              <Col flexGrow={1}>
                <Name>
                  {club.name}
                </Name>
                <small>
                  {club.description}
                </small>
                <Button
                  size="sm"
                  onClick={() => {
                    setSelected(club);
                    showForm(true);
                  }}>
                  Edit
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>

      ),
      id: club.id,
      index,
    }))
  return (<Content>
    <Row>
      <Col flexGrow={2}>
        <SubHeading>Clubs</SubHeading>
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

      <Col md={12} style={{ marginRight: '13rem' }}>
        <Grid
          data={cards}
          height={isWide ? 190 : 160}
          columns={isWide ? 3 : 1} />
      </Col>
      <SlidePanel visible={visible}>
        <ClubForm
          initialData={selected}
          setSelected={setSelected}
        />
      </SlidePanel>
    </Row>
  </Content>
  );
}