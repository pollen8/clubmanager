import React, {
  SFC,
  useState,
} from 'react';
// import { IoIosTrophy } from 'react-icons/io';
import { Spring } from 'react-spring';
import styled from 'styled-components';

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Row,
} from '../Layout';
import { memberState } from '../Members/memberState';

interface IUserAttendance {
  userid: string;
  attended: boolean;
  paid: boolean;
}

interface IRegsiter {
  date: Date;
  attendance: IUserAttendance[];
}

export const Register: SFC<{}> = () => {
  const { members } = memberState([]);
  return (
    <Container>
      <Card>
        <CardBody>
          <table>
            <thead>
              <tr>
                <th>Member</th>
                <th>Attended</th>
                <th>Paid</th>
              </tr>
            </thead>
            {
              members.map((member, i) => <tr key={member.id}>
                <td>
                  <label htmlFor={`attended-${i}`}>
                    {member.name}
                  </label>
                </td>
                <td>
                  <Input
                    id={`attended-${i}`}
                    type="checkbox" />
                </td>
                <td>
                  <Input type="checkbox" />
                </td>

              </tr>)
            }
          </table>
        </CardBody>
      </Card>
      <Row>
        <Col>

        </Col>
      </Row>
    </Container>
  );
};

