import React, { FC } from 'react';
import { Spring } from 'react-spring';

export const SlidePanel: FC<{ visible: boolean }> = ({ visible, children }) => {
  return (
    <div style={{ overflow: 'hidden', width: '14rem', position: 'fixed', right: '0', height: 'calc(100%)' }}>
      <Spring
        config={{ tension: 210, friction: 14, clamp: true }}
        from={{
          right: !visible ? '0' : '-14rem',
          width: !visible ? '14rem' : '0',
        }}
        to={{
          right: !visible ? '-14rem' : '0',
          width: visible ? '0' : '14rem',
        }}
      >
        {(style) => {
          return <div style={{
            height: '100%',
            transform: `translate(${style.width}, 0)`,

          }}>
            {children}
          </div>;
        }
        }

      </Spring>
    </div>
  )
}
