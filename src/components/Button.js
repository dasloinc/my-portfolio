import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
      margin-bottom: -2rem; //אפשר להוריד
    }
  }
`;

export default function Button({
  btnLink = 'test',
  btnText = 'Test',
  outline = false /* if true the button will be transparent */,
}) {
  return (
    <ButtonStyle outline={outline}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
