import React from 'react';
import Select from 'react-select';

import {
  FormGroup,
  Input,
  Label,
} from '../Layout';
import { IMembershipType } from './memberState';

const memberOptions: Array<{ value: IMembershipType, label: string }> = [
  { value: '', label: 'any' },
  { value: 'member', label: 'member' },
  { value: 'guest', label: 'guest' },
];


export interface ISearch {
  name: string;
  membership: IMembershipType;
}

export interface IProps {
  setSearch: (search: ISearch) => void
  search: ISearch;
}

export const Filter: React.SFC<IProps> = ({ setSearch, search }) => {
  return <div>
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
};
