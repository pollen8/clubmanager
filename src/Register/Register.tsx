import React, {
  SFC,
  useEffect,
  useState,
} from 'react';
import DatePicker from 'react-date-picker';
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
import {
  IMember,
  memberState,
} from '../Members/memberState';
import { SessionAttendance } from './SessionAttendance';
import { SessionPayments } from './SessionPayments';

interface IUserAttendance {
  member: IMember;
  attended: boolean;
  paid: boolean;
}

export interface IRegister {
  date: Date;
  attendance: IUserAttendance[];
}

const setAttended = (registry: IRegister, member: IMember, attended: boolean): IRegister => {
  const i = registry.attendance.findIndex((a) => a.member.id === member.id);
  registry.attendance[i].attended = attended;
  return registry;
}

const setPaid = (registry: IRegister, member: IMember, paid: boolean): IRegister => {
  const i = registry.attendance.findIndex((a) => a.member.id === member.id);
  registry.attendance[i].paid = paid;
  return registry;
}

export const Register: SFC<{}> = () => {
  const { members } = memberState([]);
  const [registry, setRegistry] = useState<IRegister>({
    attendance: [],
    date: new Date(),
  });

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setRegistry({
      ...registry,
      attendance: members.map((member) => ({
        member,
        attended: false,
        paid: false,
      })),
    })
  }, [members]);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <DatePicker
              value={registry.date}
              returnValue="start"
              onChange={(date: any) => setRegistry({
                ...registry,
                date,
              })} />
            <CardBody>
              <table>
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Attended</th>
                    <th>Paid</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    registry.attendance.map((line, i) => <tr key={line.member.id}>
                      <td>
                        <label htmlFor={`attended-${i}`}>
                          {line.member.name}
                        </label>
                      </td>
                      <td>
                        <Input
                          checked={line.attended}
                          onChange={(e) => setRegistry(setAttended(registry, line.member, e.target.checked))}
                          id={`attended-${i}`}
                          type="checkbox" />
                      </td>
                      <td>
                        {
                          line.member.membership == 'guest'
                            ? <Input type="checkbox"
                              checked={line.paid}
                              onChange={(e) => setRegistry(setPaid(registry, line.member, e.target.checked))} />
                            : '-'
                        }
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>

            </CardBody>
          </Card>
        </Col>
        <Col size={1}>
          <SessionAttendance
            registry={registry} />
        </Col>
        <Col size={1}>
          <SessionPayments
            registry={registry} />
        </Col>
      </Row>
    </Container>
  );
};

