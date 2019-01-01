import React, {
  FC,
  useEffect,
  useState,
} from 'react';
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
import { ISeason } from '../seasonState';

interface IProps {
  addSeason(season: ISeason): void;
  editSeason(season: ISeason): void;
  initialData: null | ISeason;
  setSelected: any;
}

const endDate = new Date();
endDate.setFullYear(new Date().getFullYear() + 1);
const blank: ISeason = {
  startDate: new Date(),
  endDate,
  id: '',
  visitorFee: 7,
};

export const SeasonForm: FC<IProps> = ({ addSeason, editSeason, initialData, setSelected }) => {
  const [season, setSeason] = useState<ISeason>(blank);

  useEffect(() => {
    if (initialData !== null) {
      setSeason(initialData);
    } else {
      setSeason(blank);
    }
  }, [initialData]);
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
          <Label>End date</Label>
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
            season.id === ''
              ? addSeason(season)
              : editSeason(season)
            setSeason(blank);
          }}>
          <IoIosAddCircle size="1rem" />
          {initialData === null ? 'Add' : 'Update'}
        </Button>
      </ModalFooter>
    </SlidePanelBody>
  )
}