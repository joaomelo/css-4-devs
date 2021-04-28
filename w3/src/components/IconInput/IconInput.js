import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const sizeStylesMap = {
    small: {
      fontSize: 14,
      iconSize: 16,
      border: 1,
      height: 24
    },
    large: {
      fontSize: 18,
      iconSize: 24,
      border: 2,
      height: 36
    },
  }
  const { fontSize, iconSize, border, height } = sizeStylesMap[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={iconSize}>
        <Icon id={icon} size={iconSize}/>
      </IconWrapper>
      <TextInput 
        placeholder={placeholder} 
        height={height} 
        width={width}
        border={border}
        fontSize={fontSize}
      />
    </Wrapper>
  )
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: ${({ size }) => size}px
`;

const TextInput = styled.input`
  height: ${({height})=>height}px;
  width: ${({width})=>width}px;
  border: 0;
  border-bottom: ${({border})=>border}px solid ${COLORS.black};
  padding-left: ${({height})=>height}px;
  color: inherit;
  font-size:  ${({fontSize})=>fontSize}px;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
