import React, { FC } from 'react';
import DatePicker from 'react-date-picker';

import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Row,
} from '../app/components/Layout';
import { ISearch } from '../Members/components/Filter';
// import { memberState } from '../Members/memberState';
// import { attendanceState } from './attendanceState';
import { SessionAttendance } from './SessionAttendance';
import { SessionPayments } from './SessionPayments';

export const Attendance: FC<{}> = () => {
  const search: ISearch = {
    membership: '',
    name: '',
    season: '',
  }
  // const { members } = memberState(search);
  // const { editAttendance, attendance } = attendanceState(members);
  const memebers: any[] = [];
  const attendance: any[] = [];
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card>
            <DatePicker
              value={new Date()}
              returnValue="start"
            />
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
                    attendance.map((line, i) => {
                      return <tr key={line.member.id}>
                        <td>
                          <label htmlFor={`attended-${i}`}>
                            {line.member.name}
                          </label>
                        </td>
                        <td>
                          {/* <Input
                            checked={line.attended}
                            onChange={(e) => editAttendance({
                              ...line,
                              attended: e.target.checked,
                            })}
                            id={`attended-${i}`}
                            type="checkbox" /> */}
                        </td>
                        {/* <td>
                          {
                            line.member.membership == 'guest'
                              ? <Input type="checkbox"
                                checked={line.paid}
                                onChange={(e) => editAttendance({
                                  ...line,
                                  paid: e.target.checked,
                                })}
                              />
                              : '-'
                          }
                        </td> */}
                      </tr>;
                    })
                  }
                </tbody>
              </table>

            </CardBody>
          </Card>
        </Col>
        <Col size={1} md={6}>
          <SessionAttendance
            attendance={attendance} />
        </Col>
        <Col size={1} md={6}>
          <SessionPayments
            attendance={attendance} />
        </Col>
      </Row>
    </Container>
  );
};

