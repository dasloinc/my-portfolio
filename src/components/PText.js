import React from 'react';
import Styled from 'styled-components';

const PStyle = Styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText() {
  return (
    <PStyle>
      <p> This is a paragraph</p>
    </PStyle>
  );
}
