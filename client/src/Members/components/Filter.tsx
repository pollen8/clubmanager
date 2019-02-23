import React, { FC } from 'react';
import Select from 'react-select';

import {
  FormGroup,
  Input,
  Label,
} from '../../app/components/Layout';
// import { seasonState } from '../../Season/seasonState';
import { IMembershipType } from '../memberState';

const memberOptions: Array<{ value: IMembershipType, label: string }> = [
  { value: '', label: 'any' },
  { value: 'member', label: 'member' },
  { value: 'guest', label: 'guest' },
];


export interface ISearch {
  name: string;
  membership: IMembershipType;
  season: any;
}

export interface IProps {
  setSearch: (search: ISearch) => void
  search: ISearch;
}

export const Filter: FC<IProps> = ({ setSearch, search }) => {
  // const { seasons } = seasonState();
  const seasons: any[] = [];
  const seasonOptions = seasons.map((season) => ({
    value: season,
    label: season.startDate.toLocaleDateString() + ' - ' + season.endDate.toLocaleDateString(),
  }))
  return (
    <div>
      <FormGroup>
        <Label>Filter</Label>
        <Input
          onChange={(e) => setSearch({
            ...search,
            name: e.target.value
          })}
          placeholder="...search"
          name="search" />
      </FormGroup>
      <FormGroup>
        <Label>Season</Label>
        <Select
          value={seasonOptions.find((option) => option.value.id === search.season)}
          options={seasonOptions}
          onChange={(v: any) => {
            setSearch({
              ...search,
              season: v.value || '',
            });
          }}
          id="search-season" />
      </FormGroup>
      <FormGroup>
        <Label>membership</Label>
        <Select
          value={memberOptions.find((option) => option.value === search.membership)}
          options={memberOptions}
          onChange={(v: any) => {
            setSearch({
              ...search,
              membership: v.value || '',
            });
          }}
          id="search-is-member" />
      </FormGroup>
    </div>
  );
};
