import React, {
  FC,
  useEffect,
  useState,
} from 'react';
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
  IMember,
  IMembershipType,
} from '../memberState';

interface IProps {
  addMember: (game: IMember) => void;
  editMember: (game: IMember) => void;
  initialData: null | IMember;
  setSelected: any;
}
export const AddMemberForm: FC<IProps & React.HTMLAttributes<HTMLDivElement>>
  = ({ addMember, editMember, initialData, setSelected }) => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [membership, setMembership] = useState<IMembershipType>('');

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      if (initialData !== null) {
        setName(initialData.name);
        setMembership(initialData.membership);
        setId(initialData.id);
      } else {
        setName('');
        setMembership('guest');
        setId('');
      }
    }, [initialData]);
    return (
      <SlidePanelBody>
        <CardBody>
          <FormGroup>
            <Label htmlFor="gameName">
              Name
            </Label>
            <Input name="name" id="gameName"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </FormGroup>
          <FormGroup
            checked>
            <Label htmlFor="membership">
              Is a member?
          </Label>
            <Input type="checkbox"
              id="membership"
              checked={membership === 'member'}
              onChange={(e) => setMembership(e.target.checked ? 'member' : 'guest')} />

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
              id === ''
                ? addMember({ season: [], name, membership, id })
                : editMember({ season: [], name, membership, id })
              setName('');
              setMembership('guest');
              setId('');
            }}>
            <IoIosAddCircle size="1rem" />
            {initialData === null ? 'Add' : 'Update'}
          </Button>
        </ModalFooter>
      </SlidePanelBody>
    );
  }