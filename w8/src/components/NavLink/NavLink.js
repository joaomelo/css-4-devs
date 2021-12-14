import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const NavLink = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;
  position: relative;
  display: block;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--natural-position));
  transition: transform 500ms;

  @media(prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(var(--hover-position));
      transition: transform 200ms;
    }  
  }
`;

const MainText = styled(Text)`
  --natural-position: 0%;
  --hover-position: -100%;
`;

const HoverText = styled(Text)`
  --natural-position: 100%;
  --hover-position: 0%;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.bold};
`;


export default NavLink;
