import React, {
  FC,
  useState,
} from 'react';
import { IoMdTrash } from 'react-icons/io';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from './Layout';

interface IProps {
  onDelete: () => void;
}
export const DeleteConfirmation: FC<IProps> = ({ onDelete }) => {
  const [open, onToggle] = useState(false);
  return (
    <>
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
            type="button"
            outline
            onClick={() => onToggle(false)}>
            Cancel
            </Button>
          <Button
            type="button"
            color="danger500"
            hoverColor="danger400"
            onClick={() => {
              onToggle(false);
              onDelete();
            }}>
            <IoMdTrash size="1.2rem" />Delete
        </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
