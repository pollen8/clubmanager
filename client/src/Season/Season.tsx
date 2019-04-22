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
import { SeasonForm } from './components/SeasonForm';
import { ISeason } from './seasonState';

export interface ISearch {
  name: string;
}

export const FILTER_SEASONS = gql`
{
  filterSeasons(searchString: "") {
    id,
    startDate,
    endDate,
    visitorFee,
  }
}`;

export const Season: FC<{}> = () => {
  const [visible, showForm] = useState(false);
  const [selected, setSelected] = useState<ISeason | null>(null);
  const isWide = useMedia(`(min-width: ${sizes.desktop}px)`);
  const { data, error, loading } = useQuery(FILTER_SEASONS);
  if (loading) return <p>Loading...</p>;
  console.log('error', error);
  if (error || data === undefined) return <p>Error :(</p>;
  const cards = data.filterSeasons
    .map((season: any, index: number) => ({

      component: (
        <Card style={{ display: 'flex', position: 'relative' }}>
          <CardBody>
            <Row>
              <Col flexGrow={1}>
                <Name>
                  {new Date(season.startDate).toLocaleDateString()} -
                  {new Date(season.endDate).toLocaleDateString()}

                </Name>
                <strong>&pound;{season.visitorFee}</strong> visitor fee
                {/* <DeleteConfirmation onDelete={() => deleteSeason(season.id)} /> */}
                <Button
                  size="sm"
                  onClick={() => {
                    setSelected(season);
                    showForm(true);
                  }}>
                  Edit
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>

      ),
      id: season.id,
      index,
    }))
  return (<Content>
    <Row>
      <Col flexGrow={2}>
        <SubHeading>Seasons</SubHeading>
      </Col>
      <Col flexGrow={0}>
        <Button size="sm"
          color="grey500"
          onClick={() => showForm(!visible)}>
          <IoIosAddCircle />
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
        <SeasonForm
          // addSeason={addSeason}
          // editSeason={editSeason}
          initialData={selected}
          setSelected={setSelected}
        />
      </SlidePanel>
    </Row>
  </Content>
  );
}