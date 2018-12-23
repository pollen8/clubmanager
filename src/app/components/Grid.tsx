import React, { CSSProperties } from 'react';
import {
  animated,
  Transition,
} from 'react-spring';

interface IProps {
  columns: number;
  height: number;
  data: Array<{
    id: string;
    index: number;
    component: React.ReactElement<any>;
  }>;
}

const commonCss = (columns: number, width: number, height: number, item: any): CSSProperties => {
  const row = Math.floor(item.index / columns);
  return {
    left: item.index % columns * width + '%',
    position: 'absolute',
    top: row * height + 'px',
    width: width + '%',
  };
};

const from = (columns: number, width: number, height: number) => (item: any) => ({
  ...commonCss(columns, width, height, item),
  opacity: 0,
  transform: 'translate3d(0,40px,0)',
});

const show = (columns: number, width: number, height: number) => (item: any) => ({
  ...commonCss(columns, width, height, item),
  opacity: 1,
  transform: 'translate3d(0,0px,0)',
});

const leave = (columns: number, width: number, height: number) => (item: any) => ({
  ...commonCss(columns, width, height, item),
  opacity: 0,
  transform: 'translate3d(0,40px,0)',
});

export class Grid extends React.Component<IProps> {

  public render() {
    const { columns, height, data } = this.props;
    const containerHeight = Math.ceil(data.length / columns) * height;
    const width = 100 / columns;
    return (
      <div style={{ position: 'relative', height: containerHeight + 'px' }}>
        <Transition
          items={data}
          native
          keys={(item: any) => item.id}
          from={from(columns, width, height)}
          enter={show(columns, width, height)}
          update={show(columns, width, height)}
          leave={leave(columns, width, height)}
        >
          {(item: any) => (props: any) =>
            <animated.div style={props}>{item.component}</animated.div>
          }
        </Transition>
      </div>
    );
  }
}
