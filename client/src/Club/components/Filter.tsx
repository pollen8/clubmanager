import React, { FC } from 'react';

import {
  FormGroup,
  Input,
  Label,
} from '../../app/components/Layout';

export interface IClubSearch {
  name: string;
}

export interface IProps {
  setSearch: (search: IClubSearch) => void
  search: IClubSearch;
}

export const Filter: FC<IProps> = ({ setSearch, search }) => {
  return (
    <>
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
    </>
  );
};
