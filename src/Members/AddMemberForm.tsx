import React, {
  useEffect,
  useState,
} from 'react';

import {
  Button,
  FormGroup,
  Input,
  Label,
} from '../Layout';
import { IMember } from './memberState';

interface IProps {
  addMember: (game: IMember) => void;
  initialData: null | IMember;
  setSelected: any;
}
export const AddMemberForm: React.SFC<IProps & React.HTMLAttributes<HTMLDivElement>>
  = ({ addMember, initialData, setSelected }) => {
    const [name, setName] = useState('');

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      if (initialData !== null) {
        setName(initialData.name);
      } else {
        setName('');
      }
    });
    return (
      <div>
        <FormGroup>
          <Label htmlFor="gameName">
            Name
        </Label>
          <Input name="name" id="gameName"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </FormGroup>
        <Button
          onClick={() => {
            addMember({ name, id: '', });
            setName('');
          }}>
          {initialData === null ? 'Add' : 'Edit'}
        </Button>
        <Button
          onClick={() => setSelected(null)}>
          Clear
          </Button>
      </div>
    );
  }