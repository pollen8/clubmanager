import React, {
  FC,
  useEffect,
  useState,
} from 'react';
import { useMutation } from 'react-apollo-hooks';
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
import { IClub } from '../Club';
import {
  update,
  UPDATE_CLUB,
} from '../Querires';

interface IProps {
  initialData: null | IClub;
  setSelected: any;
}

const blank: IClub = {
  id: '',
  name: '',
  description: '',
};


export const ClubForm: FC<IProps> = ({ initialData, setSelected }) => {
  const [club, setClub] = useState<IClub>(blank);

  useEffect(() =>
    setClub(initialData !== null ? initialData : blank),
    [initialData]);

  const upsertClub = useMutation(UPDATE_CLUB, { update });
  return (

    <SlidePanelBody>
      <CardBody>
        <FormGroup>
          <Label htmlFor="clubName">Name</Label>
          <Input
            id="clubName"
            value={club.name}
            onChange={(e) => {
              setClub({
                ...club,
                name: e.target.value,
              })
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="clubDescription">
            Description
          </Label>
          <Input
            id="clubDescription"
            value={club.description}
            onChange={(e) => setClub({
              ...club,
              description: e.target.value,
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
            upsertClub({ variables: club });
            setClub(blank);
          }}>
          <IoIosAddCircle size="1rem" />
          {club.id === '' ? 'Add' : 'Update'}
        </Button>
      </ModalFooter>
    </SlidePanelBody>
  )
}