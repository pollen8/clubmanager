import gql from 'graphql-tag';
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
import {
  FILTER_CLUBS,
  IClub,
} from '../Club';

interface IProps {
  initialData: null | IClub;
  setSelected: any;
}

const blank: IClub = {
  id: '',
  name: '',
  description: '',
};


const UPDATE_CLUB = gql`
  mutation UpsertClub($id: ID!, $name: String!, $description: String) {
    upsertClub(club: {
      id: $id, 
      name: $name
      description: $description
    }) {
      id,
      description,
      name,
    }
  }
`;


export const ClubForm: FC<IProps> = ({ initialData, setSelected }) => {
  const [club, setClub] = useState<IClub>(blank);

  useEffect(() => {
    if (initialData !== null) {
      setClub(initialData);
    } else {
      setClub(blank);
    }
  }, [initialData]);

  const upsertClub = useMutation(UPDATE_CLUB, {
    update: (cache, { data: { upsertClub } }) => {
      const c = cache.readQuery<{ filterClubs: IClub[] }>({ query: FILTER_CLUBS });
      if (!c) {
        return;
      }
      const { filterClubs } = c;
      const i = filterClubs.findIndex((club) => club.id === upsertClub.id);
      const data = i === -1
        ? filterClubs.concat([upsertClub])
        : filterClubs.map((club) => club.id === upsertClub.id ? upsertClub : club);
      cache.writeQuery({
        query: FILTER_CLUBS,
        data: { filterClubs: data },
      });
    },
    variables: club,
  });
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