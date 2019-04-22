import React, {
  FC,
  useState,
} from 'react';
import {
  useMutation,
  useQuery,
} from 'react-apollo-hooks';
import { IoIosAddCircle } from 'react-icons/io';
import { useMedia } from 'use-media';

import { DeleteConfirmation } from '../app/components/DeleteConfirmation';
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
import { ClubForm } from './components/ClubForm';
import {
  Filter,
  IClubSearch,
} from './components/Filter';
import {
  DELETE_CLUB,
  FILTER_CLUBS,
  remove,
} from './Querires';

export interface IClub {
  name: string;
  id: string;
  description?: string;
}

export interface ISearch {
  name: string;
}

export const Club: FC<{}> = () => {
  const [visible, showForm] = useState(false);
  const [selected, setSelected] = useState<IClub | null>(null);
  const [search, setSearch] = useState<IClubSearch>({ name: '' });
  const isWide = useMedia(`(min-width: ${sizes.desktop}px)`);
  const { data, error, loading } = useQuery(FILTER_CLUBS, { variables: { searchString: search.name } });
  const deleteClub = useMutation(DELETE_CLUB, { update: remove });
  if (error || data === undefined) return <p>Error :(</p>;
  const cards = data && data.filterClubs && data.filterClubs
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
          <DeleteConfirmation onDelete={() => deleteClub({ variables: { id: club.id } })} />
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
        <Button 
          size="sm"
          color="grey500"
          onClick={() => showForm(!visible)}>
          <IoIosAddCircle  />
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
        {loading
          ? <p>Loading...</p>
          :
          <Grid
            data={cards}
            height={isWide ? 190 : 160}
            columns={isWide ? 3 : 1} />
        }
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