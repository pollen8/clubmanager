import React from 'react';
import { Spring } from 'react-spring';
import styled from 'styled-components';

import {
  Card,
  CardBody,
} from '../app/components/Layout';
import { IRegister } from './Register';

interface IProps {
  registry: IRegister;
}

const StatsCard = styled(Card)`
  color: ${({ theme }) => theme.primary500};
`;

export const SessionAttendance: React.SFC<IProps> = ({ registry }) => {
  const total = registry.attendance.length;
  const attending = registry.attendance.filter((l) => l.attended).length;
  const percent = total === 0 ? 0 : (attending / total);
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

        <div>Attendance</div>
      </CardBody>
    </StatsCard>
  )
}