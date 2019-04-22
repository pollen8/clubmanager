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
  IMember,
  IMembershipType,
} from '../Members';
import {
  update,
  UPDATE_MEMBER,
} from '../Queries';


const blank: IMember = {
  id: '',
  name: '',
  membership: 'guest',
  season: [],
};

interface IProps {
  // addMember: (game: IMember) => void;
  // editMember: (game: IMember) => void;
  initialData: null | IMember;
  setSelected: any;
}
export const AddMemberForm: FC<IProps & React.HTMLAttributes<HTMLDivElement>>
  = ({ initialData, setSelected }) => {
    const [member, setMember] = useState<IMember>(blank);

    useEffect(() =>
      setMember(initialData !== null ? initialData : blank),
      [initialData]);
 
    const upsertMember = useMutation(UPDATE_MEMBER, { update });

    return (
      <SlidePanelBody>
        <CardBody>
          <FormGroup>
            <Label htmlFor="gameName">
              Name
            </Label>
            <Input name="name" 
              id="memberName"
              value={member.name}
              onChange={(e) => setMember({...member, name: e.target.value})} />
          </FormGroup>
          <FormGroup
            checked>
            <Label htmlFor="membership">
              Is a member?
          </Label>
            <Input type="checkbox"
              id="membership"
              checked={member.membership === 'member'}
              onChange={(e) => setMember({
                ...member,
                membership: e.target.checked ? 'member' : 'guest',
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
              upsertMember({ variables: member });
              setMember(blank);
            }}>
            <IoIosAddCircle size="1rem" />
            {initialData === null ? 'Add' : 'Update'}
          </Button>
        </ModalFooter>
      </SlidePanelBody>
    );
  }