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
  mutation UpsertClub($name: String!, $description: String) {
    upsertClub(name: $name, description: $description) {
      id,
      name,
      description
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
    update: (cache, { data: { addClub } }) => {
      const c = cache.readQuery<any>({ query: FILTER_CLUBS });
      console.log('cache', c);
      const { filterClubs } = c;
      const i = filterClubs.findIndex((season: any) => season.id === addClub.id);
      const data = i === -1
        ? filterClubs.concat([addClub])
        : filterClubs.map((season: any) => season.id === addClub.id ? addClub : season);
      cache.writeQuery({
        query: FILTER_CLUBS,
        data: { filterClubs: data },
      });
    }
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
            console.log('club', club);
            upsertClub({ variables: club });
            setClub(blank);
          }}>
          <IoIosAddCircle size="1rem" />
          {initialData === null ? 'Add' : 'Update'}
        </Button>
      </ModalFooter>
    </SlidePanelBody>

  )
}