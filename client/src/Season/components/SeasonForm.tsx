import gql from 'graphql-tag';
import React, {
  FC,
  useEffect,
  useState,
} from 'react';
import { useMutation } from 'react-apollo-hooks';
import DatePicker from 'react-date-picker';
import { IoIosAddCircle } from 'react-icons/io';

import {
  Button,
  CardBody,
  FormGroup,
  Input,
  Label,
  ModalFooter,
  SlidePanelBody,
} from '../../app/components/Layout';
import { FILTER_SEASONS } from '../Season';
import { ISeason } from '../seasonState';

interface IProps {
  initialData: null | ISeason;
  setSelected: any;
}

const endDate = new Date();
endDate.setFullYear(new Date().getFullYear() + 1);
const blank: ISeason = {
  startDate: new Date(),
  endDate,
  id: '',
  visitorFee: '7',
};

const ADD_SEASON = gql`
  mutation AddSeason($startDate: String!, $endDate: String!, $visitorFee: Int) {
    addSeason(startDate: $startDate, endDate: $endDate, visitorFee: $visitorFee) {
      id,
      startDate,
      endDate,
      visitorFee,
    }
  }
`;

export const SeasonForm: FC<IProps> = ({ initialData, setSelected }) => {
  const [season, setSeason] = useState<ISeason>(blank);

  useEffect(() => {
    if (initialData !== null) {
      setSeason(initialData);
    } else {
      setSeason(blank);
    }
  }, [initialData]);

  const addSeason = useMutation(ADD_SEASON, {
    update: (cache, { data: { addSeason } }) => {
      const c = cache.readQuery<any>({ query: FILTER_SEASONS });
      console.log('cache', c);
      const { filterSeasons } = c;
      const i = filterSeasons.findIndex((season: any) => season.id === addSeason.id);
      const data = i === -1
        ? filterSeasons.concat([addSeason])
        : filterSeasons.map((season: any) => season.id === addSeason.id ? addSeason : season);
      cache.writeQuery({
        query: FILTER_SEASONS,
        data: { filterSeasons: data },
      });
    }
  });
  return (

    <SlidePanelBody>
      <CardBody>
        <FormGroup>
          <Label>Start date</Label>
          <DatePicker
            value={season.startDate}
            onChange={(v) => {
              const startDate = Array.isArray(v) ? v[0] : v;
              setSeason({
                ...season,
                startDate,
              })
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            End date
              </Label>
          <DatePicker
            value={season.endDate}
            onChange={(v) => {
              const endDate = Array.isArray(v) ? v[0] : v;
              setSeason({
                ...season,
                endDate,
              })
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="visitorFee">
            Visitor fee
              </Label>
          <Input name="visitorFee"
            id="visitorFee"
            value={String(season.visitorFee)}
            onChange={(e) => setSeason({
              ...season,
              visitorFee: e.target.value,
            })} />
        </FormGroup>

      </CardBody>
      <ModalFooter>
        <Button
          outline
          onClick={() => setSelected(null)}>
          Clear
         </Button>

        <Button
          onClick={() => {
            console.log('season', season);
            const variables = { startDate: season.startDate, endDate: season.endDate, visitorFee: Number(season.visitorFee) };
            // season.id === ''
            //   ? addSeason({ variables })
            //   : editSeason({ variables, id: season.id })
            //   ;
            addSeason({ variables });
            setSeason(blank);
          }}>
          <IoIosAddCircle size="1rem" />
          {initialData === null ? 'Add' : 'Update'}
        </Button>
      </ModalFooter>
    </SlidePanelBody>

  )
}