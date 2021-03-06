import React, { FC } from 'react';
import { Spring } from 'react-spring';
import styled from 'styled-components';

import {
  Card,
  CardBody,
} from '../app/components/Layout';
import { IAttendance } from './attendanceState';

interface IProps {
  attendance: IAttendance[];
}

const StatsCard = styled(Card)`
  color: ${({ theme }) => theme.primary500};
`;

export const SessionPayments: FC<IProps> = ({ attendance }) => {
  const total = attendance.filter((l) => l.attended && l.member.membership === 'guest').length;
  const paid = attendance.filter((l) => l.paid && l.member.membership === 'guest').length;
  const percent = total === 0 ? 1 : (paid / total);
  return (
    <StatsCard>
      <CardBody>
        <Spring
          config={{ tension: 210, friction: 14, clamp: true }}
          from={{ number: 0 }}
          to={{ number: percent }}
        >
          {(style) => <h3>{(style.number * 100).toFixed(2)}%</h3>
          }
        </Spring>

        <div>Guests Paid</div>
      </CardBody>
    </StatsCard>
  )
}