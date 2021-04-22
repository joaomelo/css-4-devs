/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value = 0, size }) => {
  const sizeMap = {
    small: {
      height: '8px',
      radius: '4px',
      padding: '0'
    },
    medium: {
      height: '12px',
      radius: '4px',
      padding: '0'
    },
    large: {
      height: '16px',
      radius: '8px',
      padding: '4px'
    }
  };
  const styles = sizeMap[size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      radius={styles.radius}
      padding={styles.padding}
    >
      <VisuallyHidden>{ value }%</VisuallyHidden>
      <BarWrapper radius={styles.radius}>
        <Bar width={`${value}%`} height={styles.height}/>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${props => props.padding};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${props => props.radius};
`

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`

const Bar = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${COLORS.primary};
`

export default ProgressBar;
