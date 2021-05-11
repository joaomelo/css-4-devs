import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
        {SHOES.map((shoe) => (
          <Constraint key={shoe.slug}>
            <ShoeCard {...shoe} />
          </Constraint>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const Constraint = styled.div `
  flex: 1 0 275px;
`;

export default ShoeGrid;
