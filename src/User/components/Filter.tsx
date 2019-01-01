import React, { FC } from 'react';

import {
  FormGroup,
  Input,
  Label,
} from '../../app/components/Layout';
import { ISearch } from '../User';

export interface IProps {
  setSearch: (search: ISearch) => void
  search: ISearch;
}

export const Filter: FC<IProps> = ({ setSearch, search }) => {
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
    </div>
  );
};
