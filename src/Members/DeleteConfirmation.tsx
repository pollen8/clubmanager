import React, {
  Fragment,
  useState,
} from 'react';
import { IoMdTrash } from 'react-icons/io';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from '../app/components/Layout';

interface IProps {
  onDelete: () => void;
}
export const DeleteConfirmation: React.FC<IProps> = ({ onDelete }) => {
  const [open, onToggle] = useState(false);
  return (
    <Fragment>
      <Button size="sm"
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
        }}
        color="grey500"
        onClick={() => onToggle(true)}>
        X
      </Button>
      <Modal open={open}
        closeIconSize={0}
        styles={{
          modal: {
            padding: 0,
            borderRadius: '0.25rem',
          }
        }}
        onClose={() => onToggle(false)} center>
        <ModalBody>
          <h3>Are you sure you want to delete?</h3>
        </ModalBody>
        <ModalFooter>
          <Button
            outline
            onClick={() => onToggle(false)}>
            Cancel
            </Button>
          <Button
            color="danger500"
            hoverColor="danger400"
            onClick={onDelete}>
            <IoMdTrash size="1.2rem" />Delete
        </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
}
