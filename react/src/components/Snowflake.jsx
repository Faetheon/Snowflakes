import React from 'react';
import styled from 'styled-components';

const snowflakes = [
  "❅",
  "❆",
];

const Snowflake = ({lifeTime}) => {
  const flakeType = snowflakes[Math.ceil(Math.random() * 2)];
  const Flake = styled.div`
    width: ${Math.floor(lifeTime / 10)}
    height: ${Math.floor(lifeTime / 10)}
  `;
  return (
    <Flake>
      { flakeType }
    </Flake>
  )
}

export default Snowflake